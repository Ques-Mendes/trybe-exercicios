# Crie uma função que receba os três lado de um triângulo e informe qual o
# tipo de triângulo formado ou "não é triangulo", caso não seja possível
#  formar um triângulo.

def triangle_type(side_a, side_b, side_c):
    is_triangle = (
        side_a + side_b > side_c and
        side_b + side_c > side_a and
        side_a + side_c > side_b
    )
    if not is_triangle:
        return "não é triangulo"
    elif side_a == side_b == side_c:
        return "Triângulo Equilátero"
    elif side_a == side_b or side_a == side_c or side_b == side_c:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"
