// https://www.codewars.com/kata/5827e2efc983ca6f230000e0

function pattern(rows,columns,str){
 const boarder = '+---'.repeat(columns) + '+'
 str = str.padEnd(rows * columns, ' ')
 return `${boarder}\n` + Array.from({length: str.length / columns}, (_, i) => str.slice(i * columns, i * columns + columns)).map(x => x.replace(/./g, a => `| ${a} `) + '|').join(`\n${boarder}\n`) + `\n${boarder}`
}

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

var result=
`+---+---+---+---+
| H | e | l | l |
+---+---+---+---+
| o |   | W | o |
+---+---+---+---+
| r | l | d | ! |
+---+---+---+---+
|   |   |   |   |
+---+---+---+---+`
Test.assertEquals(pattern(4,4,"Hello World!") , result) 

var result=
`+---+---+---+
| c | o | d |
+---+---+---+
| e | w | a |
+---+---+---+
| r | s |   |
+---+---+---+`
Test.assertEquals(pattern(3,3,"codewars") , result) 

var result=
`+---+---+---+---+
| N | i | c | e |
+---+---+---+---+
|   | p | a | t |
+---+---+---+---+
| t | e | r | n |
+---+---+---+---+`
Test.assertEquals(pattern(3,4,"Nice pattern") , result) 

var result=
`+---+---+---+
| N | i | c |
+---+---+---+
| e |   | p |
+---+---+---+
| a | t | t |
+---+---+---+
| e | r | n |
+---+---+---+`
Test.assertEquals(pattern(4,3,"Nice pattern") , result) 

})})
