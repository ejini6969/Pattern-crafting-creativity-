# https://www.codewars.com/kata/558ac25e552b51dbc60000c3

def pattern(n):
    if n < 1:
        return ''
    else:
        side = '\n'.join([f"{' ' * (i - 1)}{i % 10}{' ' * (2 * n - 3 - 2 * (i - 1))}{i % 10}{' ' * (i - 1)}" for i in range(1, n)])
        return f"{side}\n{' ' * (n - 1)}{n % 10}{' ' * (n - 1)}\n{side[::-1]}"
 
@test.describe("Basic tests")
def basic():
    @test.it("Should work for Positive Numbers")
    def f():
        test.assert_equals(pattern(3),"1   1\n 2 2 \n  3  \n 2 2 \n1   1")
        test.assert_equals(pattern(15),"1                           1\n 2                         2 \n  3                       3  \n   4                     4   \n    5                   5    \n     6                 6     \n      7               7      \n       8             8       \n        9           9        \n         0         0         \n          1       1          \n           2     2           \n            3   3            \n             4 4             \n              5              \n             4 4             \n            3   3            \n           2     2           \n          1       1          \n         0         0         \n        9           9        \n       8             8       \n      7               7      \n     6                 6     \n    5                   5    \n   4                     4   \n  3                       3  \n 2                         2 \n1                           1")
        
 ⬇️⬇️

""" Example (n = 10):
  1                 1
   2               2 
    3             3  
     4           4   
      5         5    
       6       6     
        7     7      
         8   8       
          9 9        
           0         
          9 9        
         8   8       
        7     7      
       6       6     
      5         5    
     4           4   
    3             3  
   2               2 
  1                 1
"""
