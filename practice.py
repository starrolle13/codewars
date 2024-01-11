def perform_calculations(num1, num2):
    addition_result = num1 + num2
    subtraction_result = num1 - num2
    multiplication_result = num1 * num2
    
    # Check for division by zero to avoid an error
    if num2 != 0:
        division_result = num1 / num2
    else:
        division_result = "Cannot divide by zero!"
    
    return addition_result, subtraction_result, multiplication_result, division_result

# Example usage:
result_add, result_sub, result_mul, result_div = perform_calculations(10, 5)

print(f"Addition: {result_add}")
print(f"Subtraction: {result_sub}")
print(f"Multiplication: {result_mul}")
print(f"Division: {result_div}")

