# https://www.codewars.com/kata/5574940eae1cf7d520000076

def pattern(n)
  (1..n).step(2).map{|x| x.to_s * x}.join("\n")
end
  
describe("Basic tests") do
  it "should work for basic tests" do
    expect(pattern(4)).to eq("1\n333")
    expect(pattern(1)).to eq("1")
    expect(pattern(5)).to eq("1\n333\n55555")
    expect(pattern(5)).to eq("1\n333\n55555")
    expect(pattern(0)).to eq("")
    expect(pattern(-25)).to eq("")
  end
end

⬇️⬇️

=begin
Example (n = 9):
1
333
55555
7777777
999999999
=end     
