# https://www.codewars.com/kata/63454405099dba0057ef4aa0

def draw_street(buildings):
    # create sidewalk with 10 intervals separated by streetlight
    sidewalk = "".join('|' if i % 10 == 9 else '/' for i in range(sum(map(lambda x: x[1], buildings)) + len(buildings) * 2 - 2)) # `len(buildings) * 2 - 2` -> two space separation is also considered part of width
    # maximum number of segmentations 
    maxi_h = max(map(lambda x: x[0], buildings))
    # total width (determine if streetlight should be added)
    total_w = 0
    # store initial structure of ASCII-ART
    big_lst = []
    # looping
    for h, w in buildings:
        lst = []
        for i in range(maxi_h):
            if i < maxi_h - h:       lst.append(" " * w)                                                # roof
            elif i == maxi_h - h:    lst.append("■" * w)                                                # inner space
            elif i < maxi_h - 3:     lst.append(f'■{" " * (w - 2)}■')                                   # upper part of door
            elif i == maxi_h - 3:    lst.append(f'■{" " * ((w - 5) // 2)}___{" " * ((w - 5) // 2)}■')   # middle part of door
            else:                    lst.append(f'■{" " * ((w - 5) // 2)}| |{" " * ((w - 5) // 2)}■')   # lower part of door
        big_lst.append(lst)                                                                             # sub-section of each building added to main section
        total_w += w 
    # rotate 90 degrees (Ex: [[a, b, c...], [d, e, f...]] -> [a d,b e,c f])
    ans = ["  ".join(x) for x in zip(*big_lst)]                                                         
    # Output for buildings' ASCII-ART with no streetlight
    if total_w < 10:
        ans.append(sidewalk)
        return "\n".join(ans)
    light1 = "".join('|' if i % 10 == 9 else x for i, x in enumerate(ans[-1]))                          # bottom part of streetlight (start from -1 since sidewalk is not added to `ans`)
    light2 = "".join('|' if i % 10 == 9 else x for i, x in enumerate(ans[-2]))                          # middle part of streetlight (start from -2 since sidewalk is not added to `ans`)
    light3 = "".join('#' if i % 10 == 9 else x for i, x in enumerate(ans[-3]))                          # upper part of streetlight (start from -3 since sidewalk is not added to `ans`)
    return "\n".join(ans[:-3] + [light3, light2, light1, sidewalk])

@test.describe("Fixed Test Cases")
def tests():
    @test.it("Basic Test Cases")
    def test_second_oldest_first():
        test.assert_equals(draw_street([(5, 7)]), '■■■■■■■\n■     ■\n■ ___ ■\n■ | | ■\n■ | | ■\n///////')
        test.assert_equals(draw_street([(9, 11)]), '■■■■■■■■■■■\n■         ■\n■         ■\n■         ■\n■         ■\n■         ■\n■   ___  #■\n■   | |  |■\n■   | |  |■\n/////////|/')
        test.assert_equals(draw_street([(4, 5), (12, 9)]), '       ■■■■■■■■■\n       ■       ■\n       ■       ■\n       ■       ■\n       ■       ■\n       ■       ■\n       ■       ■\n       ■       ■\n■■■■■  ■       ■\n■___■  ■ #___  ■\n■| |■  ■ || |  ■\n■| |■  ■ || |  ■\n/////////|//////')
        test.assert_equals(draw_street([(7, 7), (5, 5)]), '■■■■■■■       \n■     ■       \n■     ■  ■■■■■\n■     ■  ■   ■\n■ ___ ■  #___■\n■ | | ■  || |■\n■ | | ■  || |■\n/////////|////')

⬇️⬇️

"""
draw_street([(5, 9), (7, 13)])

           ■■■■■■■■■■■■■
           ■           ■
■■■■■■■■■  ■           ■
■       ■  ■           ■
■  ___  ■# ■    ___#   ■
■  | |  ■| ■    | ||   ■
■  | |  ■| ■    | ||   ■
/////////|/////////|////
"""
