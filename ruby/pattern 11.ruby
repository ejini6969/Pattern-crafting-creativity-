# https://www.codewars.com/kata/5589ad588ee1db3f5e00005a

def pattern(n)
  if n < 1
    return ''
  elsif n == 1
    return "\n1\n"
  else
    side = (1...n).map{|x| "#{' ' * (n - 1)}#{(x % 10).to_s * n}#{' ' * (n - 1)}"}.join("\n")
    centre = (1...n).map{|x| (x % 10).to_s}.join
    "#{side}\n#{[centre, (n % 10).to_s * n, centre.reverse, "\n"].join * n}#{side.reverse}"
  end
end
  
describe("Basic Tests") do
  it("Should work for Positive Numbers") do
    expect(pattern(3)).to eq("  111  \n  222  \n1233321\n1233321\n1233321\n  222  \n  111  ")
    expect(pattern(5)).to eq("    11111    \n    22222    \n    33333    \n    44444    \n1234555554321\n1234555554321\n1234555554321\n1234555554321\n1234555554321\n    44444    \n    33333    \n    22222    \n    11111    ")
  end
  
  it("Should work for Negative Numbers") do
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
Example (n = 11)：
          11111111111          
          22222222222          
          33333333333          
          44444444444          
          55555555555          
          66666666666          
          77777777777          
          88888888888          
          99999999999          
          00000000000          
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
1234567890111111111110987654321
          00000000000          
          99999999999          
          88888888888          
          77777777777          
          66666666666          
          55555555555          
          44444444444          
          33333333333          
          22222222222          
          11111111111          
=end       
