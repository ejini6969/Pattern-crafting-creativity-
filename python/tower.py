def tower_builder(n_floors):
    return [' ' * (n_floors - i - 1) + '*' * (i * 2 + 1) + ' ' * (n_floors - i - 1) for i in range(n_floors)]
  
import codewars_test as test
from solution import tower_builder

@test.describe("Build Tower")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(tower_builder(1), ['*', ])
        test.assert_equals(tower_builder(2), [' * ', '***'])
        test.assert_equals(tower_builder(3), ['  *  ', ' *** ', '*****'])
        
⬇️⬇️

"""Example (n_floors = 3)：
[
  '  *  ', 
  ' *** ', 
  '*****'
]
"""
