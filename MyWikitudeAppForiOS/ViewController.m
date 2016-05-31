//
//  ViewController.m
//  MyWikitudeAppForiOS
//
//


// Wikitudeのライセンスキーを定数として定義。
#define kWT_LICENSE_KEY @"＜ライセンスキーを書き直してください！＞/o08s01R0N0vP+0fqFtL1P2yIlpuzsQ0knsi++V0JQ0pfng86gDjUW0DHzRGG1/LW0gv0+0H1JtkT6VfvqJs+J0462pDs646PrGNGrL0ZW0YOWfZ1hz0Si0QJTYW00ZWRf0y0+LSZ60DUUrsjGp00/l0SYNLvKGJ0tHH00iRS0O062w00H6Hr0qMo0kH+4202tz0H002LSVRZ01SpZTwPN04GiZJQKZg0zRrTHF0HqNMss8ofi02WoPUQ80FyWh0p20zOGPd/0souP4YT010T0SG0g/pOndNdZSYRj0H0ph040uYTZYDYgmmM0kIpQWd0gFUTHt8ZnsWniyssMm2yS8T60JPl0V0G000ZJ0f0KSZJtDMMoyU0Fq0U00T00m0M//800inl00V0/0izPFHU000vPIo40n0UhHoJ/OO080tsuQt0SwsrDIm08Tfv8FnM00i0zQF6d4kQ0FPh0vVK6WzG0Y0M0y006n00zno+00PTRSK/oDs/Jz0+8qNzzGT000zhlq0jYrP/S0G0LLy0VopOzhnSLv4NKKrL1IZRr01NtMro0FPgUj1000k0lYG0l0tGFisrpMqFU1hFMrQSr0100qL/znlrPzk0V6n00qmyoR0UnOgkK80w="


#import "ViewController.h"

// Wikitude SDK のヘッダーをインポートします。
#import <WikitudeSDK/WikitudeSDK.h>

// Wikitude SDK のデバッグ用ヘッダーをインポート。SDK内部の不測の状態に反応する可能性を提供します。
#import <WikitudeSDK/WTArchitectViewDebugDelegate.h>

#import <objc/runtime.h>

/**
 * ViewControllerクラスをWTArchitectViewDelegate／WTArchitectViewDebugDelegateプロトコルに準拠させます。
 */
@interface ViewController () <WTArchitectViewDelegate, WTArchitectViewDebugDelegate>

/// Wikitude SDKのメインコンポーネント「WTArchitectView」のstrongプロパティを追加。
@property (nonatomic, strong) WTArchitectView               *architectView;

/// さらに、ARchitect Worldのロード状態を表現するナビゲーションオブジェクトのweakプロパティを追加。
@property (nonatomic, weak) WTNavigation                    *architectWorldNavigation;

@end


@implementation ViewController

@synthesize locationManager;

/**
 * ［ObjC］ViewControllerオブジェクトが解放されるときに呼び出されるメソッドです。
 */
- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];  // デフォルトのNotification Centerからビューコントローラーを削除します。
}

/**
 * ［iOSビューイベント］ViewControllerのビューが（主にNibファイルから）ロードされた後に呼び出されます（初回に一度）。ここに「追加のセットアップ処理」などを実装してください。
 */
