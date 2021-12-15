# https://www.codewars.com/kata/57819b700a8eb2d6b00002ab

def hollow_triangle(n)
   if n == 1
     return ["#"]
   end
   top = ["#{"_" * (n - 1)}\##{"_" * (n - 1)}"]
   middle = (0...n - 2).map{|i| "#{"_" * (n - 2 - i)}\##{"_" * (i * 2 + 1)}\##{"_" * (n - 2 - i)}"}
   bottom = ["#{"#" * (n * 2 - 1)}"]
   top + middle + bottom    
end
 
describe("Basic tests") do
Test.assert_equals(hollow_triangle(2),['_#_', '###'])
Test.assert_equals(hollow_triangle(4),['___#___', '__#_#__', '_#___#_', '#######'])
Test.assert_equals(hollow_triangle(6),['_____#_____', '____#_#____', '___#___#___', '__#_____#__', '_#_______#_', '###########'])
Test.assert_equals(hollow_triangle(1),['#'])
Test.assert_equals(hollow_triangle(3),['__#__', '_#_#_', '#####'])
end

⬇️⬇️

=begin
Example (n = 6)：
['_____#_____', 
 '____#_#____', 
 '___#___#___', 
 '__#_____#__', 
 '_#_______#_', 
 '###########']
=end
