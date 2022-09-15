# calcule a porcentagem de livros em cada categoria, em relação ao número
# total de livros. O resultado deve ser escrito em um arquivo no formato CSV

import json


def get_books(file):
    return json.load(file)


def total_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
        return categories
