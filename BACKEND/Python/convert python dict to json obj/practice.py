import json


python_obj = {
    "name" : "David",
    "class" : 1,
    "age" : 6,
    "div" : "D"
}

converted_string = json.dumps(python_obj, indent=4)
print(converted_string)