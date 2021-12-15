# https://www.codewars.com/kata/563cb92e0996a4ac0b000042

def pattern(n)
  side = (1...n).map{|x| " " * (n - 1) + (x % 10).to_s}
  centre = (1...n).map{|x| x % 10}
  n == 0 ? "" : "#{side.join("\n")}\n#{centre.join + (n % 10).to_s + centre.reverse.join}\n#{side.reverse.join("\n")}\n"
end
  
describe "Fixed tests" do
  it "should pass fixed tests" do
    Test.assert_equals(pattern(3),"  1\n  2\n12321\n  2\n  1\n")
    Test.assert_equals(pattern(6),"     1\n     2\n     3\n     4\n     5\n12345654321\n     5\n     4\n     3\n     2\n     1\n")
    Test.assert_equals(pattern(10),"         1\n         2\n         3\n         4\n         5\n         6\n         7\n         8\n         9\n1234567890987654321\n         9\n         8\n         7\n         6\n         5\n         4\n         3\n         2\n         1\n")
    Test.assert_equals(pattern(21),"                    1\n                    2\n                    3\n                    4\n                    5\n                    6\n                    7\n                    8\n                    9\n                    0\n                    1\n                    2\n                    3\n                    4\n                    5\n                    6\n                    7\n                    8\n                    9\n                    0\n12345678901234567890109876543210987654321\n                    0\n                    9\n                    8\n                    7\n                    6\n                    5\n                    4\n                    3\n                    2\n                    1\n                    0\n                    9\n                    8\n                    7\n                    6\n                    5\n                    4\n                    3\n                    2\n                    1\n")
  end
end 

⬇️⬇️

=begin
Example: (n = 12)
             1
             2
             3
             4
             5
             6
             7
             8
             9
             0
             1
  12345678901210987654321
             1
             0
             9
             8
             7
             6
             5
             4
             3
             2
             1
=end
