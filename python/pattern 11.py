# https://www.codewars.com/kata/5589ad588ee1db3f5e00005a

def pattern(n):
    if n < 1:
        return ''
    elif n == 1:
        return '1'
    side = [' ' * (n - 1) + str(i % 10) * n + ' ' * (n - 1) for i in range(1, n)]
    centre = [str(i % 10) for i in range(1, n)]
    return '\n'.join(side) + '\n' + f"{''.join(centre)}{str(n % 10) * n}{''.join(centre[::-1])}\n" * n + '\n'.join(side[::-1])
  
import codewars_test as test

@test.describe("Basic Tests")
def f():
    @test.it("Should work for Positive Numbers")
    def f():
        test.assert_equals(pattern(3),"  111  \n  222  \n1233321\n1233321\n1233321\n  222  \n  111  ")
        test.assert_equals(pattern(5),"    11111    \n    22222    \n    33333    \n    44444    \n1234555554321\n1234555554321\n1234555554321\n1234555554321\n1234555554321\n    44444    \n    33333    \n    22222    \n    11111    ")
         
    @test.it("Should work for Negative Numbers")
    def f():
        test.assert_equals(pattern(-3),"")
        test.assert_equals(pattern(-11),"")
        test.assert_equals(pattern(-25),"")
        
    @test.it("Should work for Zero")
    def f():
        test.assert_equals(pattern(0),"")
        

⬇️⬇️

""" Example (n = 11)：
          11111111111          
          22222222222          
          33333333333          
          44444444444          
          55555555555          
          66666666666          
          77777777777          
          88888888888          
          99999999999          
          00000000000          
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
          00000000000          
          99999999999          
          88888888888          
          77777777777          
          66666666666          
          55555555555          
          44444444444          
          33333333333          
          22222222222          
          11111111111          
"""       
