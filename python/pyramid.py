def pyramid(n):
    return "/\\\n" if n == 1 else "\n".join(f"{' ' * (n - i - 1)}/{' ' * (i * 2)}\\" for i in range(n - 1)) + f"\n/{'_' * (n * 2 - 2)}\\\n"
  
test.describe("Pyramids")
test.it("Return the pyramid")
test.assert_equals(pyramid(4), "   /\\\n  /  \\\n /    \\\n/______\\\n")

⬇️⬇️

"""Example (n = 6)：
     /\
    /  \
   /    \
  /      \
 /        \
/__________\   
"""
