function pattern(n){
  let a = Array.from({length: n} , (_, i) => (i + 1) % 10).join('')
  return Array.from({length:n}, (_, i) => ' '.repeat(n - i - 1) + a + ' '.repeat(i)).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(3),"  123\n 123 \n123  ");
    assert.strictEqual(pattern(5),"    12345\n   12345 \n  12345  \n 12345   \n12345    ");
    assert.strictEqual(pattern(8),"       12345678\n      12345678 \n     12345678  \n    12345678   \n   12345678    \n  12345678     \n 12345678      \n12345678       ");
  });
});

⬇️⬇️

/* Example (n = 10):
         1234567890
        1234567890 
       1234567890  
      1234567890   
     1234567890    
    1234567890     
   1234567890      
  1234567890       
 1234567890        
1234567890       
*/
