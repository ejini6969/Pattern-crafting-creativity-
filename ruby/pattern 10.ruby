# https://www.codewars.com/kata/5581a7651185fe13190000ee

def pattern(n)
  (1..n).map{|x| ' ' * (n - x) + (1..n).map{|x| (x % 10).to_s}.join + ' ' * (x - 1)}.join("\n")
end

describe("Basic Tests") do
  it("Should work for +ve Numbers") do
    expect(pattern(3)).to eq("  123\n 123 \n123  ")
    expect(pattern(5)).to eq("    12345\n   12345 \n  12345  \n 12345   \n12345    ")
    expect(pattern(8)).to eq("       12345678\n      12345678 \n     12345678  \n    12345678   \n   12345678    \n  12345678     \n 12345678      \n12345678       ")
  end
  it("Should work for -ve Numbers") do
    expect(pattern(-3)).to eq("")
    expect(pattern(-11)).to eq("")
    expect(pattern(-25)).to eq("")
  end
  it("Should work for Zero") do
    expect(pattern(0)).to eq("")
  end
end
        
⬇️⬇️

=begin
Example (n = 10):
         1234567890
        1234567890 
       1234567890  
      1234567890   
     1234567890    
    1234567890     
   1234567890      
  1234567890       
 1234567890        
1234567890       
=end     
