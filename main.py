from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from generator import generate_all

app = Flask(__name__)
CORS(app)


BR = '</br>'


@app.route('/gen', methods=['POST'])
def gen():
    json__ = {
        'msg': 'Empty',
        'success': True,
        'text': '',
        'text_no_ans': ''
    }
    try:
        json_ = request.get_json(force=True)
        if not json_:
            raise KeyError
        variants: int = json_['variants']
        max_to10: int = json_['to10']['maxNum']
        systems_to10: list = json_['to10']['systems']
        questions_to10: int = json_['to10']['quantity']
        max_from10: int = json_['from10']['maxNum']
        systems_from10: list = json_['from10']['systems']
        questions_from10: int = json_['from10']['quantity']
    except Exception as e:
        json__['success'] = False
        json__['msg'] = 'Error: '+BR+str(type(e).__name__)+': '+str(e.args)
        return json__
    print(json_)
    no_ans_ret = ''
    ans_ret = ''
    for v in range(variants):
        generate = generate_all(questions_to10, max_to10, systems_to10, questions_from10, max_from10, systems_from10)
        no_ans_ret += f'{BR}ВАРИАНТ №{v+1}'+BR+'в 10-чную'+BR+generate['gto10']['no_ans']+BR+'в х-ной'+BR+generate['gfrom10']['no_ans']
        ans_ret += f'{BR}ВАРИАНТ №{v+1}'+BR+'в 10-чную'+BR+generate['gto10']['ans']+BR+'в х-ной'+BR+generate['gfrom10']['ans']
    json__['msg'] = 'Success!'
    json__['text'] = ans_ret.replace(BR, '\n')
    json__['text_no_ans'] = no_ans_ret.replace(BR, '\n')
    # if input(str(json_)+'\nSend?').lower() in ['yes', 'y', 'send', 'true', 'accept']: pass
    # else: json__['msg'] = 'Unaccepted request parameters.'; json__['success'] = False
    return jsonify(json__)


if __name__ == '__main__':
    app.run(port=2000, debug=True)
