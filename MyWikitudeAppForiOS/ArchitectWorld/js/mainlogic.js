// ARchitect World（＝AR体験）の実装
var World = {
	// データロードを1回のみにするためのフラグ。
	initiallyLoadedData: false,
	
	// ロケーション情報を変更中かを判定するフラグ。
	changingLocationDisplay: false,

	// さまざまなPOIのMarkerのアセット（assets）。
	markerDrawable_idle: null,
	markerDrawable_selected: null,

	// ARchitect World内に表示されているAR.GeoObjectリスト。
	markerList: [],

	// 最後に選択されたマーカー。
	currentMarker: null,

	// 新しいPOIデータを注入するために呼ばれる関数。
	loadPoisFromJsonData: function (poiData) {

		AR.context.destroyAll();
		
		// マーカーのアセットをイメージリソースとしてロードします。
		World.markerDrawable_idle = new AR.ImageResource("assets/marker_idle.png");
		World.markerDrawable_selected = new AR.ImageResource("assets/marker_selected.png");
		
		// 見えるマーカーのリストを空にします。
		World.markerList = [];

		// 全てのPOI情報をループしながら、1つのPOIごとにAR.GeoObject（＝マーカー）を作成します。
		for (var currentPlaceNr = 0; currentPlaceNr < poiData.length; currentPlaceNr++) {
			var singlePoi = {
				"id":          poiData[currentPlaceNr].id,
				"latitude":    poiData[currentPlaceNr].latitude,
				"longitude":   poiData[currentPlaceNr].longitude,
				"altitude":    poiData[currentPlaceNr].altitude,
				"distance":    poiData[currentPlaceNr].distance,
				"busstopinfo": poiData[currentPlaceNr].busstopinfo
			};

			// ユーザーが何もないスクリーン上をタップした際に選択中のマーカーを選択解除できるようにするため、
			// 1つ1つのマーカーが含まれる配列をWorldオブジェクトに保持させます。
			World.markerList.push(new Marker(singlePoi));
		}
	},

	// 下部中央付近にあるフッターに、警告時＝［△］／通常時［i］の小さなボタンを表示し、そのボタンクリック時にポップアップする状態メッセージを更新します。
	updateStatusMessage: function (message, isWarning) {

		var themeToUse = isWarning ? "e" : "c";
		var iconToUse = isWarning ? "alert" : "info";

		$("#status-message").html(message);
		$("#popupInfoButton").buttonMarkup({
			theme: themeToUse
		});
		$("#popupInfoButton").buttonMarkup({
			icon: iconToUse
		});
	},

	// ロケーションを更新します。Androidネイティブ環境でarchitectView.setLocationメソッドが呼び出されるたびに、この関数は呼び出されます。iOSではネイティブサービスのstartUpdatingLocationメソッドを呼び出すとここが呼び出されるようです（※ドキュメントなし）。
	locationChanged: function (lat, lon, alt, acc) {

		if (World.changingLocationDisplay) return;
		World.changingLocationDisplay = true;
		
		// World.initiallyLoadedDataフラグを確認して、初回起動時にのみPOIデータをロードする処理を実行します。
		if (!World.initiallyLoadedData) {
			// 渡された緯度（＝latitude）と経度（＝longitude）を指定して、requestDataFromLocal関数を呼び出し、現在地周辺のPOIデータを取得します。
			// 最後にフラグを「読み込み済み」（＝true）に設定します。
			World.requestDataFromLocal(lat, lon, alt, acc);
			World.initiallyLoadedData = true;

		} else {
			// 対象地点からの距離情報を頻繁に更新します。
			World.updateDistanceValues(lat, lon, alt, acc);
		}
		
		// テスト表示用（［i］ボタンをタップすると表示される状態メッセージをセットします）。
		World.updateStatusMessage(World.markerList.length + "カ所、緯度・経度：" + lat + ", " + lon);
		//alert("緯度・経度：" + lat + ", " + lon);

		World.changingLocationDisplay = false;
	},

	// カメラビュー内でユーザーがマーカーを押した時に呼び出されます。
	onMarkerSelected: function (marker) {

		// 前回選択されていたマーカーの選択を解除します。
		if (World.currentMarker) {
			if (World.currentMarker.poiData.id == marker.poiData.id) {
				return;
			}
			World.currentMarker.setDeselected(World.currentMarker);
		}

		// 今回のマーカーを選択してハイライトします。
		marker.setSelected(marker);
		World.currentMarker = marker;
	},

	// ロケーションARオブジェクト以外のスクリーンがクリッックされた時に呼び出されます。
	onScreenClick: function () {
		if (World.currentMarker) {
			World.currentMarker.setDeselected(World.currentMarker);
		}
	},

	// 指定された地点における全てのPOIデータをロードします。
	requestDataFromLocal: function (centerPointLatitude, centerPointLongitude, centerPointAltitude, centerPointAccuracy) {

		// 念のためValidate（値検証）しています。
		if ("number" !== typeof centerPointLatitude || centerPointLatitude < -90) centerPointLatitude = -90;
		if ("number" !== typeof centerPointLatitude || centerPointLatitude > 90) centerPointLatitude = 90;
		if ("number" !== typeof centerPointLongitude || centerPointLongitude < -180) centerPointLongitude = -180;
		if ("number" !== typeof centerPointLongitude || centerPointLongitude > 180) centerPointLongitude = 180;
		//if ("number" !== typeof centerPointAltitude || centerPointAccuracy <= 0) centerPointAccuracy = 0;
		
		var poiData = [];

		// myJsonDataオブジェクトは、myjsondata.jsに定義しておいたバス停のPOIデータです。
		for (var i = 0, length = myJsonData.length; i < length; i++) {
			var distance = World.getDistance(myJsonData[i].latitude, centerPointLatitude, myJsonData[i].longitude, centerPointLongitude);
			if (distance > 500.0) continue;  // 0.5km（＝500m）以上先のPOIデータは破棄します。
			var distanceString = (distance > 999) ? ((distance / 1000).toFixed(2) + " km") : (Math.round(distance) + " m");
			
			poiData.push({
				"id":          (myJsonData[i].id),
				"latitude":    (myJsonData[i].latitude),        // 緯度
				"longitude":   (myJsonData[i].longitude),       // 経度
				"altitude":    parseFloat(centerPointAltitude), // 現在地の高度に合わせています。ちなみに標高の平均といえる「日本水準原点」の値は「24.3900」です。
				"distance":    (distanceString),                // 現在の地点からの距離（単位は「km」もしくは「m」）
				"busstopinfo": ("［" + myJsonData[i].busstopname + "］" + myJsonData[i].buslinename) // 「［バス停名］バス路線名」の形式で文字列化しています。
			});
		}

		World.loadPoisFromJsonData(poiData);
	},
	
	// 表示されているARオブジェクトの距離表示を更新します。
	updateDistanceValues: function (centerPointLatitude, centerPointLongitude, centerPointAltitude, centerPointAccuracy) {
		
		for (var i = 0; i < World.markerList.length; i++) {
			
			var distance = World.getDistance(myJsonData[i].latitude, centerPointLatitude, myJsonData[i].longitude, centerPointLongitude);
			if (distance > 500.0) {
				// 既存のマーカーの中から0.5km（＝500m）以上離れたPOIデータが出てきた場合は、全部をリロードし直します。
				World.requestDataFromLocal(centerPointLatitude, centerPointLongitude, centerPointAltitude, centerPointAccuracy);
				return;
			}
			var distanceString = (distance > 999) ? ((distance / 1000).toFixed(2) + " km") : (Math.round(distance) + " m");
			World.markerList[i].distance = distanceString;
		}
	},

	getDistance: function (targetLatitude, centerPointLatitude, targetLongtitude, centerPointLongitude) {
		// 参考：http://www.movable-type.co.uk/scripts/latlong.html
		var Δφ = (centerPointLatitude - targetLatitude) * Math.PI / 180;
		var Δλ = (centerPointLongitude - targetLongtitude) * Math.PI / 180;
		var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(targetLatitude * Math.PI / 180) * Math.cos(centerPointLatitude * Math.PI / 180) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return 6371e3 * c
	},

};

/*
	ロケーションが変更された時の処理を実行する関数をセットします。
*/
AR.context.onLocationChanged = World.locationChanged;

/*
	（描画物をよけて）スクリーンがクリックされた時の処理を実行する関数をセットします。選択中のマーカーを非選択状態にするなどの処理が考えられます。
*/
AR.context.onScreenClick = World.onScreenClick;
