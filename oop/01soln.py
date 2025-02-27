class Car:
    total_car = 0  # Class variable to count total cars

    def __init__(self, brand, model):
        self.__brand = brand  # Private attribute
        self.__model = model
        Car.total_car += 1  # Increment the total car count by 1 each time a new Car object is created

    def chai_brand(self):
        return self.__brand + '!'
    
    def full_name(self):
        return f'{self.__brand} {self.__model}'
    
    def fuel_type(self):
        return 'PETROL OR DIESEL'
    
    @property
    def model1(self):
     return self.__model
    
    def get_brand(self):  # Add a getter to access the private brand
        return self.__brand

    @staticmethod
    def general_description():
        return "Cars are vehicles used for transportation, with different fuel types like petrol, diesel, or electric."

class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

    def display_info(self):
        return f'{self.get_brand()} {self.model} with a {self.battery_size}-kWh battery'
    
    def fuel_type(self):
        return 'ELECTRIC CHARGE'

# Creating instances
# mycar = Car('toyota', 'corolla')
# # mycar.model="City"
# print(mycar.chai_brand())            # Output: toyota!
# print(mycar.model1)  

# # print(mycar.full_name())             # Output: toyota corolla
# # print(mycar.fuel_type())             # Output: PETROL OR DIESEL

# mynewcar = ElectricCar('Tesla', 'Model S', 100)

# print(isinstance(mycar,Car))
# print(mynewcar.display_info())       # Output: Tesla Model S with a 100-kWh battery
# print(mynewcar.fuel_type())          # Output: ELECTRIC CHARGE

# # Accessing the total number of cars
# print(Car.total_car)                 # Output: 2
# test = Car('Tesla', 'Model 3')
# print(Car.total_car)                 # Output: 3

# # Using the static method
# print(Car.general_description())    # Output: Cars are vehicles used for transportation...


class Battery:
  def Battery_info(self):
      
      return "This battery is"



class Engine:
     def Engine_info(self):
      
      return "This Engine is"


class ElectricCar2(Battery,Engine,Car):
 def ElectricCar2_inf(self):
      pass
my_newtesla = ElectricCar2('Tesla', 'Model S')
print(my_newtesla.Engine_info())
print(my_newtesla.Battery_info())