# https://www.codewars.com/kata/55733d3ef7c43f8b0700007c

def pattern(n):
    return '\n'.join(''.join(str(i) for i in range(n, j, -1)) for j in range(n))
  
@test.describe("Basic tests")
def basic():
    @test.it("")
    def f():
        test.assert_equals(pattern(1),"1")
        test.assert_equals(pattern(2),"21\n2")
        test.assert_equals(pattern(5),"54321\n5432\n543\n54\n5")
        test.assert_equals(pattern(0),"")
        test.assert_equals(pattern(-25),"")
        
⬇️⬇️

"""Example (n = 5)：
54321
5432
543
54
5
"""
