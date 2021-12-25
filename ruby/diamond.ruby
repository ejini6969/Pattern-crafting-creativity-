# https://www.codewars.com/kata/5503013e34137eeeaa001648

def diamond(n)
  if n < 0 || n.even?
    return nil
  elsif n == 1
    return "*\n"
  end
  len = n / 2
  side = (0...len).map{|x| "#{" " * (len - x)}#{"*" * ((x + 1) * 2 - 1)}"}.join("\n")
  "#{side}\n#{"*" * n}\n#{side.split("\n").reverse().join("\n")}\n"
end

Test.assert_equals(diamond(1), "*\n")
Test.assert_equals(diamond(3), " *\n***\n *\n")
Test.assert_equals(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
Test.assert_equals(diamond(0), nil)
Test.assert_equals(diamond(-3), nil)
Test.assert_equals(diamond(2), nil)

⬇️⬇️

=begin 
Example (n = 5)：
  *
 ***
*****
 ***
  *    
=end
