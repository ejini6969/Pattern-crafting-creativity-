// https://www.codewars.com/kata/592e3b99166edbd005000065

function createTriangle(firstLine){
  let a = firstLine.replace(/ /g, "")
  let lst = [firstLine]
  while(a.length != 1){
    
    let lst2 = []
    for(let i = 1; i < a.length; i++){
      if(a[i] == a[i - 1]){
        lst2.push("+")
      }
      else{
        lst2.push("-")
      }
    }    
    lst.push(lst2.join` `)
    a = lst2
  }  
 return lst.map((x, i) => `${" ".repeat(i)}${x}${" ".repeat(i)}`).join`\n`
}
 
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(createTriangle("+ - +"),
                                      `+ - +
                                       - - 
                                        +  `)

   assert.strictEqual(createTriangle("+ + - + - + +"),
                                      `+ + - + - + +
                                       + - - - - + 
                                        - + + + -  
                                         - + + -   
                                          - + -    
                                           - -     
                                            +      `
  });
});

⬇️⬇️

/* Example (firstLine = "+ + - + - + +")：
+ + - + - + +
 + - - - - + 
  - + + + -  
   - + + -   
    - + -    
     - -     
      +      
*/
