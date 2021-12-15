# https://www.codewars.com/kata/52755006cc238fcae70000ed

def christmas_tree(height):
    return "\n".join(" " * (height - i - 1) + "*" * (i * 2 + 1) + " " * (height - i - 1) for i in range(height))

import codewars_test as test
from solution import christmas_tree

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Tests")
    def basic_tests():
        test.assert_equals(christmas_tree(0), '')
        test.assert_equals(christmas_tree(1), '*')
        test.assert_equals(christmas_tree(2), ' * \n***')
        test.assert_equals(christmas_tree(3), '  *  \n *** \n*****')
        test.assert_equals(christmas_tree(4), '   *   \n  ***  \n ***** \n*******')
        test.assert_equals(christmas_tree(5), '    *    \n   ***   \n  *****  \n ******* \n*********')
        test.assert_equals(christmas_tree(6), '     *     \n    ***    \n   *****   \n  *******  \n ********* \n***********')
        test.assert_equals(christmas_tree(7), '      *      \n     ***     \n    *****    \n   *******   \n  *********  \n *********** \n*************')
        test.assert_equals(christmas_tree(8), '       *       \n      ***      \n     *****     \n    *******    \n   *********   \n  ***********  \n ************* \n***************')
        test.assert_equals(christmas_tree(9), '        *        \n       ***       \n      *****      \n     *******     \n    *********    \n   ***********   \n  *************  \n *************** \n*****************')
        test.assert_equals(christmas_tree(10), '         *         \n        ***        \n       *****       \n      *******      \n     *********     \n    ***********    \n   *************   \n  ***************  \n ***************** \n*******************')
        
⬇️⬇️

"""Example (height = 5):
    *    
   ***   
  *****  
 ******* 
*********
"""
