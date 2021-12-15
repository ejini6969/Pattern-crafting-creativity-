# https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

def draw_stairs(n):
    return '\n'.join(' ' * i + 'I' for i in range(n))

stairs = '''I\n I\n  I'''
test.assert_equals(draw_stairs(3), stairs)

⬇️⬇️

"""Example (n = 7)：
I
 I
  I
   I
    I
     I
      I
"""
