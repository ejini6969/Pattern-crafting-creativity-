function pattern(n){
 return Array.from({length: Math.floor(n / 2)}, (_, i) => String(i * 2 + 2).repeat(i * 2 + 2)).join('\n')
}

const { assert } = require("chai")

