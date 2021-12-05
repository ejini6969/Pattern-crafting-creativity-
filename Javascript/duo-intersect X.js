// https://www.codewars.com/kata/5a076c0306d5b664df000009

function draw(dim) {
  if(dim == 1) return "X\n"
  const side = Array.from({length: ~~(dim / 2)}, (_, i) => ' '.repeat(i) + 'X' + ' '.repeat(dim - 2 * (i + 1)) + 'X' + ' '.repeat(i))
  return `${side.join("\n")}\n${dim % 2 == 1 ? ' '.repeat(~~(dim / 2)) + 'X' + ' '.repeat(~~(dim / 2)) + "\n": ''}${side.reverse().join("\n")}\n`
}

describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals(draw(1), "X\n");
    Test.assertEquals(draw(3), "X X\n X \nX X\n");
    Test.assertEquals(draw(4), "X  X\n XX \n XX \nX  X\n");
    Test.assertEquals(draw(6), "X    X\n X  X \n  XX  \n  XX  \n X  X \nX    X\n");
  });
});

⬇️⬇️

/* Example (dim = 20)：
X                  X
 X                X 
  X              X  
   X            X   
    X          X    
     X        X     
      X      X      
       X    X       
        X  X        
         XX         
         XX         
        X  X        
       X    X       
      X      X      
     X        X     
    X          X    
   X            X   
  X              X  
 X                X 
X                  X   
*/
