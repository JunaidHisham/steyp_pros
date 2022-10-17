x = "kdfjgba38745634789dfg"


def calculate(x):
    value = 0
    for num in x:
        if num.isdigit():
            value += int(num)
    return value


result = calculate(x)
print(result)