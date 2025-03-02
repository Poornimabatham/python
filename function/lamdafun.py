# s1 = 'GeeksforGeeks'

# s2 = lambda func: func.upper()
# print(s2(s1))



# # Example: Check if a number is positive, negative, or zero
# n = lambda x: "Positive" if x > 0 else "Negative" if x < 0 else "Zero"

# print(n(5))   
# print(n(-3))  
# print(n(0))   



# # Using lambda
# sq = lambda x: x ** 2
# print(sq(3))

# # Using def
# def sqdef(x):
#     return x ** 2
# print(sqdef(3))  


# # list comprehension
# li = [lambda arg = x: arg * 10  for x in range(1,10)]
# for i in li:
#     print(i())


# check = lambda x:'Even' if x%2 == 0 else 'Odd'
# print(check(5))
# print(check(6))

  
#   # Example: Perform addition and multiplication in a single line
# calc = lambda x, y: (x + y, x * y,y-x,x-y)

# res = calc(3, 4)
# print(res)  


# lambda with filter to find out  even number from a list

# n = [1,2,3,4,5,6]
# even = filter(lambda x:x%2 ==0,n)
# print(list(even))


n = [1,2,3,4,5,6]
even = map(lambda x:x*2 ,n)
print(list(even))

from functools import reduce

# Example: Find the product of all numbers in a list
a = [2, 2, 3, 4]
b = reduce(lambda x, y: x * y, a)
print(b)  


# note

# What is the functionality of lambda?
# The functionality of lambda functions in Python is to create small, anonymous functions on the fly. They are often used in situations where creating a full-fledged function using def would be overkill or where a function is needed for a short period and doesn’t need a name.

# def = defination

cube = lambda x: x **3

print(cube(2))


def sum_all(*args):
    print(args)
    for i in args:
        print(i*2)
    return sum(args)

print(sum_all(1,2))
print(sum_all(1,2,3,4,5))

print(sum_all(1,2,3,4,5,6,7,8))

# def print_kwargs(myfave=9,name='hitman',power='bigball'):
    
#     print("Name",name,"power",power,"nyfave",myfave)

# print_kwargs(power='lazer',name="shktiman",myfave='1')   
# print_kwargs(name="shktiman",myfave='1')   

# print_kwargs(power='lazer')   


# The above function can be writtes as like below

def print_kwargs(**kwargs):
    for key,value in kwargs.items():
      print(f"{key}:{value}")

print_kwargs(power='lazer',name="shktiman",myfave='1')   
print_kwargs(name="shktiman",myfave='1')   

print_kwargs(power='lazer')   


# Generate Function with yiels

# Write a genrator function that yiels even number up to a specified limit


def even_gen(limit):
   for i in  range(2,limit+1,2): 
    # //  2 se chalega or skip karege 2 ko
     print(i)
