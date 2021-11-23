def pattern(rows, columns, s):
    boarder = '+---' * columns + '+'
    s = s.ljust(rows * columns, " ")
    return boarder + "\n" + ("\n" + boarder + "\n").join("| " + " | ".join(s[i * columns: i * columns + columns]) + " |" for i in range(len(s) // columns)) + "\n" + boarde
  
result = """\
+---+---+---+---+
| H | e | l | l |
+---+---+---+---+
| o |   | W | o |
+---+---+---+---+
| r | l | d | ! |
+---+---+---+---+
|   |   |   |   |
+---+---+---+---+"""
test.assert_equals(pattern(4, 4, "Hello World!"), result)

result = """\
+---+---+---+
| c | o | d |
+---+---+---+
| e | w | a |
+---+---+---+
| r | s |   |
+---+---+---+"""
test.assert_equals(pattern(3, 3, "codewars"), result)

result = """\
+---+---+---+---+
| N | i | c | e |
+---+---+---+---+
|   | p | a | t |
+---+---+---+---+
| t | e | r | n |
+---+---+---+---+"""
test.assert_equals(pattern(3, 4, "Nice pattern"), result)

result = """\
+---+---+---+
| N | i | c |
+---+---+---+
| e |   | p |
+---+---+---+
| a | t | t |
+---+---+---+
| e | r | n |
+---+---+---+"""
test.assert_equals(pattern(4, 3, "Nice pattern"), result)

