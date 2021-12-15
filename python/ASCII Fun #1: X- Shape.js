# https://www.codewars.com/kata/5906436806d25f846400009b

def x(n):
    return '\n'.join(''.join('□■'[i == j or i == n - j - 1] for j in range(n)) for i in range(n))
 
test.describe("Default test cases")
test.it("Should work for test cases")
test.assert_equals(x(3), "■□■\n□■□\n■□■", "Should look like this: \n■□■\n□■□\n■□■")
test.assert_equals(x(7), "■□□□□□■\n□■□□□■□\n□□■□■□□\n□□□■□□□\n□□■□■□□\n□■□□□■□\n■□□□□□■", "Should look like this: \n■□□□□□■\n□■□□□■□\n□□■□■□□\n□□□■□□□\n□□■□■□□\n□■□□□■□\n■□□□□□■")

⬇️⬇️

"""Example (n = 3)：
■□■
□■□
■□■
"""
