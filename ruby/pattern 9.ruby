# https://www.codewars.com/kata/5579e6a5256bac65e4000060

def pattern(n)
  if n < 1
    return ''
  elsif n == 1
    return "1"
  else
    side = (1...n).map{|x| "#{' ' * (n - x)}#{(1...x).map{|y| y % 10}.join}#{x % 10}#{(1...x).map{|y| y % 10}.join.reverse}#{' ' * (n - x)}"}.join("\n")
    centre = (1..n).map{|x| x % 10}.join + (n - 1).downto(1).map{|x| x% 10}.join
    "#{side}\n#{centre}\n#{side.reverse}"
  end
end

describe("Basic tests") do
  it "should work for random tests" do
    expect(pattern(1)).to eq("1")
    expect(pattern(3)).to eq("  1  \n 121 \n12321\n 121 \n  1  ")
    expect(pattern(7)).to eq("      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321\n 12345654321 \n  123454321  \n   1234321   \n    12321    \n     121     \n      1      ")
    expect(pattern(0)).to eq("")
    expect(pattern(-25)).to eq("")
  end
end 
        
⬇️⬇️

=begin
Example (n = 15):
              1              
             121             
            12321            
           1234321           
          123454321          
         12345654321         
        1234567654321        
       123456787654321       
      12345678987654321      
     1234567890987654321     
    123456789010987654321    
   12345678901210987654321   
  1234567890123210987654321  
 123456789012343210987654321 
12345678901234543210987654321
 123456789012343210987654321 
  1234567890123210987654321  
   12345678901210987654321   
    123456789010987654321    
     1234567890987654321     
      12345678987654321      
       123456787654321       
        1234567654321        
         12345654321         
          123454321          
           1234321           
            12321            
             121             
              1              
=end
