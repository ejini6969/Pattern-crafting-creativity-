// https://www.codewars.com/kata/55de3f83e92c3e521a00002a

function a(n){
  n = n % 2 == 1 ? n - 1 : n
  return n < 4 ? '' : Array.from({length : n}, (_, i) => ' '.repeat(n - i - 1) + 'A' + (i == 0 ? '' : i == 1 || i == n / 2 ? ' A'.repeat(i) : ' '.repeat((i + 1) * 2 - 3) + 'A') + ' '.repeat(n - i - 1)).join("\n")
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(a(4), "   A   \n  A A  \n A A A \nA     A")
    Test.assertEquals(a(7), "     A     \n    A A    \n   A   A   \n  A A A A  \n A       A \nA         A")
    Test.assertEquals(a(0), "")
  });
});

⬇️⬇️

/* Example (n = 4)：
   A   
  A A  
 A A A 
A     A

Example (n = 7):
     A     
    A A
   A   A   
  A A A A  
 A       A 
A         A

Example (n = 12):
           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A
*/
