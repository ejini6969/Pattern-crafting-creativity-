def pattern(n):
    a = ''.join(str(k % 10) for k in range(1, n + 1))
    return '\n'.join(' ' * (n - i) + a + ' ' * (i - 1) for i in range(1, n + 1))
  
import codewars_test as test

@test.describe("Basic Tests")
def f():
    @test.it("Should work for +ve Numbers")
    def f():
        test.assert_equals(pattern(3),"  123\n 123 \n123  ")
        test.assert_equals(pattern(5),"    12345\n   12345 \n  12345  \n 12345   \n12345    ")
        test.assert_equals(pattern(8),"       12345678\n      12345678 \n     12345678  \n    12345678   \n   12345678    \n  12345678     \n 12345678      \n12345678       ")
    @test.it("Should work for -ve Numbers")
    def f():
        test.assert_equals(pattern(-3),"")
        test.assert_equals(pattern(-11),"")
        test.assert_equals(pattern(-25),"")
    @test.it("Should work for Zero")
    def f():
        test.assert_equals(pattern(0),"")
        
⬇️⬇️

"""Example (n = 10):
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
"""       
