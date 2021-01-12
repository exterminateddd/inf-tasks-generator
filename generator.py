from random import choice, randint


def generate(questions: int, max_num: int, systems: list):
    systems = [int(i) for i in systems]
    text = '\n'.join(set([f"Переведите число {randint(2, max_num)} из 10 в {choice(systems)} СС." for n in range(questions)]))
    return text
