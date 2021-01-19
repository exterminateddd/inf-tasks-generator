from random import choice, randint

D = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'


def convert(n, to_base=10, from_base=10):
    if isinstance(n, str):
        n = int(n, from_base)
    if n >= to_base:
        return convert(n // to_base, to_base) + D[n % to_base]
    else:
        return D[n]


def generate_from_10(questions: int, max_num: int, systems: list):
    systems = [int(i) for i in systems]
    text = []
    for i in range(0, questions):
        cur_task = ''
        n = randint(1, max_num)
        from_base = 10
        to_base = randint(2, choice(systems))
        cur_task = f"{i}. {n} из {from_base} в {to_base}: _____ (ОtBеt: {convert(n, to_base, from_base)})</br>"
        text.append(cur_task)
    return text


def generate_to_10(questions: int, max_num: int, systems: list):
    systems = [int(i) for i in systems]
    text = []
    for i in range(0, questions):
        cur_task = ''
        n = randint(1, max_num)
        from_base = randint(2, choice(systems))
        to_base = 10
        cur_task = f"{i}. {n} из {from_base} в {to_base}: _____ (ОtBеt: {convert(n, to_base, from_base)})</br>"
        text.append(cur_task)
    return text


def generate_all(questions_to10, max_num_to10, systems_to10, questions_from10, max_num_from10, systems_from10):
    return '\n'.join(generate_to_10(questions_to10, max_num_to10, systems_to10)) + '</br>From 10</br>' + \
           '\n'.join(generate_from_10(questions_from10, max_num_from10, systems_from10))
