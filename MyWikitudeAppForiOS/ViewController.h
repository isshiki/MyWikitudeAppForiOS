//
//  ViewController.h
//  MyWikitudeAppForiOS
//
//

#import <UIKit/UIKit.h>
#import <CoreLocation/CoreLocation.h>

/*
 * アプリのビューとその画面遷移を管理するためのインターフェースです。いわゆるMVCアーキテクチャの「C」を担当し、アプリの中心的な存在です。
 */
@interface ViewController : UIViewController<CLLocationManagerDelegate>

@property (nonatomic, retain) CLLocationManager *locationManager;

@end

