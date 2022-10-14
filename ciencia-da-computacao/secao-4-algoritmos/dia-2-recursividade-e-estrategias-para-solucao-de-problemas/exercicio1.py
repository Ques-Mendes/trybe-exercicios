def evenNumbers(n):
    totalEvenNumbers = 0
    for number in range(n + 1):
        if number % 2 == 0 and number != 0:
            totalEvenNumbers += 1
    return totalEvenNumbers
