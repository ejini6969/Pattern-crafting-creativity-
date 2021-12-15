# https://www.codewars.com/kata/55733d3ef7c43f8b0700007c

def pattern(n)
  (0...n).map{|x| (0...n - x).map{|y| n - y}.join}.join("\n")
end

describe("Basic tests") do
  it "should work for basic tests" do 
    expect(pattern(1)).to eq("1")
    expect(pattern(2)).to eq("21\n2")
    expect(pattern(5)).to eq("54321\n5432\n543\n54\n5")
    expect(pattern(0)).to eq("")
    expect(pattern(-25)).to eq("")
  end
end

⬇️⬇️

=begin
Example (n = 5)：
54321
5432
543
54
5
=end
