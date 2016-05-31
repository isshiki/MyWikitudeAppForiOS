//
//  AppDelegate.h
//  MyWikitudeAppForiOS
//
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>  // モデルオブジェクトを永続化するためのフレームワークをインポート。DBにSQLiteが使われます。

/**
 * アプリの各種UI関連イベントを管理するためのインターフェースです。
 */
@interface AppDelegate : UIResponder <UIApplicationDelegate>

/// メインウィンドウとなるUIWindowのプロパティ。
@property (strong, nonatomic) UIWindow *window;

/// ［Core Data］管理オブジェクトとCore Dataインフラストラクチャ機能を仲介する役割を持つ「管理オブジェクトコンテキスト」のプロパティ。
@property (readonly, strong, nonatomic) NSManagedObjectContext *managedObjectContext;

/// ［Core Data］エンティティのコレクションとなるスキーマを表現する「管理オブジェクトモデル」のプロパティ。
@property (readonly, strong, nonatomic) NSManagedObjectModel *managedObjectModel;

/// ［Core Data］管理オブジェクトコンテキストと永続オブジェクトストアの間を取り持つ「永続ストアコーディネーター」のプロパティ。永続ストアコーディネーターは永続ストアの実質的な本体となる。
@property (readonly, strong, nonatomic) NSPersistentStoreCoordinator *persistentStoreCoordinator;

- (void)saveContext;
- (NSURL *)applicationDocumentsDirectory;

@end

