class Employee():
    def __init__(self, name, age, designation):
        self.name = name
        self.age = age
        self.designation = designation


def create_file(class_object):
    with open("new.txt", 'a') as file:
        file.write("{:<20} {:<5} {:<20} \n\n".format( class_object.name, class_object.age, class_object.designation ))

def read_file():
    with open("new.txt", 'r') as file:
        print(file.read())


employee_one   = Employee("Junaid", "19", "Software Engineer")
employee_two   = Employee("Haseeb", "24", "Software Engineer")
employee_three = Employee("Abhilash", "21", "Software Engineer")
employee_four  = Employee("Naveen", "22", "Software Engineer")
employee_five  = Employee("Ajmal", "22", "Software Engineer")
employee_six   = Employee("Ajmal Sakeer", "22", "Software Engineer")

create_file(employee_one)
create_file(employee_two)
create_file(employee_three)
create_file(employee_four)
create_file(employee_five)
create_file(employee_six)


read_file()
