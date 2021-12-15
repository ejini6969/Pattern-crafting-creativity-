# https://www.codewars.com/kata/5574940eae1cf7d520000076

def pattern(n):
    return '\n'.join(str(i) * i for i in range(1, n + 1, 2))
  
import codewars_test as test

@test.describe("Basic tests")
def f():
    @test.it("")
    def f():
        test.assert_equals(pattern(4),"1\n333")
        test.assert_equals(pattern(1),"1")
        test.assert_equals(pattern(5),"1\n333\n55555")
        test.assert_equals(pattern(5),"1\n333\n55555")
        test.assert_equals(pattern(0),"")
        test.assert_equals(pattern(-25),"")

⬇️⬇️

"""Example (n = 9):
1
333
55555
7777777
999999999
"""      
