# https://www.codewars.com/kata/55749101ae1cf7673800003e

def pattern(n)
 (2..n).step(2).map{|x| x.to_s * x}.join("\n")
end
  
describe("Basic tests") do
  it "should work for basic tests" do 
    expect(pattern(2)).to eq("22")
    expect(pattern(1)).to eq("")
    expect(pattern(5)).to eq("22\n4444")
    expect(pattern(6)).to eq("22\n4444\n666666")
    expect(pattern(0)).to eq("")
    expect(pattern(-25)).to eq("")
  end
end

⬇️⬇️

=begin
Example (n = 8):
22
4444
666666
88888888
=end       
