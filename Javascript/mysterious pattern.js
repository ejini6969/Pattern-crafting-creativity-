// https://www.codewars.com/kata/580ec64394291d946b0002a1

function fib(n){
  let lst = [1, 1]
  while (lst.length < n){
    lst.push(lst[lst.length - 1] + lst[lst.length - 2])
  }
  return lst
}

function mysteriousPattern(m,n){
  if(m == 1) return "o"
 const arr = fib(m).map(x => x % n)
 return Array.from({length: Math.max(...arr) - Math.min(...arr) + 1}, (_, i) => i + Math.min(...arr)).map(y => arr.map(z => z == y ? "o" : " ").join``.replace(/\s+$/g, "")).join`\n`
}

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(mysteriousPattern(5,5) , 
`    o
oo
  o
   o`)

Test.assertSimilar(mysteriousPattern(12,4) , 
`     o     o
oo  o oo  o
  o     o
   o     o`)

})})

⬇️⬇️

/* Example (m = 9, n = 3)：
Fibonacci sequence: 1 1 2 3 5 8 13 21 34
               ---> 1%3 1%3 2%3 3%3 5%3 8%3 13%3 21%3 34%3
               --->  1   1   2   0   2   2    1    0    1
               
112022101
|||||||||
   o   o
oo    o o
  o oo
  
*/
