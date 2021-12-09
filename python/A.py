 // https://www.codewars.com/kata/55de3f83e92c3e521a00002a
 
def a(n):
    n = n - 1 if n % 2 else n
    return '' if n < 4 else "\n".join(' ' * (n - i) + 'A' + ('' if i == 1 else ' A' * (i - 1) if i == 2 or i == n / 2 + 1 else ' ' * (i * 2 - 3) + 'A') + ' ' * (n - i) for i in range(1, n + 1))

test.assert_equals(a(4), "   A   \n  A A  \n A A A \nA     A")
test.assert_equals(a(7), "     A     \n    A A    \n   A   A   \n  A A A A  \n A       A \nA         A")
test.assert_equals(a(0), "")

⬇️⬇️

""" Example (n = 4)：
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
"""
