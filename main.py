from flask import Flask, request, jsonify
from flask_cors import CORS
from generator import generate

app = Flask(__name__)
CORS(app)


@app.route('/gen', methods=['POST'])
def gen():
    try:
        json_ = request.get_json(force=True)
        if not json_:
            raise KeyError
        max_ = json_['maxNum']
        systems_ = json_['systems']
        questions_ = json_['quantity']
    except KeyError:
        return jsonify({
            'success': False
        })
    text = generate(max_num=max_, systems=systems_, questions=questions_)
    print(text)
    return jsonify({
        'success': True,
        'text': text
    })


if __name__ == '__main__':
    app.run(port=22005)
