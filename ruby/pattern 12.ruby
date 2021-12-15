# https://www.codewars.com/kata/558ac25e552b51dbc60000c3

def pattern(n)
  if n < 1
    return ''
  end
  side = (1...n).map{|x| "#{' ' * (x - 1)}#{x % 10}#{' ' * (2 * n - 3 - 2 * (x - 1))}#{x % 10}#{' ' * (x - 1)}"}.join("\n")
  "#{side}\n#{' ' * (n - 1)}#{n % 10}#{' ' * (n - 1)}\n#{side.reverse}"
end
 
describe("Basic Tests") do
  it("Should work for Positive Numbers") do
    expect(pattern(3)).to eq("1   1\n 2 2 \n  3  \n 2 2 \n1   1")
    expect(pattern(15)).to eq("1                           1\n 2                         2 \n  3                       3  \n   4                     4   \n    5                   5    \n     6                 6     \n      7               7      \n       8             8       \n        9           9        \n         0         0         \n          1       1          \n           2     2           \n            3   3            \n             4 4             \n              5              \n             4 4             \n            3   3            \n           2     2           \n          1       1          \n         0         0         \n        9           9        \n       8             8       \n      7               7      \n     6                 6     \n    5                   5    \n   4                     4   \n  3                       3  \n 2                         2 \n1                           1")
  end

  it("Should work for Negative Numbers") do
    expect(pattern(-3)).to eq("")
    expect(pattern(-25)).to eq("")
  end

  it("Should work for Zero") do
    expect(pattern(0)).to eq("")
  end
end

⬇️⬇️

=begin
Example (n = 10):
  1                 1
   2               2 
    3             3  
     4           4   
      5         5    
       6       6     
        7     7      
         8   8       
          9 9        
           0         
          9 9        
         8   8       
        7     7      
       6       6     
      5         5    
     4           4   
    3             3  
   2               2 
  1                 1
=end
