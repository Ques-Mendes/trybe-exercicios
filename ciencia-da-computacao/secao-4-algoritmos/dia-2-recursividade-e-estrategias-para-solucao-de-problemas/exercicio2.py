def evenNumbers(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + evenNumbers(n - 1)
    else:
        return evenNumbers(n - 1)