- (void)viewDidLoad {
    [super viewDidLoad];
    
    // アプリを実行しているデバイスが全てのWikitude SDKの要件を満たさないケースがあり得ます。
    // 例えばiPod Touchは、いくつかのハードウェアコンポーネントが不足しており、Geo拡張現実（WTFeature_Geo）は動きませんが、2Dトラッキング（WTFeature_2DTracking）なら動きます。
    // 注意：iOSでは、iPhone 3GSが画像認識に、またiPod Touch第4世代が Geo拡張現実に非対応のデバイスになります。
    // 
    // 要件をチェックして適切に状況に対処するために、+isDeviceSupportedForRequiredFeatures:error:メソッドを使います。
    // このメソッドに対し、ARchitect Worldで必要な機能（WTFeature_Geo | WTFeature_2DTracking | WTFeature_3DTracking）を指定することで、その要件にデバイスが対応しているかどうかをチェックできます。
    NSError *deviceNotSupportedError = nil;
    if ( [WTArchitectView isDeviceSupportedForRequiredFeatures:WTFeature_Geo | WTFeature_2DTracking error:&deviceNotSupportedError] ) { // 1
        
        // WTArchitectViewオブジェクトを新たに生成して初期化します。
        // この例では、フレームサイズの初期化でビュー領域を指定していますが、モーションセンサーのCMMotionManagerオブジェクトは指定していません。
        self.architectView = [[WTArchitectView alloc] initWithFrame:self.view.bounds motionManager:nil];
        
        // WTArchitectViewオブジェクトの各デリゲートに、各プロトコルに準拠したViewControllerオブジェクトを設定します。
        self.architectView.delegate = self;       // WTArchitectViewDelegateプロトコル準拠オブジェクト
        self.architectView.debugDelegate = self;  // WTArchitectViewDebugDelegateプロトコル準拠オブジェクト

        // ロケーションベースARに必要な位置情報の機能を有効化します。
        // なお、iOS 8以降で位置情報の扱いがより厳しくなっており、手動で位置情報を有効にする処理を記述する必要があります。info.plistファイルには、
        // <key>NSLocationWhenInUseUsageDescription</key>
        // <string>Accessing GPS information is needed to display POIs around your current location.</string>
        // もしくは（↑このAppの使用中のみ許可｜常に許可↓）
        // <key>NSLocationAlwaysUsageDescription</key>
        // <string>Accessing GPS information is always needed.</string>
        // というコードを記載してください。
        self.locationManager = [[CLLocationManager alloc] init];
        self.locationManager.delegate = self;
        if ([self.locationManager respondsToSelector:@selector(requestAlwaysAuthorization)]) {
            // iOS 8以上なら、-requestAlwaysAuthorizationメソッドが利用できるので、位置情報へのアクセス許可を求めるメッセージを表示します。
            [self.locationManager requestWhenInUseAuthorization]; // このAppの使用中のみ許可
            //[self.locationManager -requestAlwaysAuthorization]; // 常に許可
        } else {
            // iOS 8未満では、-requestAlwaysAuthorizationメソッドが利用できない。位置情報へのアクセスを開始しようとすると位置情報へのアクセス許可を求めるメッセージが表示されます。
            [self.locationManager startUpdatingLocation];
        }
        
        // 購入したライセンスが提供するWikitude SDKの全機能をアンロックするには、-setLicenseKeyメソッドを使います。
        [self.architectView setLicenseKey:kWT_LICENSE_KEY];
        
        // ARchitect Worldは、WTArchitectViewのレンダリングから独立してロードする必要があります。ロードしたARchitect WorldはarchitectWorldNavigationプロパティに指定します。
        // 注意： architectWorldNavigationプロパティはこの時点で割り当てられます。ナビゲーション（＝Architect World URL）オブジェクトは、他のARchitect Worldがロードされるまで有効です。
        // ここでは-loadArchitectWorldFromURL:withRequiredFeatures:メソッドに、
        // リソースファイル名「index」＋拡張子「html」＋フォルダーへの相対パス「ArchitectWorld」から取得したファイルURLを指定し、
        // さらに必要な機能（WTFeature_Geo | WTFeature_2DTracking | WTFeature_3DTracking）を指定することで、ARchitect Worldをロードしています。
        self.architectWorldNavigation = [self.architectView loadArchitectWorldFromURL:[[NSBundle mainBundle] URLForResource:@"index" withExtension:@"html" subdirectory:@"ArchitectWorld"] withRequiredFeatures:WTFeature_Geo | WTFeature_2DTracking];
        
        // WTArchitectViewはある程度OpenGLレンダリングを実施するので、フレーム更新はいったん停止させて、アプリがアクティブ状態に変更した段階で再開させる処理が必要です。
        // そのためここでは、アクティブ状態への変化に反応するために、UIApplicationの通知として「UIApplicationWillResignActiveNotification」と「UIApplicationDidBecomeActiveNotification」が使われています。
        // UIApplicationWillResignActiveNotificationはアプリが非アクティブになる段階で通知され、UIApplicationDidBecomeActiveNotificationはアプリがアクティブになった段階で通知される。
        // 注意：なお、UIAlertが現れたときにアプリはアクティブではなくなるので、UIApplicationDidBecomeActiveNotificationの中でそれを特別に処理する内容が実装されます。
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(didReceiveApplicationWillResignActiveNotification:) name:UIApplicationWillResignActiveNotification object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(didReceiveApplicationDidBecomeActiveNotification:) name:UIApplicationDidBecomeActiveNotification object:nil];
        
        [self.view addSubview:self.architectView];  // サブビューとしてWTArchitectViewオブジェクトを指定します。
        self.architectView.translatesAutoresizingMaskIntoConstraints = NO;  // AutoresizingMaskをオフにして、AutoLayoutの使用を有効にします。
        
        // NSLayoutConstraintを使って、AutoLayoutの制約を追加します。
        NSDictionary *views = NSDictionaryOfVariableBindings(_architectView);
        [self.view addConstraints: [NSLayoutConstraint constraintsWithVisualFormat:@"|[_architectView]|" options:0 metrics:nil views:views] ];  // 左右の間隔を空けない
        [self.view addConstraints: [NSLayoutConstraint constraintsWithVisualFormat:@"V:|[_architectView]|" options:0 metrics:nil views:views] ];  // 上下の間隔を空けず、全画面表示にする
        
        self.locationManager = [[CLLocationManager alloc] init];
        if ( [CLLocationManager locationServicesEnabled] ) {
            self.locationManager.delegate = self;
            self.locationManager.distanceFilter = 10; // 10mごとに通知
            [self.locationManager setDesiredAccuracy:kCLLocationAccuracyNearestTenMeters]; // 正確さは10m
            [self.locationManager startUpdatingLocation]; // -startUpdatingLocationメソッドを呼ぶと-stopUpdatingLocationメソッドが呼ばれるまで、現在の位置情報を取得し続けます。また、新しい位置情報が得られるたびに、locationManagerの-didUpdateLocationsメソッドが呼ばれます。
        }
        
    } else {
        NSLog(@"device is not supported - reason: %@", [deviceNotSupportedError localizedDescription]);
    }
}


