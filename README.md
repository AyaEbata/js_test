# Javascriptとmochaとpower-assert(^ω^)★

Javascriptでテストなんてしたことなかった^^←糞  
先日、JavascriptでSpockみたいな感じにテストできるんだってよー！って知って。  
ということで、ちょっと試しにやってみたんで、そのときのメモを。


## 0. 結論から言う！

```
> sudo npm install -g mocha
> npm install --save-dev mocha power-assert intelli-espower-loader
```

をさらっと打ち込めば、mochaとpower-assertの導入は済む！←  

けど！  
「mochaなにそれおいしいの？」  
「power-assertってSpockに似てるんだね(^ω^)むしゃむしゃ」  

…そんなレベルだったので、１つずつインストールしてみて、実行してみて、動きをみつつやってみましたｗ


## 1. 概要

**mocha**  
　Javascriptでテストするためのフレームワーク

**power-assert**  
　これ使うとSpockみたいに見やすくなる

今回はこの２つを使っていきやす！


## 2. mochaのインストールとか何やら

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


## 3. power-assertのインストールとか何やら

まずはインストール(^ω^)

```text
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


## 4. でけた

わーーーーーーーーーーい！！！！！！！  
Javascriptでテストデビューしました！！！！！！！

次はテスト駆動開発やるのです！！


## 5. 後日知ったこと

`npm install`っていちいち書かなくても`npm i`で良いみたいです^^

後、実行時のオプションで`-w`をつけてあげれば、保存したタイミングでテストが走ってくれるらしいです！！！！！！！！！！！！！  
やばいこれ！！！！！！！！！！！！！


## リンク

* [Mocha](http://mochajs.org/)
* [power-assert](https://github.com/power-assert-js/power-assert)
