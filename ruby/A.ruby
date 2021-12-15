# https://www.codewars.com/kata/55de3f83e92c3e521a00002a
 
def a(n)
  n = n.odd? ? n - 1 : n
  n < 4 ? '' : (1..n).map{|x| ' ' * (n - x) + 'A' + (x == 1 ? '' : x == 2 || x == n / 2 + 1 ? ' A' * (x - 1) : ' ' * (x * 2 - 3) + 'A') + ' ' * (n - x)}.join("\n")
end

Test.assert_equals(a(4), "   A   \n  A A  \n A A A \nA     A")

⬇️⬇️

=begin
Example (n = 4)：
   A   
  A A  
 A A A 
A     A
Example (n = 7):
     A     
    A A
   A   A   
  A A A A  
 A       A 
A         A
Example (n = 12):
           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A
=end
