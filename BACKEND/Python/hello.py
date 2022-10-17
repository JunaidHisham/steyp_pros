import math
import datetime


# print("hey")
# print(math.pi)
# print(math.sqrt(16))

now = datetime.datetime.now()
date = datetime.date.today()

# print(date)
# print(now)

timestamp = 1528797322  
date_time = datetime.datetime.fromtimestamp(timestamp)
d = date_time.strftime("%c")
date = date_time.strftime("%x")
time = date_time.strftime("%X")
# print("Output :", d)
# print("Output :", date)
# print("Output :", time)

date_string = "21 July, 2003"

date_object = datetime.datetime.strptime(date_string, "%d %B, %Y")
# print(date_object)
# print(date_string)

# 28th Feb, 2020 (Sunday).  

tday=datetime.date.today() 
print(tday.weekday())
#  0   1   2   3   4   5    6 
# mon tue wed thu fri sat  sun