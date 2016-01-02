# Javascriptとmochaとpower-assert(^ω^)★

Javascriptでテストなんてしたことなかった^^←糞  
先日、JavascriptでSpockみたいな感じにテストできるんだってよー！って知って。  
ということで、ちょっと試しにやってみたんで、そのときのメモを。


## 0. 結論から言う！

```
> npm install --save-dev mocha power-assert intelli-espower-loader
```

でmochaとpower-assertの導入は済む！←  

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
> npm install --save-dev mocha
```

で、mochaちゃんのインストーーール★☆  
そしたら、`mkdir test`でテスト用のディレクトリを作ってあげて、そこにテストをぶち込みます！

ちゃんとできてるか確かめるために、適当に（めんどっちぃから）、[ここ](http://mochajs.org/)の「Getting Started」の「In your editor:」を`test/test.js`にコピって…

```
> mocha
```

で、実行！！  
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
npm install --save-dev power-assert intelli-espower-loader
```

そんで、上記に書いた`test.js`のソースの１行目`var assert = require("assert");`を`var assert = require("power-assert");`に変更し、以下を実行！

```
> mocha --require intelli-espower-loader
```

Spockみたいなやつが表示されたあああああああああああああ・゜・(PД`q｡)・゜・  
（これな↓↓）

```
assert(test === 'fuga')
       |    |
       |    false
       "hoge"
```


## 4. でけた

わーーーーーーーーーーい！！！！！！！  
Javascriptでテストデビューしました！！！！！！！

次はテスト駆動開発やるのです！！


### リンク

* [Mocha](http://mochajs.org/)
* [power-assert](https://github.com/power-assert-js/power-assert)
