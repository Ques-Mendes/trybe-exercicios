import random


def randomAverages(n):
    averages = []

    for number in range(100):
        average = 0
        for number in range(n):
            average += random.randrange(1, n)
        average = average/n
        averages.append(average)

    return averages


    