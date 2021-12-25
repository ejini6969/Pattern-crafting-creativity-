# https://www.codewars.com/kata/5503013e34137eeeaa001648

def diamond(n):
    if n < 0 or not n % 2:
        return None
    elif n == 1:
        return '*\n'
    len = n // 2
    side = '\n'.join(f"{' ' * (len - i)}{'*' * ((i + 1) * 2 - 1)}" for i in range(len)) + '\n'
    return side + '*' * n + '\n'.join(side.split('\n')[::-1]) + '\n'
  
expected =  " *\n"
expected += "***\n"
expected += " *\n"
test.assert_equals(diamond(1), "*\n")
test.assert_equals(diamond(2), None)
test.assert_equals(diamond(3), expected)
test.assert_equals(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
test.assert_equals(diamond(0), None)
test.assert_equals(diamond(-3), None)

⬇️⬇️

"""Example (n = 5)：
  *
 ***
*****
 ***
  *     
"""
