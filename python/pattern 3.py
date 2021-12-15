# https://www.codewars.com/kata/557341907fbf439911000022

def pattern(n):
    return '\n'.join(''.join(str(i) for i in range(n, j, -1)) for j in range(n - 1, -1, -1))
  
@test.describe("Basic tests")
def basic():
    @test.it("")
    def f():
        test.assert_equals(pattern(1),"1")
        test.assert_equals(pattern(2),"2\n21")
        test.assert_equals(pattern(5),"5\n54\n543\n5432\n54321")
        test.assert_equals(pattern(0),"")
        test.assert_equals(pattern(-25),"")
 
⬇️⬇️

"""Example (n = 5):
5
54
543
5432
54321
"""
