menu = {
    "pizza": 150,
    "pasta": 120,
    "cold drink": 30,
    "momos": 80,
    "coffe": 50,
    "tea": 20,
}

totalAmount = 0
ordered_items = []  # To keep track of ordered items

print("Welcome to Python Restaurant")
for item, price in menu.items():
    print(f"{item} = Rs {price}")

item1 = input("Enter the dish name: ")

if item1 in menu:
    totalAmount += menu[item1]
    ordered_items.append(item1)
else:
    print("You can choose a dish from the menu.")

choice = input("Do you want to add more items? (Yes/No): ")

if choice.lower() == "yes":
    item2 = input("Enter the item name: ")
    if item2 in menu:
        totalAmount += menu[item2]
        ordered_items.append(item2)
    else:
        print("You can choose a dish from the menu.")

print(f"Your total amount is Rs {totalAmount}, and the items you have ordered: {', '.join(ordered_items)}")
