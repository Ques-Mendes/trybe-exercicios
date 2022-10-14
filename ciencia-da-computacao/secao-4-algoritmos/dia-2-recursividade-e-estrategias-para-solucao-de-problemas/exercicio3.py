def biggestIntBase(list, size):
    if size == 1:
        return list[0]
    else:
        biggestListValue = biggestIntBase(list, size - 1)
        if biggestListValue > list[size - 1]:
            return biggestListValue
        else:
            return list[size - 1]


def biggestInt(list):
    size = len(list)
    return biggestIntBase(list, size)


