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

/* Example:
22
4444
666666
88888888
*/        
