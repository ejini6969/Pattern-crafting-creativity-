# https://www.codewars.com/kata/5970fc389f4a1ce8de000061

def draw_cube n
  return "" if n.zero?
  return "#\n" if n == 1
  return " ##\n###\n##\n" if n == 2
  top = (0...n - 1).map{|x|"#{' ' * (n - x - 1)}##{x.zero? ? '#' * (n - 3) : '*' * (n - 2)}##{'*' * [x - 1, 0].max}#"}
  middle = (0...n - 1).map{|x|"##{(x.zero? ? '#' : ' ') * (n - 2)}##{'*' * (n - 2 - x)}#"}
  bottom = ['#' * n]
  [top, middle, bottom].map{|x| x.join("\n")}.join("\n")+"\n"
end
