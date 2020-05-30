sum = 0  # 合計
squ = 0  # 2乗の合計
kisusum = 0  # 奇数の合計
gususum = 0  # 偶数の合計
for i in range(1, 101):
    #print("表示", i, "2乗数：", i * i)
    if i % 2 != 0:
        kisusum = kisusum + i
    else:
        gususum = gususum + i
    squ = squ + i * i
    sum = sum + i
print("合計", sum)
print("2乗値の合計", squ)
print("奇数の合計:", kisusum)
print("偶数の合計", gususum)
