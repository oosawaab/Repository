sum = 0  # 合計
squ = 0  # 2乗の合計
for i in range(1, 101):
    print("表示", i, "2乗数：", i * i)
    squ = squ + i * i
    sum = sum + i
print("合計", sum)
print("2乗値の合計", squ)
