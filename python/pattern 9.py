def pattern(n):
    if n < 1:
        return ''
    elif n == 1:
        return "1"
    side = [" " * (n - i) + ''.join(str(j % 10) for j in range(1, i + 1)) + ''.join(str(k % 10) for k in range(i - 1, 0, -1)) + " " * (n - i) for i in range(1, n)]
    centre = ''.join([str(i % 10) for i in range(1, n + 1)] + [str((n - j) % 10) for j in range(1, n)])
    return "\n".join(side) + "\n" + centre + "\n" + "\n".join(side[::-1])
    
@test.describe("Basic tests")
def basic():
    @test.it("")
    def f():
        test.assert_equals(pattern(1),"1")
        test.assert_equals(pattern(3),"  1  \n 121 \n12321\n 121 \n  1  ")
        test.assert_equals(pattern(7),"      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321\n 12345654321 \n  123454321  \n   1234321   \n    12321    \n     121     \n      1      ")
        test.assert_equals(pattern(0),"")
        test.assert_equals(pattern(-25),"")    
        
⬇️⬇️

"""Example (n = 15):
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
"""
