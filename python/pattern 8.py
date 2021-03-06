# https://www.codewars.com/kata/5575ff8c4d9c98bc96000042

def pattern(n):
    return "\n".join([" " * (n - i) + ''.join(str(j % 10) for j in range(1, i)) + str(i % 10) + ''.join(str(k % 10) for k in range(i - 1, 0, -1)) + " " * (n - i) for i in range(1, n + 1)])
  
import codewars_test as test

@test.describe("Basic tests")
def f():
    @test.it("")
    def f():
        test.assert_equals(pattern(7),"      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321")
        test.assert_equals(pattern(1),"1")
        test.assert_equals(pattern(4),"   1   \n  121  \n 12321 \n1234321")
        test.assert_equals(pattern(0),"")
        test.assert_equals(pattern(-25),"")
        
⬇️⬇️

""" Example (n = 15):
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