#pragma mark - ロケーション管理用のCLLocationManagerのデリゲート

/**
 * ［iOSロケーションイベント］新しい位置情報が得られるたび呼び出されます。ここに「ロケーション更新関連の処理」を実装してください。
 */
- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray *)locations
{
    //CLLocation *loc = [locations lastObject];
    //[self.architectView callJavaScript:[NSString stringWithFormat:@"alert('%g, %g, %g, %g')", loc.coordinate.latitude, loc.coordinate.longitude, loc.altitude, loc.verticalAccuracy]];
}


#pragma mark - ビューのライフサイクル

/**
 * ［iOSビューイベント］ViewControllerのビューがビュー階層に追加される直前、つまり画面が表示される直前に呼び出されます。ここに「ビューの表示関連の処理」などを実装してください。
 */
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self startWikitudeSDKRendering];  // WTArchitectViewのレンダリングを開始します。
}

/**
 * ［iOSビューイベント］ViewControllerのビューがビュー階層に追加された直後、つまり画面が表示された直後に呼び出されます。ここに「追加のビュー提示関連の処理」などを実装してください。
 */
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
}

/**
 * ［iOSビューイベント］ViewControllerのビューがビュー階層から削除される直前、つまり別の画面に遷移する直前に呼び出されます。ここに「変更の保存や、ビュー状態に関連する処理」などを実装してください。
 */
- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
}

/**
 * ［iOSビューイベント］ViewControllerのビューがビュー階層から削除された直後、つまり別の画面に遷移した直後に呼び出されます。ここに「ビューが終了もしくは隠れたことに関する処理」などを実装してください。
 */
- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
    [self stopWikitudeSDKRendering];  // WTArchitectViewのレンダリングを停止します。
}


#pragma mark - ビューの回転

/**
 * WTArchitectViewの自動回転の有効（YES）／無効（NO）を返します。
 * 通常は「YES」をして、ユーザーのデバイス操作に従って画面が自動的に回転するようにします。
 */
- (BOOL)shouldAutorotate {
    return YES;
}

/**
 * WTArchitectViewがサポートする全ての回転方向を返します。
 * @return iOS 9.0より前（NSUInteger）と以降（UIInterfaceOrientationMask）で戻り値の型が違いますので注意してください。
 */
#if __IPHONE_OS_VERSION_MAX_ALLOWED < 90000
- (NSUInteger)supportedInterfaceOrientations
#else
- (UIInterfaceOrientationMask)supportedInterfaceOrientations
#endif
{
    // 以下の定数を返却することができます。
    // UIInterfaceOrientationMaskPortrait： 通常の縦向きだけ許容（＝回転不可）
    // UIInterfaceOrientationMaskLandscapeLeft： 左横向き（＝左に倒した状態）への回転のみ
    // UIInterfaceOrientationMaskLandscapeRight： 右横向きへの回転のみ
    // UIInterfaceOrientationMaskPortraitUpsideDown： 上下反対向きへの改訂のみ
    // UIInterfaceOrientationMaskLandscape： 左と右への横向きの回転のみ
    // UIInterfaceOrientationMaskAll： 全ての向きがＯＫ
    // UIInterfaceOrientationMaskAllButUpsideDown： 上下反対向き以外の、全ての向きがＯＫ
    return UIInterfaceOrientationMaskAll;
}


#if __IPHONE_OS_VERSION_MAX_ALLOWED < 80000
/**
 * 画面の回転が開始する直前に呼ばれます。
 * iOS 8.0より前（-willRotateToInterfaceOrientation）と以降（-viewWillTransitionToSize:withTransitionCoordinator:）で使えるメソッドが違いますので注意してください。
 */
- (void)willRotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation duration:(NSTimeInterval)duration {
    // デバイスの方向が変わったタイミングで、WTArchitectViewオブジェクトも回転するように、-setShouldRotate:toInterfaceOrientation:メソッドを呼び出します。
    [self.architectView setShouldRotate:YES toInterfaceOrientation:toInterfaceOrientation];
}
#else
/**
 * 画面のリサイズされる直前に呼ばれます。回転が開始される場合もこれが呼ばれます。
 * iOS 8.0より前（-willRotateToInterfaceOrientation）と以降（-viewWillTransitionToSize:withTransitionCoordinator:）で使えるメソッドが違いますので注意してください。
 */
- (void)viewWillTransitionToSize:(CGSize)size withTransitionCoordinator:(id<UIViewControllerTransitionCoordinator>)coordinator {
    [coordinator animateAlongsideTransition:^(id<UIViewControllerTransitionCoordinatorContext> context) {
        // デバイスの方向を調べます。
        UIInterfaceOrientation toInterfaceOrientation = [[UIApplication sharedApplication] statusBarOrientation];
        // デバイスの方向が変わったタイミングで、WTArchitectViewオブジェクトも回転するように、-setShouldRotate:toInterfaceOrientation:メソッドを呼び出します。
        [self.architectView setShouldRotate:YES toInterfaceOrientation:toInterfaceOrientation];
    } completion:^(id<UIViewControllerTransitionCoordinatorContext> context) {
    }];
    [super viewWillTransitionToSize:size withTransitionCoordinator:coordinator];
}
#endif


#pragma mark - プライベートメソッド

/**
 * WTArchitectViewのレンダリングを開始するメソッドです。
 */
