import json
import csv


def get_books(file):
    return json.load(file)

def total_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                