# https://www.codewars.com/kata/5906436806d25f846400009b

def x(n)
  return (0...n).map.with_index{|_, i| (0...n).map.with_index{|_, j| i == j || i == n - j - 1 ? 'o' : ' '}.join}.join("\n")
end
 
describe "Sample tests" do
  it "Some examples" do
    expect(x(3)).to eq("o o\n o \no o")
    expect(x(5)).to eq("o   o\n o o \n  o  \n o o \no   o")
  end
end

⬇️⬇️

=begin
Example (n = 3)：
■□■
□■□
■□■
=end
