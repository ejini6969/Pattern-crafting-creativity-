# https://www.codewars.com/kata/57819b700a8eb2d6b00002ab

def hollow_triangle(n):
    top = [f'{"_" * (n - 1)}#{"_" * (n - 1)}']
    middle = [f'{"_" * (n - 2 - i)}#{"_" * (i * 2 + 1)}#{"_" * (n - 2 - i)}' for i in range(n - 2)]
    bottom = [f'{"#" * (n * 2 - 1)}']
    return top + middle + bottom
 
test.assert_equals(hollow_triangle(2),['_#_', '###'])
test.assert_equals(hollow_triangle(4),['___#___', '__#_#__', '_#___#_', '#######'])
test.assert_equals(hollow_triangle(6),['_____#_____', '____#_#____', '___#___#___', '__#_____#__', '_#_______#_', '###########'])
test.assert_equals(hollow_triangle(1),['#'])
test.assert_equals(hollow_triangle(3),['__#__', '_#_#_', '#####'])
test.assert_equals(hollow_triangle(9),['________#________', '_______#_#_______', '______#___#______', '_____#_____#_____', '____#_______#____', '___#_________#___', '__#___________#__', '_#_____________#_', '#################'])

⬇️⬇️

"""Example (n = 6)：
['_____#_____', 
 '____#_#____', 
 '___#___#___', 
 '__#_____#__', 
 '_#_______#_', 
 '###########']
"""
