// https://www.codewars.com/kata/5970fc389f4a1ce8de000061/discuss

function drawCube(n) {
  if(n == 0) return ""
  if(n == 1) return "#\n"
  if(n == 2) return " ##\n###\n##\n"
  let top = Array.from({length: n - 1}, (_, i) => `${" ".repeat(n - 1 - i)}#${!i ? '#'.repeat(n - 3) : '*'.repeat(n - 2)}#${"*".repeat(Math.max(i - 1, 0))}#`)
  let middle = Array.from({length:n - 1}, (_, i) => `#${(!i ? '#': ' ').repeat(n - 2)}#${'*'.repeat(n - 2 - i)}#`)
  let bottom = ["#".repeat(n)]
  return [top, middle, bottom].map(x => x.join`\n`).join`\n` + '\n'
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    let answers = [
    /* 0 */ '',
    /* 1 */ '#\n',
    /* 2 */ ' ##\n###\n##\n',
    /* 3 */ '  ###\n #*##\n###*#\n# ##\n###\n',
    /* 4 */ '   ####\n  #**##\n #**#*#\n####**#\n#  #*#\n#  ##\n####\n',
    /* 5 */ '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#   #**#\n#   #*#\n#   ##\n#####\n',
    /* 6 */ '     ######\n    #****##\n   #****#*#\n  #****#**#\n #****#***#\n######****#\n#    #***#\n#    #**#\n#    #*#\n#    ##\n######\n',
    /* 7 */ '      #######\n     #*****##\n    #*****#*#\n   #*****#**#\n  #*****#***#\n #*****#****#\n#######*****#\n#     #****#\n#     #***#\n#     #**#\n#     #*#\n#     ##\n#######\n',
    /* 8 */ '       ########\n      #******##\n     #******#*#\n    #******#**#\n   #******#***#\n  #******#****#\n #******#*****#\n########******#\n#      #*****#\n#      #****#\n#      #***#\n#      #**#\n#      #*#\n#      ##\n########\n',
    /* 9 */ '        #########\n       #*******##\n      #*******#*#\n     #*******#**#\n    #*******#***#\n   #*******#****#\n  #*******#*****#\n #*******#******#\n#########*******#\n#       #******#\n#       #*****#\n#       #****#\n#       #***#\n#       #**#\n#       #*#\n#       ##\n#########\n',
    /*10 */ '         ##########\n        #********##\n       #********#*#\n      #********#**#\n     #********#***#\n    #********#****#\n   #********#*****#\n  #********#******#\n #********#*******#\n##########********#\n#        #*******#\n#        #******#\n#        #*****#\n#        #****#\n#        #***#\n#        #**#\n#        #*#\n#        ##\n##########\n',
    ];
    for (let i = 0; i < answers.length; ++i) {
      let answer = drawCube(i);
      let expected = answers[i];
      assert.strictEqual(answer, expected, `drawCube(${i}) should be:\n${expected}\nInstead got:\n${answer}`);
    }
  });
});

/* Example (n=4)
   ####\n
  #**##\n
 #**#*#\n
####**#\n
#  #*#\n
#  ##\n
####\n
*/
