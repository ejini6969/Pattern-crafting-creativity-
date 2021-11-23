function pattern(n){
  if(n <= 0) return ''
  let lst = [String(n % 10).repeat(n)]
  for(let i = 1; i < n; i++){
  lst.push(lst[i - 1].slice(0, i) + String((n - i) % 10).repeat(n - i))
  }
  return lst.join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(1),"1");
    assert.strictEqual(pattern(2),"22\n21");
    assert.strictEqual(pattern(3),"333\n322\n321");
    assert.strictEqual(pattern(7),"7777777\n7666666\n7655555\n7654444\n7654333\n7654322\n7654321");
    assert.strictEqual(pattern(17),"77777777777777777\n76666666666666666\n76555555555555555\n76544444444444444\n76543333333333333\n76543222222222222\n76543211111111111\n76543210000000000\n76543210999999999\n76543210988888888\n76543210987777777\n76543210987666666\n76543210987655555\n76543210987654444\n76543210987654333\n76543210987654322\n76543210987654321");
    assert.strictEqual(pattern(27),"777777777777777777777777777\n766666666666666666666666666\n765555555555555555555555555\n765444444444444444444444444\n765433333333333333333333333\n765432222222222222222222222\n765432111111111111111111111\n765432100000000000000000000\n765432109999999999999999999\n765432109888888888888888888\n765432109877777777777777777\n765432109876666666666666666\n765432109876555555555555555\n765432109876544444444444444\n765432109876543333333333333\n765432109876543222222222222\n765432109876543211111111111\n765432109876543210000000000\n765432109876543210999999999\n765432109876543210988888888\n765432109876543210987777777\n765432109876543210987666666\n765432109876543210987655555\n765432109876543210987654444\n765432109876543210987654333\n765432109876543210987654322\n765432109876543210987654321");
    assert.strictEqual(pattern(0),"");
    assert.strictEqual(pattern(-89),"");
  });
});

⬇️⬇️

/* Example (n = 17)：
77777777777777777
76666666666666666
76555555555555555
76544444444444444
76543333333333333
76543222222222222
76543211111111111
76543210000000000
76543210999999999
76543210988888888
76543210987777777
76543210987666666
76543210987655555
76543210987654444
76543210987654333
76543210987654322
76543210987654321
*/
