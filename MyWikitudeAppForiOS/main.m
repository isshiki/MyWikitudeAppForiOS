//
//  main.m
//  MyWikitudeAppForiOS
//
//

#import <UIKit/UIKit.h>  // UIKitフレームワークをインポート。iOSアプリのUI構築・管理に必要なクラスを提供します。
#import "AppDelegate.h"

/**
 * アプリのmain関数です。プログラムの実行が開始されます。
 */
int main(int argc, char * argv[]) {
    // AutoReleaseプールを設定して、アプリ起動修了後に不要になったインスタンスを自動解放するようにします。
    @autoreleasepool {
        // アプリケーションを起動するためのUIApplicationMain()関数をAppDelegateクラスを指定したうえで呼び出します。
        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    }
}
