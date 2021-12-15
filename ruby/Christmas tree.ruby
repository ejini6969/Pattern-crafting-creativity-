# https://www.codewars.com/kata/52755006cc238fcae70000ed

def christmas_tree height
 (1..height).map{|x| ' ' * (height - x) + '*' * ((x - 1) * 2 + 1) + ' ' * (height - x)}.join("\n")
end

describe "Christmas tree" do
  it "should return correct christmas tree for height 1" do
    Test.assert_equals(christmas_tree(1), "*");
  end
  it "should return correct christmas tree for height 2" do
    Test.assert_equals(christmas_tree(2), " * \n***");
  end
  it "should return correct christmas tree for height 3" do
    Test.assert_equals(christmas_tree(3), "  *  \n *** \n*****");
  end
  it "should return correct christmas tree for height 4" do
    Test.assert_equals(christmas_tree(4), "   *   \n  ***  \n ***** \n*******");
  end
  it "should return correct christmas tree for height 5" do
    Test.assert_equals(christmas_tree(5), "    *    \n   ***   \n  *****  \n ******* \n*********");
  end
  it "should return correct christmas tree for height 6" do
    Test.assert_equals(christmas_tree(6), "     *     \n    ***    \n   *****   \n  *******  \n ********* \n***********");
  end
  it "should return correct christmas tree for height 7" do
    Test.assert_equals(christmas_tree(7), "      *      \n     ***     \n    *****    \n   *******   \n  *********  \n *********** \n*************");
  end
  it "should return correct christmas tree for height 8" do
    Test.assert_equals(christmas_tree(8), "       *       \n      ***      \n     *****     \n    *******    \n   *********   \n  ***********  \n ************* \n***************");
  end
  it "should return correct christmas tree for height 9" do
    Test.assert_equals(christmas_tree(9), "        *        \n       ***       \n      *****      \n     *******     \n    *********    \n   ***********   \n  *************  \n *************** \n*****************");
  end
  it "should return correct christmas tree for height 10" do
    Test.assert_equals(christmas_tree(10), "         *         \n        ***        \n       *****       \n      *******      \n     *********     \n    ***********    \n   *************   \n  ***************  \n ***************** \n*******************");
  end
end
        
⬇️⬇️

=begin
Example (height = 5):
    *    
   ***   
  *****  
 ******* 
*********
=end
