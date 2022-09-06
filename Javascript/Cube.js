function drawCube(n) {
  if(n == 0) return ""
  if(n == 1) return "#\n"
  if(n == 2) return " ##\n###\n##\n"
  let top = Array.from({length: n - 1}, (_, i) => `${" ".repeat(n - 1 - i)}#${!i ? '#'.repeat(n - 3) : '*'.repeat(n - 2)}#${"*".repeat(Math.max(i - 1, 0))}#`)
  let middle = Array.from({length:n - 1}, (_, i) => `#${(!i ? '#': ' ').repeat(n - 2)}#${'*'.repeat(n - 2 - i)}#`)
  let bottom = ["#".repeat(n)]
  return [top, middle, bottom].map(x => x.join`\n`).join`\n` + '\n'
}