- (void)startWikitudeSDKRendering{
    
    // WTArchitectViewが現在レンダリング中ではないかチェックして、実行中なら処理をスキップします。WTArchitectViewオブジェクトのisRunningプロパティを使います。
    if ( ![self.architectView isRunning] ) {
        
        // WTArchitectViewのレンダリングを開始して、スタートアップ処理を制御します。WTArchitectViewオブジェクトの-start:completion:メソッドを使います。
        [self.architectView start:^(WTStartupConfiguration *configuration) {
            
            // 構成（WTStartupConfiguration）オブジェクトを使用することで、WTArchitectViewのスタートアップ処理をカスタマイズできます。
            // 例えば下記のコードを記述すると、外カメラ（デフォルト）の代わりに内カメラを開始できます。
            // 例）configuration.captureDevicePosition = AVCaptureDevicePositionFront;
            // 設定可能な構成項目は以下の通りです。
            // ・configuration.captureDevicePreset： SDK開始時に使用される、キャプチャデバイスのプレセット。与えられたプレセットが、現在のデバイスによってサポートされていない場合、デフォルトのプレセットが使われます。
            // ・configuration.captureDevicePosition： SDK開始時に使用される、キャプチャデバイスの位置。与えられた位置が現在のデバイスによってサポートされていない場合、デフォルトの位置が使われます。
            // ・configuration.captureDeviceFocusMode： SDK開始時に使用される、キャプチャデバイスのフォーカスモード。与えられたフォーカスモードが現在のデバイスによってサポートされていない場合、デフォルトのフォーカスモードが使われます。注意点：ほとんどの外カメラには、指定可能なフォーカスモードはサポートされていません。そういったカメラは常に、連続フォーカスモードになります。
            // ・configuration.captureDeviceFocusRangeRestriction： SDK開始時に使用される、キャプチャデバイスのフォーカス範囲制限。与えられたフォーカス範囲制限が現在のデバイスによってサポートされていない場合、このプロパティ設定は無視されます。
            // ・configuration.targetFrameRate： SDK開始時のターゲットフレームレート。
            // ・configuration.cameraRenderingTargetTexture： カメラフレームの描画先に使われるターゲットテクスチャ。
            // ・configuration.shouldUseSystemHeadingCalibrationDisplay： 必要な向きのキャリブレーションを通知するために、iOSのコンパスキャリブレーションを表示するか、もしくはWikitudeのデリゲートメソッドが使われるべきかを指定します。

        } completion:^(BOOL isRunning, NSError *error) {
            
            // completionブロックは、内部の-startメソッドから戻ってきた直後に呼び出されます。
            if ( !isRunning ) {
                // 注意：万が一、要件が満たされていない場合は、WTArchitectViewは起動せずにisRunningプロパティは「NO」を返します。
                // 起動できなっかた原因が分かるように、ローカライズされたエラー記述を出力します。
                NSLog(@"WTArchitectView could not be started. Reason: %@", [error localizedDescription]);
            }
        }];
    }
}

/**
 * WTArchitectViewのレンダリングを停止するメソッドです。
 */
- (void)stopWikitudeSDKRendering {
    
    // レンダリングとカメラアクセスが停止されるまで、-stopメソッドの実行はブロックされます。
    if ( [self.architectView isRunning] ) {
        [self.architectView stop];
    }
}


#pragma mark - WTArchitectViewが提供するデリゲートについて

// WTArchitectViewは、やり取りするため、
// 　・WTArchitectViewDelegateプロトコル
// 　・WTArchitectViewDebugDelegateプロトコル
// という2つのプロトコルに準拠したデリゲートメソッドを提供しています。
// これらのデリゲートを使うことで、例えば以下のようなことが実現できます。
// 　（1）ARchitect World ロード完了時の処理
// 　（2）JavaScript内のdocument.locationで用いる「architectsdk://」プロトコルの起動
// 　（3）ビューのキャプチャ処理の管理
// 　（4）WTArchitectViewから引き起こされるビューコントローラーの表示処理のカスタマイズ


#pragma mark デリゲート1： WTArchitectViewDelegateプロトコルに準拠したメソッドの実装

