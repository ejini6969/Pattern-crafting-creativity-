function pattern(n,x = 1){
  if(n < 1) return ""
  x = Math.max(1, x)
  const side = Array.from({length: n - 1}, (_, i) => `${" ".repeat(i)}${(i+1) % 10}${" ".repeat((n - 1) * 2 - 1 - i * 2)}${(i+1) % 10}${" ".repeat(i)}`).join("\n")
  const middle = `${" ".repeat(n - 1)}${n % 10}${" ".repeat(n - 1)}`
  const first = [side, middle, side.split("\n").reverse().join`\n`].join`\n`
  const rest = Array(x - 1).fill([side.split("\n").slice(1).join`\n`, middle, side.split("\n").reverse().join`\n`].join`\n`).join`\n`
  return x <= 1 ? first : `${first}\n${rest}`
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
	  assert.strictEqual(pattern(3,7),"1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1\n 2 2 \n  3  \n 2 2 \n1   1","Uhm, I'm afraid your code is off the road");
    assert.strictEqual(pattern(15,3),"1                           1\n 2                         2 \n  3                       3  \n   4                     4   \n    5                   5    \n     6                 6     \n      7               7      \n       8             8       \n        9           9        \n         0         0         \n          1       1          \n           2     2           \n            3   3            \n             4 4             \n              5              \n             4 4             \n            3   3            \n           2     2           \n          1       1          \n         0         0         \n        9           9        \n       8             8       \n      7               7      \n     6                 6     \n    5                   5    \n   4                     4   \n  3                       3  \n 2                         2 \n1                           1\n 2                         2 \n  3                       3  \n   4                     4   \n    5                   5    \n     6                 6     \n      7               7      \n       8             8       \n        9           9        \n         0         0         \n          1       1          \n           2     2           \n            3   3            \n             4 4             \n              5              \n             4 4             \n            3   3            \n           2     2           \n          1       1          \n         0         0         \n        9           9        \n       8             8       \n      7               7      \n     6                 6     \n    5                   5    \n   4                     4   \n  3                       3  \n 2                         2 \n1                           1\n 2                         2 \n  3                       3  \n   4                     4   \n    5                   5    \n     6                 6     \n      7               7      \n       8             8       \n        9           9        \n         0         0         \n          1       1          \n           2     2           \n            3   3            \n             4 4             \n              5              \n             4 4             \n            3   3            \n           2     2           \n          1       1          \n         0         0         \n        9           9        \n       8             8       \n      7               7      \n     6                 6     \n    5                   5    \n   4                     4   \n  3                       3  \n 2                         2 \n1                           1");
    assert.strictEqual(pattern(10,-29),"1                 1\n 2               2 \n  3             3  \n   4           4   \n    5         5    \n     6       6     \n      7     7      \n       8   8       \n        9 9        \n         0         \n        9 9        \n       8   8       \n      7     7      \n     6       6     \n    5         5    \n   4           4   \n  3             3  \n 2               2 \n1                 1","It Should work when x <= 1");
    assert.strictEqual(pattern(5),"1       1\n 2     2 \n  3   3  \n   4 4   \n    5    \n   4 4   \n  3   3  \n 2     2 \n1       1");
    assert.strictEqual(pattern(4,2,3,5,7,-8),"1     1\n 2   2 \n  3 3  \n   4   \n  3 3  \n 2   2 \n1     1\n 2   2 \n  3 3  \n   4   \n  3 3  \n 2   2 \n1     1")
  });
});

⬇️⬇️

/* Example：
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
