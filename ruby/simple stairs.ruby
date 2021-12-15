# https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

def draw_stairs(n)
  (1..n).map{|x| ' ' * (x - 1) + 'I'}.join("\n")
end

describe("Fixed Tests") do
  it "should pass basic tests" do
    expect(draw_stairs(1)).to eq("I")
    expect(draw_stairs(3)).to eq("I\n I\n  I")
    expect(draw_stairs(5)).to eq("I\n I\n  I\n   I\n    I")
  end
end

⬇️⬇️

=begin
Example (n = 7)：
I
 I
  I
   I
    I
     I
=end    
