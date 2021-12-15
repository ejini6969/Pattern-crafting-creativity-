# https://www.codewars.com/kata/55736129f78b30311300010f

def pattern(n)
  (1..n).map{|x| (x..n).to_a.join}.join("\n")
end

describe("Basic tests") do
  it "should work for basic tests" do
    expect(pattern(1)).to eq("1")
    expect(pattern(2)).to eq("12\n2")
    expect(pattern(5)).to eq("12345\n2345\n345\n45\n5")
    expect(pattern(0)).to eq("")
    expect(pattern(-25)).to eq("")
  end
end
  
⬇️⬇️

=begin
Example (n = 5):
12345
2345
345
45
5
=end 
