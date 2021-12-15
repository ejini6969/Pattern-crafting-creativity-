# https://www.codewars.com/kata/557592fcdfc2220bed000042

def pattern(n)
  lst = (1..n).to_a
  lst.map.with_index{|x, i| lst.rotate(i).join}.join("\n")
end

describe("Basic tests") do
  it "should work for basic tests" do
    expect(pattern(7)).to eq("1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456")
    expect(pattern(1)).to eq("1")
    expect(pattern(4)).to eq("1234\n2341\n3412\n4123")
    expect(pattern(0)).to eq("")
    expect(pattern(-25)).to eq("")
  end
end
        
⬇️⬇️

=begin
Example (n = 9):
123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678
=end    
