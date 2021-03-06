var myJsonData = [
	{ "id": "n33", "latitude": 35.73087722, "longitude": 139.72966972, "busstopname": "大塚駅", "buslinename": "広島‐倉吉・鳥取線|広島‐米子線" },
	{ "id": "n87", "latitude": 35.70653557, "longitude": 139.68285600, "busstopname": "東中野駅", "buslinename": "003|伊勢・鳥羽線|宿20" },
	{ "id": "n88", "latitude": 35.70967282, "longitude": 139.68192806, "busstopname": "正見寺", "buslinename": "宿08" },
	{ "id": "n99", "latitude": 35.70137266, "longitude": 139.67866785, "busstopname": "中野一", "buslinename": "宿05|渋64" },
	{ "id": "n117", "latitude": 35.70849719, "longitude": 139.67932499, "busstopname": "白桜小入口", "buslinename": "宿08" },
	{ "id": "n118", "latitude": 35.70466169, "longitude": 139.68259777, "busstopname": "並木通り", "buslinename": "003|宿20" },
	{ "id": "n163", "latitude": 35.70103085, "longitude": 139.68298089, "busstopname": "宮下交差点", "buslinename": "宿05|渋64|003|宿20" },
	{ "id": "n178", "latitude": 35.71145127, "longitude": 139.72033079, "busstopname": "グランド坂下", "buslinename": "上69|飯64" },
	{ "id": "n179", "latitude": 35.71080729, "longitude": 139.72269751, "busstopname": "早稲田", "buslinename": "上58|上69|早77|飯64" },
	{ "id": "n182", "latitude": 35.70736112, "longitude": 139.72838519, "busstopname": "都立新宿山吹高", "buslinename": "白61" },
	{ "id": "n183", "latitude": 35.70832833, "longitude": 139.73146731, "busstopname": "山吹町", "buslinename": "白61" },
	{ "id": "n208", "latitude": 35.70690020, "longitude": 139.68344171, "busstopname": "東中野駅西口", "buslinename": "百01" },
	{ "id": "n246", "latitude": 35.70092732, "longitude": 139.68233639, "busstopname": "東中野二", "buslinename": "渋64" },
	{ "id": "n277", "latitude": 35.70715214, "longitude": 139.69444037, "busstopname": "新宿消防署", "buslinename": "宿02|宿08|百01|橋63|飯62" },
	{ "id": "n278", "latitude": 35.71129880, "longitude": 139.68986817, "busstopname": "上落合一", "buslinename": "宿08|百01" },
	{ "id": "n279", "latitude": 35.71001282, "longitude": 139.68437380, "busstopname": "落合", "buslinename": "003|宿20" },
	{ "id": "n282", "latitude": 35.70117861, "longitude": 139.71735278, "busstopname": "戸山町", "buslinename": "橋63|宿74|飯62" },
	{ "id": "n283", "latitude": 35.70125401, "longitude": 139.70347163, "busstopname": "新大久保二", "buslinename": "橋63|飯62" },
	{ "id": "n284", "latitude": 35.70147577, "longitude": 139.70000874, "busstopname": "新大久保駅", "buslinename": "橋63|飯62" },
	{ "id": "n286", "latitude": 35.70187727, "longitude": 139.69526011, "busstopname": "大久保駅", "buslinename": "宿02|宿05|宿08|橋63|飯62" },
	{ "id": "n297", "latitude": 35.70232820, "longitude": 139.72664359, "busstopname": "牛込弁天町", "buslinename": "白61" },
	{ "id": "n298", "latitude": 35.70869823, "longitude": 139.73682280, "busstopname": "石切橋", "buslinename": "上69|飯64" },
	{ "id": "n299", "latitude": 35.69921769, "longitude": 139.72970103, "busstopname": "山伏町", "buslinename": "橋63|飯62" },
	{ "id": "n300", "latitude": 35.70012635, "longitude": 139.72079722, "busstopname": "若松町", "buslinename": "橋63|宿74|早81|飯62" },
	{ "id": "n302", "latitude": 35.70943306, "longitude": 139.71622290, "busstopname": "西早稲田", "buslinename": "学02|上69|早77|飯64" },
	{ "id": "n307", "latitude": 35.70331362, "longitude": 139.72166095, "busstopname": "喜久井町", "buslinename": "早81" },
	{ "id": "n308", "latitude": 35.70912630, "longitude": 139.72312800, "busstopname": "早大正門", "buslinename": "早77" },
	{ "id": "n309", "latitude": 35.70126257, "longitude": 139.71499942, "busstopname": "国立国際医療センター", "buslinename": "橋63|宿74|飯62" },
	{ "id": "n310", "latitude": 35.69927167, "longitude": 139.71845696, "busstopname": "河田町", "buslinename": "高71|宿74|宿75|早81" },
	{ "id": "n311", "latitude": 35.69938582, "longitude": 139.72628413, "busstopname": "牛込柳町", "buslinename": "橋63|白61|飯62" },
	{ "id": "n313", "latitude": 35.70663662, "longitude": 139.71867362, "busstopname": "馬場下町", "buslinename": "学02" },
	{ "id": "n314", "latitude": 35.70971554, "longitude": 139.72709939, "busstopname": "鶴巻町", "buslinename": "上58|上69|飯64" },
	{ "id": "n315", "latitude": 35.71012712, "longitude": 139.72541592, "busstopname": "関口一", "buslinename": "上58|上69|飯64" },
	{ "id": "n316", "latitude": 35.71006987, "longitude": 139.73173115, "busstopname": "江戸川橋", "buslinename": "上58|上69|白61|飯64" },
	{ "id": "n318", "latitude": 35.70966283, "longitude": 139.69392094, "busstopname": "小滝橋", "buslinename": "宿02|宿08|百01|高71|上69|飯64" },
	{ "id": "n319", "latitude": 35.71099108, "longitude": 139.68735546, "busstopname": "落合", "buslinename": "宿08" },
	{ "id": "n324", "latitude": 35.70148742, "longitude": 139.68527862, "busstopname": "東中野一", "buslinename": "宿05" },
	{ "id": "n332", "latitude": 35.70168435, "longitude": 139.69025321, "busstopname": "北新宿", "buslinename": "宿05" },
	{ "id": "n338", "latitude": 35.71130254, "longitude": 139.69639310, "busstopname": "高田馬場四", "buslinename": "高71|上69|飯64" },
	{ "id": "n345", "latitude": 35.70876380, "longitude": 139.70598558, "busstopname": "新宿スポーツセンター入口", "buslinename": "高71" },
	{ "id": "n346", "latitude": 35.70865779, "longitude": 139.72111916, "busstopname": "早大正門", "buslinename": "学02|早81" },
	{ "id": "n355", "latitude": 35.70458674, "longitude": 139.72697323, "busstopname": "牛込保健センター", "buslinename": "白61" },
	{ "id": "n358", "latitude": 35.70426317, "longitude": 139.70867225, "busstopname": "新宿コズミックセンター", "buslinename": "高71|早77|池86" },
	{ "id": "n359", "latitude": 35.70782758, "longitude": 139.70907835, "busstopname": "学習院女子大学", "buslinename": "高71|早77|池86" },
	{ "id": "n372", "latitude": 35.70966283, "longitude": 139.69392094, "busstopname": "小滝橋車庫", "buslinename": "橋63|高71|上69|飯62|飯64" },
	{ "id": "n377", "latitude": 35.69989636, "longitude": 139.73301609, "busstopname": "牛込北町", "buslinename": "橋63|飯62" },
	{ "id": "n383", "latitude": 35.70639814, "longitude": 139.72026505, "busstopname": "馬場下町", "buslinename": "早77|早81" },
	{ "id": "n384", "latitude": 35.70581060, "longitude": 139.68595060, "busstopname": "東中野一", "buslinename": "百01" },
	{ "id": "n385", "latitude": 35.70679055, "longitude": 139.68627974, "busstopname": "東中野駅東口", "buslinename": "百01" },
	{ "id": "n386", "latitude": 35.70861489, "longitude": 139.68695728, "busstopname": "東中野本通り", "buslinename": "百01" },
	{ "id": "n387", "latitude": 35.71033517, "longitude": 139.70380474, "busstopname": "高田馬場駅通り", "buslinename": "百01|高71" },
	{ "id": "n388", "latitude": 35.70893284, "longitude": 139.69945934, "busstopname": "高田馬場四", "buslinename": "百01" },
	{ "id": "n389", "latitude": 35.70794781, "longitude": 139.69782192, "busstopname": "戸山団地中央", "buslinename": "百01" },
	{ "id": "n390", "latitude": 35.70653565, "longitude": 139.69638595, "busstopname": "百人町郵便局前", "buslinename": "百01" },
	{ "id": "n391", "latitude": 35.70471044, "longitude": 139.69630553, "busstopname": "百人町公務員宿舎", "buslinename": "百01" },
	{ "id": "n392", "latitude": 35.70434734, "longitude": 139.69859607, "busstopname": "社会保険中央病院", "buslinename": "百01" },
	{ "id": "n397", "latitude": 35.70127829, "longitude": 139.73692862, "busstopname": "牛込神楽坂駅", "buslinename": "飯62" },
	{ "id": "n399", "latitude": 35.70945709, "longitude": 139.68778554, "busstopname": "東中野地域センター", "buslinename": "百01" },
	{ "id": "n400", "latitude": 35.70602358, "longitude": 139.70003252, "busstopname": "タワーホームズ", "buslinename": "百01" },
	{ "id": "n401", "latitude": 35.70729509, "longitude": 139.70009185, "busstopname": "西戸山公園野球場", "buslinename": "百01" },
	{ "id": "n415", "latitude": 35.70078974, "longitude": 139.70903537, "busstopname": "都営戸山ハイツ", "buslinename": "橋63|宿74" },
	{ "id": "n420", "latitude": 35.70660123, "longitude": 139.70889240, "busstopname": "都立障害者センター", "buslinename": "高71|早77|池86" },
	{ "id": "n421", "latitude": 35.70093301, "longitude": 139.70809259, "busstopname": "大久保通り", "buslinename": "橋63|高71|宿74|早77|池86|飯62" },
	{ "id": "n458", "latitude": 35.72778479, "longitude": 139.68235208, "busstopname": "東長崎駅通り", "buslinename": "白61" },
	{ "id": "n473", "latitude": 35.72319202, "longitude": 139.67940456, "busstopname": "西落合一", "buslinename": "宿02|池11|池11|池65" },
	{ "id": "n476", "latitude": 35.72620899, "longitude": 139.68206095, "busstopname": "南長崎五", "buslinename": "白61" },
	{ "id": "n480", "latitude": 35.72272751, "longitude": 139.68392512, "busstopname": "落合南長崎駅", "buslinename": "宿02|池11|池11|池65|白61" },
	{ "id": "n484", "latitude": 35.73327146, "longitude": 139.68074275, "busstopname": "長崎六", "buslinename": "池07" },
	{ "id": "n493", "latitude": 35.75083564, "longitude": 139.68228074, "busstopname": "上の根橋", "buslinename": "王78" },
	{ "id": "n497", "latitude": 35.73472584, "longitude": 139.68238897, "busstopname": "長崎第二豊寿園前", "buslinename": "池07" },
	{ "id": "n537", "latitude": 35.73108798, "longitude": 139.67828376, "busstopname": "南長崎六", "buslinename": "池07|白61" },
	{ "id": "n542", "latitude": 35.74793739, "longitude": 139.67822572, "busstopname": "小茂根", "buslinename": "赤31|赤31|赤31-2|王78" },
	{ "id": "n553", "latitude": 35.75147838, "longitude": 139.68008192, "busstopname": "小茂根中央", "buslinename": "池55" },
	{ "id": "n555", "latitude": 35.75215297, "longitude": 139.67862961, "busstopname": "小茂根三", "buslinename": "池55" },
	{ "id": "n577", "latitude": 35.71591822, "longitude": 139.68724084, "busstopname": "中落合", "buslinename": "003|宿20" },
	{ "id": "n578", "latitude": 35.72125562, "longitude": 139.69146165, "busstopname": "中落合三", "buslinename": "宿20" },
	{ "id": "n579", "latitude": 35.72456958, "longitude": 139.68657716, "busstopname": "南長崎三", "buslinename": "白61" },
	{ "id": "n580", "latitude": 35.72190537, "longitude": 139.69560624, "busstopname": "聖母病院入口", "buslinename": "宿20|宿20-1|池65|白61" },
	{ "id": "n581", "latitude": 35.72034917, "longitude": 139.71303214, "busstopname": "千登世橋", "buslinename": "宿20|宿20-1|池65|池86" },
	{ "id": "n582", "latitude": 35.71628812, "longitude": 139.71232091, "busstopname": "学習院下", "buslinename": "池86" },
	{ "id": "n583", "latitude": 35.71263084, "longitude": 139.70032450, "busstopname": "高田馬場三", "buslinename": "高71|上69|飯64" },
	{ "id": "n584", "latitude": 35.71226532, "longitude": 139.68550101, "busstopname": "上落合二", "buslinename": "003|宿20" },
	{ "id": "n585", "latitude": 35.71401504, "longitude": 139.69231133, "busstopname": "落合中央公園", "buslinename": "宿02" },
	{ "id": "n586", "latitude": 35.71148131, "longitude": 139.71001233, "busstopname": "高田馬場二", "buslinename": "学02|上69|早77|池86|飯64" },
	{ "id": "n587", "latitude": 35.72042512, "longitude": 139.69456793, "busstopname": "聖母病院", "buslinename": "宿02" },
	{ "id": "n588", "latitude": 35.72282780, "longitude": 139.68608778, "busstopname": "南長崎三", "buslinename": "宿02|池11|池11|池65|白61" },
	{ "id": "n589", "latitude": 35.72191610, "longitude": 139.69811061, "busstopname": "下落合四", "buslinename": "宿20|宿20-1|池65|白61" },
	{ "id": "n590", "latitude": 35.73932683, "longitude": 139.70537758, "busstopname": "中丸町", "buslinename": "池02|池04|池20|池21" },
	{ "id": "n591", "latitude": 35.74821189, "longitude": 139.70846088, "busstopname": "大山東町", "buslinename": "池20|池21" },
	{ "id": "n592", "latitude": 35.73724134, "longitude": 139.69065465, "busstopname": "要町三", "buslinename": "池05|池07" },
	{ "id": "n593", "latitude": 35.74794379, "longitude": 139.69378171, "busstopname": "大山西町", "buslinename": "赤57|池05" },
	{ "id": "n594", "latitude": 35.73901452, "longitude": 139.71001271, "busstopname": "池袋四", "buslinename": "光02|赤51|赤97|池55" },
	{ "id": "n595", "latitude": 35.74984530, "longitude": 139.69564482, "busstopname": "大山", "buslinename": "ミッドナイトアロー成増・朝霞台|ミッドナイトアロー朝霞台・新座|光02|赤51|赤57|赤97|池55" },
	{ "id": "n596", "latitude": 35.73965062, "longitude": 139.69610223, "busstopname": "高松二", "buslinename": "池04" },
	{ "id": "n597", "latitude": 35.74297131, "longitude": 139.69639846, "busstopname": "幸町", "buslinename": "池02|池03" },
	{ "id": "n598", "latitude": 35.74321817, "longitude": 139.70246149, "busstopname": "中丸町坂下", "buslinename": "池02" },
	{ "id": "n599", "latitude": 35.75308123, "longitude": 139.71580140, "busstopname": "板橋三", "buslinename": "王22|王22-2" },
	{ "id": "n600", "latitude": 35.73281092, "longitude": 139.71557552, "busstopname": "豊島区役所", "buslinename": "王40甲|王55|上60|草63|草64" },
	{ "id": "n601", "latitude": 35.73845613, "longitude": 139.69392094, "busstopname": "千川一", "buslinename": "池02|池03|池04" },
	{ "id": "n602", "latitude": 35.74123773, "longitude": 139.70674898, "busstopname": "熊野町", "buslinename": "光02|赤51|赤97|池02|池04|池20|池21|池55" },
	{ "id": "n603", "latitude": 35.74271856, "longitude": 139.69320525, "busstopname": "水道タンク裏", "buslinename": "池02|池03" },
	{ "id": "n604", "latitude": 35.71511348, "longitude": 139.72440336, "busstopname": "目白台三", "buslinename": "白61" },
	{ "id": "n605", "latitude": 35.71349695, "longitude": 139.72631598, "busstopname": "椿山荘", "buslinename": "白61" },
	{ "id": "n606", "latitude": 35.72537242, "longitude": 139.71991150, "busstopname": "東池袋四", "buslinename": "都02乙" },
	{ "id": "n607", "latitude": 35.73155893, "longitude": 139.72040723, "busstopname": "東池袋二", "buslinename": "上60" },
	{ "id": "n608", "latitude": 35.72873214, "longitude": 139.72540094, "busstopname": "向原", "buslinename": "上60" },
	{ "id": "n609", "latitude": 35.71794176, "longitude": 139.73655008, "busstopname": "大塚車庫", "buslinename": "都02|都02乙" },
	{ "id": "n610", "latitude": 35.72566176, "longitude": 139.73008750, "busstopname": "新大塚", "buslinename": "上60|都02" },
	{ "id": "n612", "latitude": 35.71963082, "longitude": 139.72511002, "busstopname": "護国寺", "buslinename": "都02乙" },
	{ "id": "n613", "latitude": 35.72389993, "longitude": 139.73085539, "busstopname": "大塚四", "buslinename": "都02" },
	{ "id": "n614", "latitude": 35.72348108, "longitude": 139.73726384, "busstopname": "千石三", "buslinename": "上58|上60" },
	{ "id": "n615", "latitude": 35.74121775, "longitude": 139.73080624, "busstopname": "新庚申塚", "buslinename": "草63" },
	{ "id": "n616", "latitude": 35.74406520, "longitude": 139.72799837, "busstopname": "西巣鴨", "buslinename": "王40甲|王55|草63|草64" },
	{ "id": "n617", "latitude": 35.73870824, "longitude": 139.72253974, "busstopname": "上池袋四", "buslinename": "王40甲|王55|草63|草64" },
	{ "id": "n618", "latitude": 35.73763732, "longitude": 139.72140980, "busstopname": "上池袋三", "buslinename": "王40甲|王55|草63|草64" },
	{ "id": "n619", "latitude": 35.74662496, "longitude": 139.73145770, "busstopname": "滝野川三", "buslinename": "王40甲|王55|草64" },
	{ "id": "n620", "latitude": 35.74844513, "longitude": 139.73395482, "busstopname": "滝野川二", "buslinename": "王40甲|王55|草64" },
	{ "id": "n621", "latitude": 35.75258923, "longitude": 139.72504375, "busstopname": "北養護学校", "buslinename": "王22|王22-2" },
	{ "id": "n622", "latitude": 35.74771448, "longitude": 139.71600990, "busstopname": "板橋一", "buslinename": "王22" },
	{ "id": "n623", "latitude": 35.75074264, "longitude": 139.71734743, "busstopname": "板橋四", "buslinename": "王22|王22-2" },
	{ "id": "n624", "latitude": 35.71786234, "longitude": 139.71581146, "busstopname": "鬼子母神", "buslinename": "白61" },
	{ "id": "n625", "latitude": 35.73015942, "longitude": 139.72301123, "busstopname": "東池袋三", "buslinename": "上60" },
	{ "id": "n626", "latitude": 35.71681977, "longitude": 139.71811560, "busstopname": "高田一", "buslinename": "白61" },
	{ "id": "n627", "latitude": 35.71939644, "longitude": 139.73416322, "busstopname": "大塚二", "buslinename": "都02|都02乙" },
	{ "id": "n629", "latitude": 35.74309111, "longitude": 139.69956379, "busstopname": "南町住宅", "buslinename": "池02|池03" },
	{ "id": "n630", "latitude": 35.73280847, "longitude": 139.70277973, "busstopname": "池袋二", "buslinename": "池11|池02|池03|池04|池05|池07|池11|池20|池21|池80" },
	{ "id": "n631", "latitude": 35.74807504, "longitude": 139.69188175, "busstopname": "日大病院", "buslinename": "赤57|池01|池05" },
	{ "id": "n632", "latitude": 35.73783725, "longitude": 139.68589768, "busstopname": "千早四", "buslinename": "池07" },
	{ "id": "n633", "latitude": 35.73623171, "longitude": 139.68448183, "busstopname": "千早高", "buslinename": "池07" },
	{ "id": "n634", "latitude": 35.75165723, "longitude": 139.69306381, "busstopname": "大谷口上町", "buslinename": "光02|池55" },
	{ "id": "n635", "latitude": 35.74497906, "longitude": 139.69007287, "busstopname": "水道タンク前", "buslinename": "池05" },
	{ "id": "n636", "latitude": 35.74355930, "longitude": 139.68920273, "busstopname": "大谷口二", "buslinename": "池05" },
	{ "id": "n637", "latitude": 35.74180919, "longitude": 139.68816322, "busstopname": "板橋高入口", "buslinename": "池05" },
	{ "id": "n638", "latitude": 35.71950285, "longitude": 139.68970732, "busstopname": "中落合二", "buslinename": "宿20" },
	{ "id": "n639", "latitude": 35.74093663, "longitude": 139.69360484, "busstopname": "千川二", "buslinename": "池02|池03" },
	{ "id": "n640", "latitude": 35.73408320, "longitude": 139.69495179, "busstopname": "要小", "buslinename": "池02|池03|池04|池05|池07" },
	{ "id": "n641", "latitude": 35.72240657, "longitude": 139.69250572, "busstopname": "目白五", "buslinename": "宿02|池11|池11|宿20|宿20-1|池65|白61" },
	{ "id": "n642", "latitude": 35.74663412, "longitude": 139.69984866, "busstopname": "第六小学校", "buslinename": "光02|赤51|赤97|池55" },
	{ "id": "n643", "latitude": 35.73983631, "longitude": 139.69852730, "busstopname": "高松小", "buslinename": "池04" },
	{ "id": "n644", "latitude": 35.73993870, "longitude": 139.70000421, "busstopname": "南町仲通り", "buslinename": "池04" },
	{ "id": "n645", "latitude": 35.74423835, "longitude": 139.70284895, "busstopname": "中丸町坂上", "buslinename": "光02|赤51|赤97|池55" },
	{ "id": "n646", "latitude": 35.74227980, "longitude": 139.70421302, "busstopname": "板橋第五小", "buslinename": "池04" },
	{ "id": "n647", "latitude": 35.72254769, "longitude": 139.70240238, "busstopname": "下落合三", "buslinename": "宿20|宿20-1|池65|白61" },
	{ "id": "n648", "latitude": 35.75115271, "longitude": 139.70859102, "busstopname": "板橋区役所", "buslinename": "ミッドナイトアロー高島平・中浦和|池20|池21" },
	{ "id": "n649", "latitude": 35.74483102, "longitude": 139.70835070, "busstopname": "金井窪", "buslinename": "池20|池21" },
	{ "id": "n650", "latitude": 35.73209166, "longitude": 139.70550712, "busstopname": "国際興業総合案内所", "buslinename": "池11|池02|池03|池04|池05|池07|池11|池20|池21|池80" },
	{ "id": "n651", "latitude": 35.72674575, "longitude": 139.71178954, "busstopname": "南池袋三", "buslinename": "宿20|宿20-1|池65|池86" },
	{ "id": "n652", "latitude": 35.73598557, "longitude": 139.71961810, "busstopname": "上池袋一", "buslinename": "王40甲|王55|草63|草64" },
	{ "id": "n653", "latitude": 35.73248497, "longitude": 139.71864785, "busstopname": "六ツ又陸橋", "buslinename": "上60" },
	{ "id": "n654", "latitude": 35.71586185, "longitude": 139.72098659, "busstopname": "日本女子大", "buslinename": "学05|白61" },
	{ "id": "n655", "latitude": 35.75156623, "longitude": 139.72736771, "busstopname": "中央公園", "buslinename": "王22|王22-2" },
	{ "id": "n656", "latitude": 35.75079111, "longitude": 139.72953090, "busstopname": "滝野川住宅", "buslinename": "王22|王22-2" },
	{ "id": "n657", "latitude": 35.71699188, "longitude": 139.72852955, "busstopname": "音羽二", "buslinename": "上58" },
	{ "id": "n658", "latitude": 35.72025565, "longitude": 139.72768377, "busstopname": "護国寺正門", "buslinename": "上58|都02乙" },
	{ "id": "n659", "latitude": 35.72877720, "longitude": 139.73183917, "busstopname": "巣鴨小", "buslinename": "上60" },
	{ "id": "n660", "latitude": 35.72141960, "longitude": 139.73194311, "busstopname": "大塚三", "buslinename": "上58|都02|都02乙" },
	{ "id": "n661", "latitude": 35.72646928, "longitude": 139.73457987, "busstopname": "南大塚一", "buslinename": "上60" },
	{ "id": "n668", "latitude": 35.72932031, "longitude": 139.71692394, "busstopname": "サンシャインシティ", "buslinename": "光02|赤51|赤97|池55" },
	{ "id": "n669", "latitude": 35.73059734, "longitude": 139.70868132, "busstopname": "池袋駅西口", "buslinename": "池11|池01|池02|池03|池04|池05|池07|池11|池20|池21|池80|ジュピター号" },
	{ "id": "n670", "latitude": 35.72944922, "longitude": 139.71233501, "busstopname": "池袋駅東口（西武百貨店）", "buslinename": "宿20|宿20-1|池65" },
	{ "id": "n671", "latitude": 35.72282055, "longitude": 139.68944713, "busstopname": "南長崎二", "buslinename": "宿02|池11|池11|池65|白61" },
	{ "id": "n672", "latitude": 35.71520033, "longitude": 139.72937274, "busstopname": "音羽一", "buslinename": "上58" },
	{ "id": "n673", "latitude": 35.72387120, "longitude": 139.71160738, "busstopname": "東京音楽大前", "buslinename": "宿20|宿20-1|池65|池86" },
	{ "id": "n675", "latitude": 35.74657960, "longitude": 139.71972533, "busstopname": "板橋駅", "buslinename": "王22" },
	{ "id": "n676", "latitude": 35.73453052, "longitude": 139.73713535, "busstopname": "とげぬき地蔵", "buslinename": "草63" },
	{ "id": "n677", "latitude": 35.71719854, "longitude": 139.73776412, "busstopname": "茗荷谷駅", "buslinename": "都02|都02乙" },
	{ "id": "n678", "latitude": 35.73084354, "longitude": 139.72919803, "busstopname": "大塚駅", "buslinename": "上60|都02" },
	{ "id": "n679", "latitude": 35.73095056, "longitude": 139.71414492, "busstopname": "池袋駅東口", "buslinename": "ドリーム盛岡号|シリウス号|ドリーム盛岡（らくちん）号|光02|赤51|赤97|池55|王40甲|王55|草64|シリウス号" },
	{ "id": "n680", "latitude": 35.71981290, "longitude": 139.71133982, "busstopname": "目白警察署", "buslinename": "宿20|宿20-1|池65|白61" },
	{ "id": "n681", "latitude": 35.72203957, "longitude": 139.70600779, "busstopname": "目白駅", "buslinename": "宿20|宿20-1|池65|白61" },
	{ "id": "n682", "latitude": 35.71336811, "longitude": 139.70493009, "busstopname": "高田馬場駅", "buslinename": "百01|学02|高71|上69|飯64" },
	{ "id": "n683", "latitude": 35.71216161, "longitude": 139.70714405, "busstopname": "戸塚特別出張所", "buslinename": "上69|飯64" },
	{ "id": "n684", "latitude": 35.71553852, "longitude": 139.69445732, "busstopname": "下落合駅", "buslinename": "宿02" },
	{ "id": "n685", "latitude": 35.71522712, "longitude": 139.68687735, "busstopname": "中井駅", "buslinename": "003|宿20" },
	{ "id": "n686", "latitude": 35.72474744, "longitude": 139.69458903, "busstopname": "椎名町駅南口", "buslinename": "池11|池11" },
	{ "id": "n687", "latitude": 35.72757682, "longitude": 139.69643041, "busstopname": "椎名町駅北口", "buslinename": "池11|池11" },
	{ "id": "n688", "latitude": 35.73298449, "longitude": 139.69967678, "busstopname": "要町駅", "buslinename": "池11|池02|池03|池04|池05|池07|池11|池20|池21|池80" },
	{ "id": "n689", "latitude": 35.73775521, "longitude": 139.71259759, "busstopname": "豊島清掃事務所", "buslinename": "光02|赤51|赤97|池55" },
	{ "id": "n690", "latitude": 35.73956268, "longitude": 139.68741414, "busstopname": "千川駅", "buslinename": "ミッドナイトアロー光が丘・和光市|池05|池07" },
	{ "id": "n691", "latitude": 35.72238266, "longitude": 139.72319364, "busstopname": "雑司が谷霊園", "buslinename": "都02乙" },
	{ "id": "n692", "latitude": 35.73722876, "longitude": 139.73454887, "busstopname": "巣鴨四", "buslinename": "草63" },
	{ "id": "n693", "latitude": 35.75056867, "longitude": 139.73716762, "busstopname": "飛鳥山", "buslinename": "王40甲|王55|草64" },
	{ "id": "n694", "latitude": 35.75192464, "longitude": 139.73046090, "busstopname": "紅葉橋南", "buslinename": "王22|王22-2" },
	{ "id": "n695", "latitude": 35.75133670, "longitude": 139.69602715, "busstopname": "仲町区民事務所", "buslinename": "赤51|赤57|赤97" },
	{ "id": "n697", "latitude": 35.73543892, "longitude": 139.69303061, "busstopname": "要町二", "buslinename": "池05|池07" },
	{ "id": "n701", "latitude": 35.72764066, "longitude": 139.71621028, "busstopname": "東池袋一", "buslinename": "都02乙" },
	{ "id": "n702", "latitude": 35.73558454, "longitude": 139.69425920, "busstopname": "富士神社入口", "buslinename": "池02|池03|池04" },
	{ "id": "n703", "latitude": 35.71198356, "longitude": 139.71723549, "busstopname": "甘泉園公園", "buslinename": "上69|早77|飯64" },
	{ "id": "n708", "latitude": 35.74050055, "longitude": 139.70241658, "busstopname": "南町", "buslinename": "池03|池04" },
	{ "id": "n709", "latitude": 35.73793880, "longitude": 139.70387992, "busstopname": "南町庚申通り", "buslinename": "池02|池03|池04|池20|池21" },
	{ "id": "n710", "latitude": 35.73566014, "longitude": 139.70121404, "busstopname": "高松郵便局", "buslinename": "池02|池03|池04|池20|池21" },
	{ "id": "n711", "latitude": 35.74169469, "longitude": 139.72587843, "busstopname": "掘割", "buslinename": "王40甲|王55|草63|草64" },
	{ "id": "n730", "latitude": 35.75144950, "longitude": 139.68298859, "busstopname": "かみのね橋", "buslinename": "赤31|赤31|赤31-2|池55" },
	{ "id": "n737", "latitude": 35.73064013, "longitude": 139.69812487, "busstopname": "池袋車庫", "buslinename": "池11|池11|池80" },
	{ "id": "n750", "latitude": 35.72168384, "longitude": 139.70723732, "busstopname": "目白駅（川村学園）", "buslinename": "学05" },
	{ "id": "n751", "latitude": 35.70132755, "longitude": 139.71207953, "busstopname": "戸山二", "buslinename": "橋63|宿74|飯62" },
	{ "id": "n760", "latitude": 35.75300475, "longitude": 139.73483588, "busstopname": "北区役所", "buslinename": "王23|赤50|王子・駒込ルート" },
	{ "id": "n761", "latitude": 35.70637683, "longitude": 139.72701935, "busstopname": "榎町特別出張所前", "buslinename": "白61" },
	{ "id": "n762", "latitude": 35.75001615, "longitude": 139.73792918, "busstopname": "飛鳥山公園", "buslinename": "王子・駒込ルート" },
	{ "id": "n2784", "latitude": 35.75363024, "longitude": 139.69030255, "busstopname": "下頭橋", "buslinename": "ミッドナイトアロー成増・朝霞台|ミッドナイトアロー朝霞台・新座|光02|池55" },
	{ "id": "n2785", "latitude": 35.75368012, "longitude": 139.68593623, "busstopname": "東山町", "buslinename": "赤31|赤31|赤31-2|池55|王78" },
	{ "id": "n2786", "latitude": 35.75378773, "longitude": 139.73446959, "busstopname": "北区役所", "buslinename": "王22|王22-2" },
	{ "id": "n2950", "latitude": 35.75383404, "longitude": 139.69684696, "busstopname": "仲町", "buslinename": "赤51|赤57|赤97" },
	{ "id": "n2951", "latitude": 35.75343457, "longitude": 139.70084226, "busstopname": "豊島病院", "buslinename": "赤51|赤57|赤97" },
	{ "id": "n2952", "latitude": 35.75401915, "longitude": 139.70848198, "busstopname": "仲宿", "buslinename": "池20|池21" },
	{ "id": "n2953", "latitude": 35.75526251, "longitude": 139.70744970, "busstopname": "板橋三中", "buslinename": "赤51|赤57|赤97" },
	{ "id": "n2954", "latitude": 35.75410207, "longitude": 139.71510154, "busstopname": "東板橋体育館", "buslinename": "王22|王22-2" },
	{ "id": "n3006", "latitude": 35.75649906, "longitude": 139.71672107, "busstopname": "加賀一", "buslinename": "王22|王22-2" },
	{ "id": "n3007", "latitude": 35.75446927, "longitude": 139.73244612, "busstopname": "王子本町交番", "buslinename": "王23|赤50|王子・駒込ルート" },
	{ "id": "n3008", "latitude": 35.75325357, "longitude": 139.73093325, "busstopname": "紅葉橋", "buslinename": "王22|王22-2|王子・駒込ルート" },
	{ "id": "n3009", "latitude": 35.75601729, "longitude": 139.73722116, "busstopname": "王子二", "buslinename": "王54|王54-2|王30|王41|王45|王49|王49折返|王55|王55折返|王57|王78" },
	{ "id": "n3010", "latitude": 35.75835455, "longitude": 139.72955494, "busstopname": "南橋", "buslinename": "王23|赤50" },
	{ "id": "n3011", "latitude": 35.75878710, "longitude": 139.73742940, "busstopname": "王子三", "buslinename": "王54|王54-2|王30|王41|王45|王49|王49折返|王55|王55折返|王57|王78" },
	{ "id": "n3042", "latitude": 35.75836650, "longitude": 139.71546662, "busstopname": "帝京大学病院", "buslinename": "王22|王22-2" },
	{ "id": "n3043", "latitude": 35.75750025, "longitude": 139.71723155, "busstopname": "十条住宅", "buslinename": "王22|王22-2" },
	{ "id": "n3048", "latitude": 35.75627454, "longitude": 139.68972382, "busstopname": "南常盤台", "buslinename": "赤31|赤31|赤31-2|王78" },
	{ "id": "n3049", "latitude": 35.75595427, "longitude": 139.68666443, "busstopname": "ときわ台駅入口", "buslinename": "光02" },
	{ "id": "n3050", "latitude": 35.75858697, "longitude": 139.69464044, "busstopname": "中板橋駅入口", "buslinename": "赤31|赤31|赤31-2|王78" },
	{ "id": "n3052", "latitude": 35.75863681, "longitude": 139.70676422, "busstopname": "上宿", "buslinename": "赤51|赤57|赤97|池20|池21" },
	{ "id": "n3053", "latitude": 35.75376224, "longitude": 139.70317197, "busstopname": "栄町", "buslinename": "赤51|赤57|赤97" },
	{ "id": "n3054", "latitude": 35.75414721, "longitude": 139.70477106, "busstopname": "板橋第九小", "buslinename": "赤51|赤57|赤97" },
	{ "id": "n3061", "latitude": 35.75606063, "longitude": 139.73113681, "busstopname": "本町通り", "buslinename": "王23|赤50" },
	{ "id": "n3064", "latitude": 35.75343187, "longitude": 139.73791116, "busstopname": "王子駅", "buslinename": "あぶくま号|マロニエ新宿号・マロニエ東京号|那須塩原リゾートエクスプレス|夢街道会津号|夢街道会津号|ミッドナイトアロー南浦和・東浦和|王22|王22-2|王23|王54|王54-2|赤50|王30|那須温泉～新宿駅新南口|福島駅東口～新宿駅新南口|王40甲|王40丙|王41|王45|王46|王49|王49折返|王55|王55折返|王57|王78|草64" },
	{ "id": "n3072", "latitude": 35.75502391, "longitude": 139.71909087, "busstopname": "板橋給水所", "buslinename": "王22|王22-2" },
	{ "id": "n3078", "latitude": 35.75393150, "longitude": 139.72197986, "busstopname": "区境", "buslinename": "王22|王22-2" },
	{ "id": "n3082", "latitude": 35.75844046, "longitude": 139.72604417, "busstopname": "上十条郵便局", "buslinename": "王23|赤50" },
	{ "id": "n3102", "latitude": 35.75783793, "longitude": 139.72995930, "busstopname": "障害者福祉センター", "buslinename": "王子・駒込ルート" },
	{ "id": "n3103", "latitude": 35.75725575, "longitude": 139.72931368, "busstopname": "中央図書館", "buslinename": "王子・駒込ルート" },
	{ "id": "n3109", "latitude": 35.75466849, "longitude": 139.72966108, "busstopname": "王子アパート", "buslinename": "王子・駒込ルート" },
	{ "id": "n3110", "latitude": 35.75462883, "longitude": 139.73565494, "busstopname": "JR王子駅", "buslinename": "王子・駒込ルート" },
	{ "id": "n8942", "latitude": 35.73025060, "longitude": 139.71243799, "busstopname": "池袋駅東口", "buslinename": "あぶくま号|マロニエ新宿号・マロニエ東京号|金沢エクスプレス/ドリーム金沢号/青春ドリーム金沢号|那須塩原リゾートエクスプレス|夢街道会津号|あぶくま号|ドリームさくらんぼ号|ドリーム政宗号|ドリーム盛岡・らくちん号|仙台・新宿号|夢街道会津号|ドリーム盛岡（らくちん）号|伊勢・鳥羽線|金沢線|佐久・軽井沢・上田・小諸線|上越線|新潟線|池袋駅東口～小手指駅北口線|長野線|氷見線|富山線|びわこドリーム号|宇和島線|大宮・池袋・横浜～南紀勝浦線|前橋・高崎～池袋・新宿・秋葉原線|王40甲|王55|上60|草63|草64|池86|都02乙" },
	{ "id": "n9222", "latitude": 35.73095056, "longitude": 139.71414492, "busstopname": "池袋駅三越裏", "buslinename": "ドリーム盛岡（らくちん）号" },
	{ "id": "n9223", "latitude": 35.73095056, "longitude": 139.71414492, "busstopname": "池袋三越裏", "buslinename": "ドリーム盛岡・らくちん号" },
	{ "id": "n9224", "latitude": 35.75374922, "longitude": 139.73764549, "busstopname": "王子駅前", "buslinename": "あぶくま号|ドリームさくらんぼ号|ドリーム政宗号|仙台・新宿号" },
	{ "id": "n9227", "latitude": 35.73129014, "longitude": 139.71288399, "busstopname": "池袋駅東口降車場", "buslinename": "福島駅東口～新宿駅新南口" },
	{ "id": "n9249", "latitude": 35.73095056, "longitude": 139.71414492, "busstopname": "池袋駅東口9番", "buslinename": "ドリーム盛岡号" },
	{ "id": "n9250", "latitude": 35.71669259, "longitude": 139.69546006, "busstopname": "下落合駅", "buslinename": "金沢エクスプレス/ドリーム金沢号/青春ドリーム金沢号|金沢線|佐久・軽井沢・上田・小諸線|上越線|新潟線|長野線|氷見線|富山線" },
	{ "id": "n9271", "latitude": 35.73110914, "longitude": 139.70910575, "busstopname": "池袋駅西口", "buslinename": "けせんライナー|遠野・釜石号|ミッドナイトアロー浦和・大宮|ミッドナイトアロー光が丘・和光市|ミッドナイトアロー高島平・中浦和|ミッドナイトアロー成増・朝霞台|ミッドナイトアロー朝霞台・新座|ミッドナイトアロー南浦和・東浦和|高速バス　酒田・鶴岡⇔大宮・池袋・渋谷|高速バス　上野・秋葉原・東京|ミッドナイトアロー川越|ミッドナイトアロー和光・志木|イーハトーブ号" },
	{ "id": "n9272", "latitude": 35.73046288, "longitude": 139.70825280, "busstopname": "池袋駅西口", "buslinename": "けせんライナー|イーハトープ号|ジュピター号|遠野・釜石号|夕陽号" },
	{ "id": "n9278", "latitude": 35.72798073, "longitude": 139.70751057, "busstopname": "ホテルメトロポリタン", "buslinename": "池袋エリア～羽田空港線|池袋エリア～成田空港線" },
	{ "id": "n9279", "latitude": 35.73005958, "longitude": 139.71951083, "busstopname": "サンシャインシティプリンスホテル", "buslinename": "伊勢・鳥羽線|池袋エリア～羽田空港線|池袋エリア～成田空港線" },
	{ "id": "n9280", "latitude": 35.71250056, "longitude": 139.72652008, "busstopname": "フォーシーズンズホテル椿山荘東京", "buslinename": "目白・九段・後楽園・秋葉原エリア～羽田空港線|目白・九段・後楽園エリア～成田空港線" },
	{ "id": "n9398", "latitude": 35.71661600, "longitude": 139.69621900, "busstopname": "下落合駅", "buslinename": "東京行き（高速バス）|高速バス新潟・越後（新潟・長岡～池袋線）|高速軽井沢線|高速佐久線|高速小諸線|高速上田線|御代田～池袋|佐久～池袋|小諸～池袋|上田～池袋|長野～池袋線|東京（高速バス）|高速バス頸城・越後（上越・柏崎～池袋線）" },
	{ "id": "n9399", "latitude": 35.72957700, "longitude": 139.71316500, "busstopname": "池袋駅東口", "buslinename": "宇和島・松山⇔横浜・池袋・大宮|東京行き（高速バス）|横浜・品川・池袋行|鳥羽・伊勢～東京・大宮|勝浦・南紀～横浜・東京・大宮|鳥羽・伊勢～東京・大宮|高速バス新潟・越後（新潟・長岡～池袋線）|高速軽井沢線|高速佐久線|高速小諸線|高速上田線|御代田～池袋|佐久～池袋|小諸～池袋|上田～池袋|長野～池袋線|東京（高速バス）|高速バス頸城・越後（上越・柏崎～池袋線）" }
];
