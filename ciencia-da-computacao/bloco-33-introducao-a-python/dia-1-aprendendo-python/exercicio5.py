# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
#  e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo a quantidade
#  de latas de tinta a serem compradas e o
#  preço total a partir do tamanho de uma parede(em m²).

def paint_cost(area):
    price = 80
    litters_needed = area / 3
    can_needed = litters_needed // 18
    if litters_needed % 18:
        can_needed += 1
    return can_needed, can_needed * price
