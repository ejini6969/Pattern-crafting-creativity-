# https://www.codewars.com/kata/55749101ae1cf7673800003e

def pattern(n):
    return '\n'.join(str(i) * i for i in range(2, n + 1, 2))
  
import codewars_test as test

@test.describe("Basic tests")
def f():
    @test.it("")
    def f():
        test.assert_equals(pattern(2),"22")
        test.assert_equals(pattern(1),"")
        test.assert_equals(pattern(5),"22\n4444")
        test.assert_equals(pattern(6),"22\n4444\n666666")
        test.assert_equals(pattern(0),"")
        test.assert_equals(pattern(-25),"")

⬇️⬇️

"""Example (n = 8):
22
4444
666666
88888888
"""       
