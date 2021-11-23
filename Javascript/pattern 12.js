function pattern(n){
 if (n < 1) return ''
 let side = Array.from({length: n - 1}, (_, i) => ' '.repeat(i) + String((i + 1) % 10) + ' '.repeat(2 * n - 3 - 2 * i) + String((i + 1) % 10) + ' '.repeat(i)).join("\n")
 return `${side}\n${' '.repeat(n - 1)}${n % 10}${' '.repeat(n - 1)}\n${side.split('').reverse().join``}`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pattern(3),"1   1\n 2 2 \n  3  \n 2 2 \n1   1");
    assert.strictEqual(pattern(5),"1       1\n 2     2 \n  3   3  \n   4 4   \n    5    \n   4 4   \n  3   3  \n 2     2 \n1       1");
    assert.strictEqual(pattern(0),"");
  });
});

⬇️⬇️

/* Example (n = 10):
  1                 1
   2               2 
    3             3  
     4           4   
      5         5    
       6       6     
        7     7      
         8   8       
          9 9        
           0         
          9 9        
         8   8       
        7     7      
       6       6     
      5         5    
     4           4   
    3             3  
   2               2 
  1                 1
*/
