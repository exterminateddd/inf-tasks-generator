from flask import Flask, request, jsonify
from flask_cors import CORS
from generator import generate_all

app = Flask(__name__)
CORS(app)


@app.route('/gen', methods=['POST'])
def gen():
    try:
        json_ = request.get_json(force=True)
        if not json_:
            raise KeyError
        max_to10 = json_['to10']['maxNum']
        systems_to10 = json_['to10']['systems']
        questions_to10 = json_['to10']['questions']
        max_from10 = json_['from10']['maxNum']
        systems_from10 = json_['from10']['systems']
        questions_from10 = json_['from10']['questions']
    except KeyError:
        return jsonify({
            'success': False
        })
    text = generate_all(questions_to10, max_to10, systems_to10, questions_from10, max_from10, systems_from10)
    print(text)
    return jsonify({
        'success': True,
        'text': text
    })


if __name__ == '__main__':
    app.run(port=2000)
