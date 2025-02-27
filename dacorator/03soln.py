import time

def cache(func):
    cache_value = {}  # Initialize an empty cache

    def wrapper(*args):
        if args in cache_value:
            print("Returning cached result...")
            return cache_value[args]

        print("Computing result...")
        result = func(*args)
        cache_value[args] = result
        return result

    return wrapper

@cache
def long_ru_func(a, b):
    time.sleep(6)
    return a + b

# Test the function with caching
start_time = time.time()
print(long_ru_func(2, 3))  # First call (takes 6 seconds)
print(f"Time taken: {time.time() - start_time:.2f} seconds\n")

start_time = time.time()
print(long_ru_func(2, 3))  # Cached call (returns instantly)
print(f"Time taken: {time.time() - start_time:.2f} seconds\n")

start_time = time.time()
print(long_ru_func(4, 3))  # New call (takes 6 seconds)
print(f"Time taken: {time.time() - start_time:.2f} seconds\n")
