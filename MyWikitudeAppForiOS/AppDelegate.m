//
//  AppDelegate.m
//  MyWikitudeAppForiOS
//
//

#import "AppDelegate.h"


@interface AppDelegate ()

@end


@implementation AppDelegate

#pragma mark - ライフサイクルイベント関連のメソッド

/**
 * アプリ起動直後に呼び出されます。
 */
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // カスタムの処理をここに追加してください。
    return YES;  // 処理成功を返します。
}

/**
 * アプリの状態がアクティブから非アクティブに遷移したタイミングで、このメソッドが呼び出されます。
 * そのタイミングとは、例えばSMSメッセージや電話の呼び出しが来たときのような一時的な割り込みの時、
 * あるいはユーザーがアプリ使用を中断したことによりバックグランド状態に遷移開始した時などです。
 * このメソッドは、実行中のタスクを停止するためや、タイマーを無効化するためなどで使ってください。
 * ゲームでは、ゲームをいったん停止するために使ってください。
 */
- (void)applicationWillResignActive:(UIApplication *)application {
}

/**
 * アプリがバックグラウンド実行をサポートしている場合は、ユーザーがアプリを終了する際に、
 * -applicationWillTerminateメソッドの代わりにこのメソッドが呼び出されます。
 * 例えば、共有リソースの解放や、ユーザーデータの保存、タイマーの無効化、
 * 後でアプリが終了されたときに備えて現在の状態をアプリにリストアするのに十分なアプリ状態情報を保存するために、
 * このメソッドを使ってください。
 */
- (void)applicationDidEnterBackground:(UIApplication *)application {
}

/**
 * アプリの状態がバックグラウンドから非アクティブに遷移する際に呼び出されます。
 * バックグラウンド状態に入った際に起こったさまざまな変化をここで元に戻すことも可能です。
 */
- (void)applicationWillEnterForeground:(UIApplication *)application {
}

/**
 * アプリの状態が非アクティブからアクティブに遷移する際に呼び出されます。
 * まだ非アクティブなこのタイミングで、
 * 一時停止していた（もしくはまだ開始されていない）何らかのタスクをリスタートしてください。
 * 前の状態がバックグラウンドだった場合、必要に応じてUIをリフレッシュしてください。
 */
- (void)applicationDidBecomeActive:(UIApplication *)application {
}

/**
 * アプリが終了しようとする際に呼び出されます。適宜、データ保存をしてください。
 * -applicationDidEnterBackgroundメソッドの説明も併せて参照してください。
 */
- (void)applicationWillTerminate:(UIApplication *)application {
    [self saveContext];  // 終了前に、-saveContextメソッドが呼び出して、アプリの管理オブジェクトコンテキスト内の変化を保存してください。
}


#pragma mark - Core Data 関連

// ［Core Data］各プロパティを表現するインスタンス変数を定義・指定します。
@synthesize managedObjectContext = _managedObjectContext;
@synthesize managedObjectModel = _managedObjectModel;
@synthesize persistentStoreCoordinator = _persistentStoreCoordinator;

/**
 * ［Core Data］CoreDataストアファイルを保存するためにアプリが使うディレクトリへのパスを返します。
 */
- (NSURL *)applicationDocumentsDirectory {
    // 下記のコードでは、アプリのドキュメントディレクリ内にある「Isshiki.MyWikitudeAppForiOS」という名前のディレクトリを使ってディレクトリパスを作成し、それを返しています。
    return [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] lastObject];
}

/**
 * ［Core Data］managedObjectContextプロパティのgetterアクセサメソッドの実装。
 * アプリの管理オブジェクトコンテキスト（＝すでにアプリの永続ストアコーディネーターに結び付けられている）を生成して返します。
 */
- (NSManagedObjectContext *)managedObjectContext {
    if (_managedObjectContext != nil) {
        return _managedObjectContext;
    }
    
    NSPersistentStoreCoordinator *coordinator = [self persistentStoreCoordinator];
    if (!coordinator) {
        return nil;
    }
    
    _managedObjectContext = [[NSManagedObjectContext alloc] initWithConcurrencyType:NSMainQueueConcurrencyType];
    [_managedObjectContext setPersistentStoreCoordinator:coordinator];
    return _managedObjectContext;
}

/**
 * ［Core Data］managedObjectModelプロパティのgetterアクセサメソッドの実装。
 * アプリの管理オブジェクトモデルを生成して返します。
 */
- (NSManagedObjectModel *)managedObjectModel {
    if (_managedObjectModel != nil) {
        return _managedObjectModel;
    }
    
    NSURL *modelURL = [[NSBundle mainBundle] URLForResource:@"MyWikitudeAppForiOS" withExtension:@"momd"];
    _managedObjectModel = [[NSManagedObjectModel alloc] initWithContentsOfURL:modelURL];
    return _managedObjectModel;
}

/**
 * ［Core Data］persistentStoreCoordinatorプロパティのgetterアクセサメソッドの実装。
 * アプリ用の永続ストアを生成・追加した永続ストアコーディネーターを作成して返します。
 */
- (NSPersistentStoreCoordinator *)persistentStoreCoordinator {
    if (_persistentStoreCoordinator != nil) {
        return _persistentStoreCoordinator;
    }
    
    // コーディネーターとストアの作成
    _persistentStoreCoordinator = [[NSPersistentStoreCoordinator alloc] initWithManagedObjectModel:[self managedObjectModel]];
    NSURL *storeURL = [[self applicationDocumentsDirectory] URLByAppendingPathComponent:@"MyWikitudeAppForiOS.sqlite"];
    NSError *error = nil;
    NSString *failureReason = @"There was an error creating or loading the application's saved data.";
    if (![_persistentStoreCoordinator addPersistentStoreWithType:NSSQLiteStoreType configuration:nil URL:storeURL options:nil error:&error]) {

        // 失敗した場合は、得られたエラー情報を報告する。
        NSMutableDictionary *dict = [NSMutableDictionary dictionary];
        dict[NSLocalizedDescriptionKey] = @"Failed to initialize the application's saved data";
        dict[NSLocalizedFailureReasonErrorKey] = failureReason;
        dict[NSUnderlyingErrorKey] = error;
        error = [NSError errorWithDomain:@"YOUR_ERROR_DOMAIN" code:9999 userInfo:dict];
        // ここの内容は、必要に応じて適切にエラー処理するコードに置き換えてください。
        // ※NSLog()関数によりクラッシュログを生成し、abort()関数によりアプリを異常終了させます。これは開発時には有用ですが、出荷用アプリ内ではこの関数は使わないでください。
        NSLog(@"Unresolved error %@, %@", error, [error userInfo]);
        abort();
    }
    
    return _persistentStoreCoordinator;
}


#pragma mark - Core Data 保存処理

/**
 * ［Core Data］管理オブジェクトコンテキスト上のデータを保存するメソッド。
 */
- (void)saveContext {
    NSManagedObjectContext *managedObjectContext = self.managedObjectContext;
    if (managedObjectContext != nil) {
        NSError *error = nil;
        if ([managedObjectContext hasChanges] && ![managedObjectContext save:&error]) {
            // ここの内容は、必要に応じて適切にエラー処理するコードに置き換えてください。
            // ※NSLog()関数によりクラッシュログを生成し、abort()関数によりアプリを異常終了させます。これは開発時には有用ですが、出荷用アプリ内ではこの関数は使わないでください。
            NSLog(@"Unresolved error %@, %@", error, [error userInfo]);
            abort();
        }
    }
}

@end
