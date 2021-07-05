function createTriangle(firstLine){
  let a = firstLine.replace(/ /g, "")
  let lst = [firstLine]
  while(a.length != 1){
    
    let lst2 = []
    for(var i = 1; i < a.length; i++){
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
 
 const { assert } = require("chai")

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

/* Example("+ + - + - + +")：
+ + - + - + +
 + - - - - + 
  - + + + -  
   - + + -   
    - + -    
     - -     
      +      
*/
