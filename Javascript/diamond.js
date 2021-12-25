// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
  if (n < 0 || n % 2 == 0) return null
  else if(n == 1) return '*\n'
  let len = Math.floor(n / 2)
  let side = Array.from({length: len}, (_, i) => `${' '.repeat(len - i)}${'*'.repeat((i + 1) * 2 - 1)}`).join('\n')
  return [side, '*'.repeat(n), side.split`\n`.reverse().join`\n`].join`\n` + '\n' 
}

describe( "diamond()", function(){

  Test.assertEquals(diamond(1), "*\n")
  Test.assertEquals(diamond(3), " *\n***\n *\n")
  Test.assertEquals(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
  Test.assertEquals(diamond(2), null)
  Test.assertEquals(diamond(-3), null)
  Test.assertEquals(diamond(0), null)
});

⬇️⬇️

/* Example (n = 5)：
  *
 ***
*****
 ***
  *     
*/
