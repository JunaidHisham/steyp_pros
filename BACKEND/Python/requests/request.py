from textwrap import indent
import requests
import json

data = {
    "username" : "sobir009@example.com",
    "password" : "qwerty123"
}
# r = requests.get("https://traveller.talrop.works/api/v1/places/")
r = requests.post("https://traveller.talrop.works/api/v1/auth/token/", data = data)


# print(r.text)

print(r.json())