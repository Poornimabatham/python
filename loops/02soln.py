# n = 10
# sum_even = 0

# for i in range(1, n+1):
#     if i % 2 == 0:
#         sum_even += i
#         print(f"The sum of even numbers is: {sum_even}")


# n = 10
# mult = 2

# for i in range(1, 10):
#     if i == 5:
#      continue
#     print(f"{mult} * {i} = {mult * i}")



# input_str = "python"

# revers_str = ""

# for char in input_str:
#     print(char)
#     revers_str =  char + revers_str 
# print(revers_str)


# find the first non repeating character

# input_str = "googleacdacd"


# for char in input_str:
#     if input_str.count(char) == 1:
#            print("char is non repeating",char)
#           #    break


# Factorial number

# number = 5
# factorial = 1

# while  number > 0:
#     factorial *=number
#     number = number - 1


# print("factorial",factorial)

# number = 5

# factorial = 1 * 5 = 5

# number = 4

# number = 4 * 5 = 20

# number = 3

# number = 3 * 20 = 60

# number = 2

# number = 2 * 60 = 120

# number = 1

# number = 1 * 120 = 120

# number = 0  exit from the loop and print


# while True:
#     userinput = int(input("Enter ther number: b/w 1 and 100 "))
#     if  1 <= userinput <=100:
#           print("tHANKS")
          
#     else:
#          print("iNVALID NUMBER TRY AGAIN")




# check the number is prime or not
# number = 3

# is_prime = True
# if number > 1:
#     # Check for factors
#     for i in range(2, number):
#         if (number % i) == 0:
#             is_prime = False
#             break

#     if is_prime:
#         print("Number is prime")
#     else:
#         print("Number is not prime")
# else:
#     print("Number is not prime")


items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', '8']

unique_items = set()

for item in items:
    if item in unique_items:
        print("Duplicate item: %s" % item)
        break
    unique_items.add(item)
else:
    print("No duplicate items found")

# Optional: Print the final set of unique items
print("Unique items:", unique_items)
