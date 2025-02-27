def debug(function):
    def wrapper(*args, **kwargs):
        args_value = ', '.join(str(arg) for arg in args)
        kwargs_value = ', '.join(f"{k}={v}" for k, v in kwargs.items())
        print(f"calling: {function.__name__} with args {args_value} and kwargs {kwargs_value}")
        return function(*args, **kwargs)
    return wrapper


@debug
def help(function):
    print("hello")


@debug
def greet(name, greet='hello'):
    print(f"{greet}, {name}")

# Test the functions
greet('poornima', 'good morning')
