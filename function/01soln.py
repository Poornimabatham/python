# def my_function():
#     print("Hello from a function")
# my_function()

# def my_function(fname):
#     print(fname + "" +" poornima ")

# my_function('hy')
# my_function("Emil")
# my_function("Tobias")
# my_function("Linus")

# def my_function(fname, lname):
#   print(fname + " " + lname)

# my_function("Emil")


# Arbitrary Arguments, *args
# If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition.

# This way the function will receive a tuple of arguments, and can access the items accordingly:

# Example
# def my_function(*kids):
#   print("The youngest child is " + kids[0])

# my_function("Emil", "Tobias", "Linus")

# def my_function(child3, child2, child1):
#   print("The youngest child is " + child3 + child1)

# my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")


# Arbitrary Keyword Arguments, **kwargs
# If you do not know how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition.

# This way the function will receive a dictionary of arguments, and can access the items accordingly:

# Example
# def my_function(**kid):
#   print("His last name is " + kid["lname"])

# my_function(fname = "Tobias", lname = "Refsnes")

# def my_function(country = "Norway"):
#   print("I am from " + country)

# my_function("Sweden")
# my_function("India")
# my_function()
# my_function("Brazil")

# def my_function(food):
#   for x in food:
#     print(x)

# fruits = ["apple", "banana", "cherry"]

# my_function(fruits)

# def my_function(x):
#   return 5 * x

# print(my_function(3))
# print(my_function(5))
# print(my_function(9))


# The pass Statement
# function definitions cannot be empty, but if you for some reason have a function definition with no content, put in the pass statement to avoid getting an error.

# Example
# def myfunction():
#   pass

# def my_function(x, /):
#   print(x)

# my_function(3)

# def my_function(*, x):
#   print(x)

# my_function(x = 3)




# def my_function(*, x):
#   print(x)

# my_function(3)


def my_function(a, b, /, *, c, d):
  print(a + b + c + d)

my_function(5, 6, c = 7, d = 8)