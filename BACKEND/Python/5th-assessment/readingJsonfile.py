import json


data = {
   "fruit": "Apple",
   "size": "Large",
   "color": "Red"
}
json_object = json.dumps(data, indent=4)
# print(json_object)

with open("files.json", "r") as outfile:
    converted = json.load(outfile)

print(converted)
