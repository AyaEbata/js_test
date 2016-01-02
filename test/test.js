var assert = require("power-assert");

var test = "hoge";
it ("assert", function() {
    // assert(test === 'hoge');  // こっち成功
    assert(test === 'fuga');  // こっち失敗
});