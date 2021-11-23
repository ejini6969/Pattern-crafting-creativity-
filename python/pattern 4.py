def pattern(n):
    return '\n'.join(''.join(str(i) for i in range(1 + j, n + 1)) for j in range(n))
        
@test.describe("Basic tests")
def basic():
    @test.it("")
    def f():
        test.assert_equals(pattern(1),"1")
        test.assert_equals(pattern(2),"12\n2")
        test.assert_equals(pattern(5),"12345\n2345\n345\n45\n5")
        test.assert_equals(pattern(0),"")
        test.assert_equals(pattern(-25),"")
        
⬇️⬇️

"""Example:
12345
2345
345
45
5
"""
