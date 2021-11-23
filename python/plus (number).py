def pattern(n):
    side = [" " * (n - 1) + str(i % 10) for i in range(1, n)]
    centre = [str(i % 10) for i in range(1, n)]
    return "" if not n else "\n".join(side) + "\n" + ''.join(centre) + str(n % 10) + ''.join(centre[::-1]) + "\n" + '\n'.join(side[::-1]) + "\n"

import codewars_test as test
from solution import pattern

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Tests")
    def basic_tests():
        test.assert_equals(pattern(3),"  1\n  2\n12321\n  2\n  1\n")
        test.assert_equals(pattern(6),"     1\n     2\n     3\n     4\n     5\n12345654321\n     5\n     4\n     3\n     2\n     1\n")
        test.assert_equals(pattern(10),"         1\n         2\n         3\n         4\n         5\n         6\n         7\n         8\n         9\n1234567890987654321\n         9\n         8\n         7\n         6\n         5\n         4\n         3\n         2\n         1\n")
        test.assert_equals(pattern(21),"                    1\n                    2\n                    3\n                    4\n                    5\n                    6\n                    7\n                    8\n                    9\n                    0\n                    1\n                    2\n                    3\n                    4\n                    5\n                    6\n                    7\n                    8\n                    9\n                    0\n12345678901234567890109876543210987654321\n                    0\n                    9\n                    8\n                    7\n                    6\n                    5\n                    4\n                    3\n                    2\n                    1\n                    0\n                    9\n                    8\n                    7\n                    6\n                    5\n                    4\n                    3\n                    2\n                    1\n")

⬇️⬇️

/* Example: (n = 12)
             1
             2
             3
             4
             5
             6
             7
             8
             9
             0
             1
  12345678901210987654321
             1
             0
             9
             8
             7
             6
             5
             4
             3
             2
             1
*/
