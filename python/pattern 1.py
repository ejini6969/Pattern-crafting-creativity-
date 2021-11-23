def pattern(n): 
    return '\n'.join(str(i) * i for i in range(1, n + 1))
 
@test.describe("Fixed tests")
def fixed():
    @test.it("")
    def f():
        test.assert_equals(pattern(1),"1")
        test.assert_equals(pattern(2),"1\n22")
        test.assert_equals(pattern(5),"1\n22\n333\n4444\n55555")
        test.assert_equals(pattern(0),"")
        test.assert_equals(pattern(-25),"")
        
⬇️⬇️

"""
Example (n = 5)：
1
22
333
4444
55555
"""
