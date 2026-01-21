from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/save', methods=['POST'])
def save():
    data = request.json
    with open("note.txt", "w") as f:
        f.write(data['content'])
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)