number1 = input("Enter your first number :")
number2 = input("Enter your second number :")
operation = input("What do you want to do ?  ")


def calculator(num1, num2, op):
    if op == "-":
        return int(num1) - int(num2)
    elif op == '+':
        return int(num1) + int(num2)
    elif op == '/':
        return int(num1) / int(num2)
    elif op == '*':
        return int(num1) * int(num2)
    else:
        return "You have entered an invalid operation"


result = calculator(number1, number2, operation)

print('Result :', result)
