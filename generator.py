from random import choice, randint

D = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'


def rand_choice(list_):
    for i in list_:
        if randint(1, 3) > 1:
            return i
    return list_[-1]


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
    ans_ = []
    for i in range(0, questions):
        cur_task = ''
        n = randint(1, max_num)

        from_base = 10
        to_base = choice(systems)
        while False in [True if (int(j) <= from_base-1) else False for j in str(n)]:
            n = randint(1, max_num)
        cur_task = f"{i+1}. {n} из {from_base} в {to_base}: _____ "+"</br>"
        ans_.append(convert(n, to_base, from_base))
        text.append(cur_task)
    return {
        "text": text,
        "ans": ans_
    }


def generate_to_10(questions: int, max_num: int, systems: list):
    systems = [int(i) for i in systems]
    text = []
    ans_ = []
    for i in range(0, questions):
        cur_task = ''
        n = randint(1, max_num)
        print(systems)
        from_base = choice(systems)
        while False in [True if (int(j) <= from_base-1) else False for j in str(n)]:
            n = randint(1, max_num)
        to_base = 10
        cur_task = f"{i}. {n} из {from_base} в {to_base}: _____ </br>"
        ans_.append(convert(n, to_base, from_base))
        text.append(cur_task)
    return {
        "text": text,
        "ans": ans_
    }


def generate_all(questions_to10, max_num_to10, systems_to10, questions_from10, max_num_from10, systems_from10, ans=True):
    gto10 = generate_to_10(questions_to10, max_num_to10, systems_to10)
    gfrom10 = generate_from_10(questions_from10, max_num_from10, systems_from10)
    return {
        "gto10": {
            "ans": ''.join([f'\n{i + 1}. {gto10["ans"][i]}' for i in range(len(gto10['ans']))]),
            "no_ans": ''.join([f'\n{gto10["text"][i]}' for i in range(len(gto10['text']))])
        },
        "gfrom10": {
            "ans": ''.join([f'\n{i + 1}. {gfrom10["ans"][i]}' for i in range(len(gfrom10['ans']))]),
            "no_ans": ''.join([f'\n{gfrom10["text"][i]}' for i in range(len(gfrom10['text']))])
        }
    }