/**
 * このメソッドは、指定URLのARchitect Worldのロードが完了したときに呼び出されます。
 * ロード結果となるnavigationオブジェクトには、指定のロードURL（originalURLプロパティ）だけでなく、最終的な解決URL（finalURLプロパティ）も含まれます。
 */
- (void)architectView:(WTArchitectView *)architectView didFinishLoadArchitectWorldNavigation:(WTNavigation *)navigation {
    // 「（1）ARchitect World ロード完了時の処理」を、ここに記述してください。
}

/**
 * このメソッドは、指定URLのARchitect Worldのロードが「失敗」したときに呼び出されます。
 */
- (void)architectView:(WTArchitectView *)architectView didFailToLoadArchitectWorldNavigation:(WTNavigation *)navigation withError:(NSError *)error {
    // NSLog()関数によりクラッシュログを生成しています。ここの内容は、必要に応じて適切にエラー処理するコードに置き換えてください。
    NSLog(@"ARchitect World from URL '%@' could not be loaded. Reason: %@", navigation.originalURL, [error localizedDescription]);
}


#pragma mark デリゲート2： WTArchitectViewDebugDelegateプロトコルに準拠したメソッドの実装

/**
 * このメソッドは、内部で「警告」が発生した際に呼び出されます。SDKはクラッシュしないように試みていますが、内部が不十分か不安定な状態になっています。
 * 注意：現在、-architectView:didEncounterInternalWarning:メソッドは使われていません。
 */
- (void)architectView:(WTArchitectView *)architectView didEncounterInternalWarning:(WTWarning *)warning {
    // 意図的に空のままにしています。
}

/**
 * このメソッドは、内部で「エラー」が発生した際に呼び出されます。
 * このメソッド内には、例えばユーザーによりカメラやGPSなどへのアクセスが拒否されたといった内部的な問題に対応するためのコードを記述します。
 */
- (void)architectView:(WTArchitectView *)architectView didEncounterInternalError:(NSError *)error {
    // NSLog()関数によりクラッシュログを生成しています。ここの内容は、必要に応じて適切にエラー処理するコードに置き換えてください。
    NSLog(@"WTArchitectView encountered an internal error '%@'", [error localizedDescription]);
}


#pragma mark - 通知の処理

/**
 * このメソッドは、アプリが非アクティブになる段階で届く通知を処理します。
 */
- (void)didReceiveApplicationWillResignActiveNotification:(NSNotification *)notification
{
    // 非同期処理を実行します。
    dispatch_async(dispatch_get_main_queue(), ^{
        [self stopWikitudeSDKRendering];  // レンダリングを停止
    });
}

/**
 * このメソッドは、アプリがアクティブになった段階で届く通知を処理します。
 */
- (void)didReceiveApplicationDidBecomeActiveNotification:(NSNotification *)notification
{
    // 非同期処理を実行します。
    dispatch_async(dispatch_get_main_queue(), ^{
        // アプリの初回起動時には、カメラやGPSへのアクセス許可を問う複数のUIAlertがユーザーに表示され、ARchitect Worldのローディングが途中の状態になります。
        // また、アプリが非アクティブになる際にはWTArchitectViewが一時停止されるため、ARchitect WorldのJavaScript実行が中断されます。
        // このような非アクティブな状態から適切にアプリを再開するためには、ARchitect Worldをリロードしなければなりません。
        // ローディング途中状態もしくはARchitect Worldの実行中断を検出するには、
        // （-loadArchitectWorldFromURL:withRequiredFeatures:メソッドから返される）navigationオブジェクト（＝WTNavigationオブジェクト、architectWorldNavigation）を使います。
        // WTNavigationオブジェクトには、ビューが中断状態か確かめるためのwasInterruptedプロパティや、ビューがロード要求状態か調べるためのisLoadingプロパティが用意されています。
        if ( self.architectWorldNavigation.wasInterrupted )
        {
            [self.architectView reloadArchitectWorld];  // ARchitect Worldをリロード
        }
        
        [self startWikitudeSDKRendering];  // レンダリングを再開
    });
}

@end
