array = [1, 2, 3, 3, 4, 54, 5, 9, 23, 3, 23, 3, 3, 3]


def calculate(array):
    val = 0
    for l in array:
        val += l
    return val


sum = calculate(array)
print('Total sum is', sum)
