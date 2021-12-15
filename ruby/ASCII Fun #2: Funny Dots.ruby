# https://www.codewars.com/kata/59098c39d8d24d12b6000020

def dot(n,m)
  border = '+---' * n + '+'
  centre = '| o ' * n + '|' + "\n"
  return (border + "\n" + centre) * m + border
end
    
describe "Basic tests" do
  it "Some examples" do
    expect(dot(1, 1)).to eq("+---+\n| o |\n+---+")
    expect(dot(3, 2)).to eq("+---+---+---+\n| o | o | o |\n+---+---+---+\n| o | o | o |\n+---+---+---+")
  end
end

⬇️⬇️

=begin
Example (n = 3, m = 2)：
+---+---+---+
| o | o | o |
+---+---+---+
| o | o | o |
+---+---+---+
=end
