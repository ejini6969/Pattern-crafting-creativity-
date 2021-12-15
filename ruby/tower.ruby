# https://www.codewars.com/kata/576757b1df89ecf5bd00073b

def towerBuilder(n_floors)
  (1..n_floors).map{|x| ' ' * (n_floors - x) + '*' * (2 * x - 1) + ' ' * (n_floors - x)}
end
  
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(towerBuilder(1), ['*'], "1 floor")
    Test.assert_equals(towerBuilder(2), [' * ', '***'], "2 floors")
    Test.assert_equals(towerBuilder(3), ['  *  ', ' *** ', '*****'], "3 floors")
  end
end
        
⬇️⬇️

=begin
Example (n_floors = 3)：
[
  '  *  ', 
  ' *** ', 
  '*****'
]
=end
