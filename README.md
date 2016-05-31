# MyWikitudeAppForiOS

Wikitude SDK（JavaScript API）を用いたロケーションベースARのサンプルアプリで、周囲500m範囲内のバス停の方角と距離をポップアップ表示します。

連載記事「[Wikitudeで「オープンデータ＋AR（拡張現実）」スマホアプリをお手軽開発［PR］ - Build Insider](http://www.buildinsider.net/pr/grapecity/wikitude)」の第2回で作成したiOS向けのサンプルアプリです。

このサンプルアプリは、SDKに付属のサンプルをベースに独自の拡張を加えたものです。

## ビルド・実行するための注意点

- /MyWikitudeAppForiOS/ViewController.m

ViewController.mファイル内の`#define kWT_LICENSE_KEY`の値を、実際に取得した正しいアクセスキーにしてください。

- /MyWikitudeAppForiOS/Frameworks/WikitudeSDK.framework/WikitudeSDK

WikitudeSDKファイルは100Mbytesを超えているため、GitHubにアップロードできませんでした。ダウンロードしたWikitude SDKから入手してください。できればFrameworks配下すべてを置き換えてください。



## ライセンス

MIT.



