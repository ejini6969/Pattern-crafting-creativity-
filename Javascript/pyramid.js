// https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b

function pyramid(n){
  return n == 1? '/\\\n': Array.from({length: n - 1}, (_, i) => `${' '.repeat(n - i - 1)}/${' '.repeat(i * 2)}\\`).join('\n') + `\n/${'_'.repeat(n * 2 - 2)}\\\n`
}

describe("Basic tests",() =>{
  Test.assertEquals(pyramid(1),   "/\\\n");
  Test.assertEquals(pyramid(2),   " /\\\n/__\\\n");
  Test.assertEquals(pyramid(4),   "   /\\\n  /  \\\n /    \\\n/______\\\n");
  Test.assertEquals(pyramid(6),   "     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n");
  Test.assertEquals(pyramid(10),  "         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n");
})

⬇️⬇️

/* Example (n = 6)：
     /\
    /  \
   /    \
  /      \
 /        \
/__________\   
*/
