// https://www.codewars.com/kata/5575ff8c4d9c98bc96000042

function pattern(n){
 return Array.from({length: n}, (_, i) => ' '.repeat(n - i - 1) + Array.from({length: i + 1}, (_, j) => (j + 1) % 10).concat(Array.from({length: i}, (_, k) => (i - k) % 10)).join`` + ' '.repeat(n - i - 1)).join('\n')
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(7),"      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321");
    assert.strictEqual(pattern(1),"1");
    assert.strictEqual(pattern(4),"   1   \n  121  \n 12321 \n1234321");
    assert.strictEqual(pattern(0),"");
    assert.strictEqual(pattern(-25),"");
  });
});

⬇️⬇️

/* Example (n = 15):
              1              
             121             
            12321            
           1234321           
          123454321          
         12345654321         
        1234567654321        
       123456787654321       
      12345678987654321      
     1234567890987654321     
    123456789010987654321    
   12345678901210987654321   
  1234567890123210987654321  
 123456789012343210987654321 
12345678901234543210987654321
*/
