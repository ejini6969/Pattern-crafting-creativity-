function pattern(n){
  if (n < 1) return ''
 var side = Array.from({length: n - 1}, (_, i) => ' '.repeat(n - 1) + String((i + 1) % 10).repeat(n) + ' '.repeat(n - 1))
 var centre = Array.from({length: n - 1}, (_, i) => (i + 1) % 10)
 return side.join('\n') + '\n' + `${centre.join``}${String(n % 10).repeat(n)}${centre.reverse().join``}\n`.repeat(n) + side.reverse().join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(3),"  111  \n  222  \n1233321\n1233321\n1233321\n  222  \n  111  ");
    assert.strictEqual(pattern(5),"    11111    \n    22222    \n    33333    \n    44444    \n1234555554321\n1234555554321\n1234555554321\n1234555554321\n1234555554321\n    44444    \n    33333    \n    22222    \n    11111    ");
  });
});

⬇️⬇️

/* Example(11)：
          11111111111          
          22222222222          
          33333333333          
          44444444444          
          55555555555          
          66666666666          
          77777777777          
          88888888888          
          99999999999          
          00000000000          
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
          00000000000          
          99999999999          
          88888888888          
          77777777777          
          66666666666          
          55555555555          
          44444444444          
          33333333333          
          22222222222          
          11111111111          
*/
