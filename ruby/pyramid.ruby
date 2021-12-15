# https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b

def pyramid(n)
  n == 1 ? "/\\\n" : (0...n - 1).map{|x| "#{' ' * (n - x - 1)}/#{' '  * (x * 2)}\\"}.join("\n") + "\n/#{'_' * (n * 2 - 2)}\\\n"
end
  
describe "Basic tests" do
  Test.assert_equals(pyramid(1),   "/\\\n")
  Test.assert_equals(pyramid(2),   " /\\\n/__\\\n")
  Test.assert_equals(pyramid(4),   "   /\\\n  /  \\\n /    \\\n/______\\\n")
  Test.assert_equals(pyramid(6),   "     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n")
  Test.assert_equals(pyramid(10),  "         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n")
end

⬇️⬇️

=begin
Example (n = 6)：
     /\
    /  \
   /    \
  /      \
 /        \
/__________\   
=end
