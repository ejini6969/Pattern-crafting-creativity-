# https://www.codewars.com/kata/5939b753942a2700860000df
  
def build_a_wall(x = 0, y = 0):
    if any(not isinstance(n, int) or n < 1 for n in (x, y)): return None
    if x * y > 10000:  return "Naah, too much...here's my resignation."
    return "\n".join([f'■{"|■■" * (y - 1)}|■' if i % 2 else "|".join(["■■"] * y) for i in range(x)][::-1])
  
test.describe('Basic tests')
test.it('Should return wall as string')
test.assert_equals(build_a_wall(4,5),'■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■')
test.assert_equals(build_a_wall(10,7),'■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■')
test.it('Should return None')
test.assert_equals(build_a_wall(),None)
test.assert_equals(build_a_wall('eight',[3]),None)
test.assert_equals(build_a_wall(12,-4),None)
test.assert_equals(build_a_wall(0,9),None)
test.it('Should return "Naah, too much...here\'s my resignation."')
test.assert_equals(build_a_wall(123,987),"Naah, too much...here\'s my resignation.")

⬇️⬇️
""" Example (x = 10, y = 7)：
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
"""
 
