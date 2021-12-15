# https://www.codewars.com/kata/5572f7c346eb58ae9c000047

def pattern(n)
  (1..n).map{|x| x.to_s * x}.join"\n"
end

describe("Simple Tests") do
  it "should work for simple tests" do 
    expect(pattern(1)).to eq("1")
    expect(pattern(2)).to eq("1\n22")
    expect(pattern(5)).to eq("1\n22\n333\n4444\n55555")
    expect(pattern(0)).to eq("")
    expect(pattern(-25)).to eq("")
  end
end

⬇️⬇️

=begin 
Example (n = 5)：
1
22
333
4444
55555
=end
