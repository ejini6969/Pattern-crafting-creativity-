# https://www.codewars.com/kata/59098c39d8d24d12b6000020

def dot(n,m):
    border = '+---' * n + '+'
    centre = '| o ' * n + "|\n"
    return (border + "\n" + centre) * m + border
    
test.describe("Basic tests")
test.assert_equals(dot(1,1), "+---+\n| o |\n+---+")
test.assert_equals(dot(3,2), "+---+---+---+\n| o | o | o |\n+---+---+---+\n| o | o | o |\n+---+---+---+")

⬇️⬇️

"""Example (n = 3, m = 2)：
+---+---+---+
| o | o | o |
+---+---+---+
| o | o | o |
+---+---+---+
"""
