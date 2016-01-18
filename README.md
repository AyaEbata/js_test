# ☆★mochaとpower-assertとESLint(^ω^)★☆

テスト駆動開発をやるために、必要な物の導入とか使い方とかなんたら(^ω^)  
やってみたこと、メモして残しておきやす(^ω^)


## 第1章 mochaとpower-assertの導入

jsのテストもSpockみたいにpower assertで表示できるとか、なんかテンションあがるよね(^ω^)  
ってことで。やってきます！！


### 0. 結論から言う！

```
> sudo npm install -g mocha
> npm install --save-dev mocha power-assert intelli-espower-loader
```

をさらっと打ち込めば、mochaとpower-assertの導入は済む！←  

けど！  
「mochaなにそれおいしいの？」  
「power-assertってSpockに似てるんだね(^ω^)むしゃむしゃ」  

…そんなレベルだったので、１つずつインストールしてみて、実行してみて、動きをみつつやってみましたｗ


### 1. 概要

**mocha**  
　Javascriptでテストするためのフレームワーク

**power-assert**  
　これ使うとSpockみたいに見やすくなる

今回はこの２つを使っていきやす！


### 2. mochaのインストールとか何やら

まずは`npm init`で`package.json`つくってあげて、

```
> npm install -g mocha
```

で、mochaちゃんのインストーーール★☆  
そしたら、`mkdir test`でテスト用のディレクトリを作ってあげて、そこにテストをぶち込みます！

ちゃんとできてるか確かめるために、適当に（めんどっちぃから）、[ここ](http://mochajs.org/)の「Getting Started」の「In your editor:」を`test/test.js`にコピって…

```
> mocha test/test.js
```

で、実行！！（`mocha`だけでもいける）  
なんか結果みたいなの出力されてればおっけーだとおもう(^ω^)←適当

ちゃんと確かめてみたバージョンのソースはこちら↓↓

```
var assert = require("assert");

var test = "hoge";
it ("assert", function() {
    // assert(test === 'hoge');  // こっち成功
    assert(test === 'fuga');  // こっち失敗
});
```

結果の見方としては、緑色のチェックマークが出たら、テスト通ってるってこと！赤い文字出たら、テスト通ってないってこと！（適当←）

**というわけで、Spockみたいな表示をさせるために、power-assert入れてみます！**


### 3. power-assertのインストールとか何やら

まずはインストール(^ω^)

```
> npm install --save-dev mocha power-assert intelli-espower-loader
```

そんで、上記に書いた`test.js`のソースの１行目`var assert = require("assert");`を`var assert = require("power-assert");`に変更し、以下を実行！

```
> mocha --require intelli-espower-loader test/test.js
```

Spockみたいなやつが表示されたあああああああああああああ・゜・(PД`q｡)・゜・  
（これな↓↓）

```
assert(test === 'fuga')
       |    |
       |    false
       "hoge"
```

ちなみに、この状態で、

```
> mocha test/test.js
```

を実行すると、power-assertを入れる前の結果（mochaのみのやつ）が出力されるようです^^


### 4. でけた

わーーーーーーーーーーい！！！！！！！  
Javascriptでテストデビューしました！！！！！！！

~~次はテスト駆動開発やるのです！！~~  
（その前に、Linterの導入をしよう。）


### 5. 後日知ったこと

`npm install`っていちいち書かなくても`npm i`で良いみたいです^^

後、実行時のオプションで`-w`をつけてあげれば、保存したタイミングでテストが走ってくれるらしいです！！！！！！！！！！！！！  
やばいこれ！！！！！！！！！！！！！


## 第2章 ESLintの導入

まず、テストとかする前にLinterいれようと思ったら忘れてた（てへぺろ
というわけで、流れ的におかしいかもですが、このままで続行します←


### 1. 概要

**ESLint**  
　Javascriptの静的チェック  
　（本当はJavaのIDEみたいにエディタ上にエラーとかだしたかった）


### 2. ESLintのインストールとかなんやら

```
> npm i -g eslint
```

で導入成功。（どうにゅうかんたん）

今回は、上記で使ったtestファイルの静的チェックをしますです。ということで…

```
> eslint test/test.js
```

これを叩く。

そしたらば、ターミナルには何も出ませんよね(^ω^)  
だって、何も設定してないですもん(^m^)←ひどい


### 3. 設定

まず、`.eslintrc`というファイルを作りますです。
そして、今回はこんな感じに設定をしてみました。

```
{
  "extends": "eslint:recommended",  // 最低限のルール
  "rules": {   // 0: 無効、1: 有効（渓谷）、2: 有効（エラー）
    "semi": 2  // セミコロン忘れ
  },
  "env": {
    "browser": true, // ブラウザのグローバル変数
    "node": true,    // nodeのグローバル変数
    "amd": true,     // define()とrequire()をグローバル変数として定義
    "mocha": true    // mochaのグローバル変数
  }
}
```

試しに、`test/test.js`の`;`とか抜いてみたらエラーが出てくれるので雰囲気わかると思います(^ω^)  
後は、[公式ページのルール一覧](http://eslint.org/docs/rules/)を見つつ追加していく感じですね(^ω^)

そんな感じです、はい(^ω^)


## リンク

* [Mocha](http://mochajs.org/)
* [power-assert](https://github.com/power-assert-js/power-assert)
