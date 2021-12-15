# https://www.codewars.com/kata/564f3d49a06556d27c000077

def pattern(n): 
    return "\n".join(' ' * (i - 1) + f' {i % 10}' * (n - i + 1) for i in range(1, n + 1))
 
import codewars_test as test
from solution import pattern

@test.describe("Example")
def test_group():
    @test.it("test case")
    def test_case():
        test.assert_equals(pattern(7)," 1 1 1 1 1 1 1\n  2 2 2 2 2 2\n   3 3 3 3 3\n    4 4 4 4\n     5 5 5\n      6 6\n       7")
        test.assert_equals(pattern(12)," 1 1 1 1 1 1 1 1 1 1 1 1\n  2 2 2 2 2 2 2 2 2 2 2\n   3 3 3 3 3 3 3 3 3 3\n    4 4 4 4 4 4 4 4 4\n     5 5 5 5 5 5 5 5\n      6 6 6 6 6 6 6\n       7 7 7 7 7 7\n        8 8 8 8 8\n         9 9 9 9\n          0 0 0\n           1 1\n            2")
        test.assert_equals(pattern(21)," 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n  2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2\n   3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3\n    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4\n     5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5\n      6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6\n       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7\n        8 8 8 8 8 8 8 8 8 8 8 8 8 8\n         9 9 9 9 9 9 9 9 9 9 9 9 9\n          0 0 0 0 0 0 0 0 0 0 0 0\n           1 1 1 1 1 1 1 1 1 1 1\n            2 2 2 2 2 2 2 2 2 2\n             3 3 3 3 3 3 3 3 3\n              4 4 4 4 4 4 4 4\n               5 5 5 5 5 5 5\n                6 6 6 6 6 6\n                 7 7 7 7 7\n                  8 8 8 8\n                   9 9 9\n                    0 0\n                     1")
        
⬇️⬇️

"""Example (n = 16)：
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
  3 3 3 3 3 3 3 3 3 3 3 3 3 3
   4 4 4 4 4 4 4 4 4 4 4 4 4
    5 5 5 5 5 5 5 5 5 5 5 5
     6 6 6 6 6 6 6 6 6 6 6
      7 7 7 7 7 7 7 7 7 7
       8 8 8 8 8 8 8 8 8
        9 9 9 9 9 9 9 9
         0 0 0 0 0 0 0
          1 1 1 1 1 1
           2 2 2 2 2
            3 3 3 3
             4 4 4
              5 5
               6
"""
