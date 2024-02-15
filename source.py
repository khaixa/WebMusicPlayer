from flask import Flask, render_template, request

app = Flask(__name__)
#app.static_folder = 'music'
app.static_folder = 'static'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/play', methods=['POST'])
def play():
    # Logic to play the specified song
    # You can use request.data to get the song data sent from the frontend
    # Example: song_data = request.data

    # Placeholder response
    return "Playing music"

@app.route('/pause')
def pause():
    # Logic to pause the playback
    # Placeholder response
    return "Music paused"

@app.route('/stop')
def stop():
    # Logic to stop the playback
    # Placeholder response
    return "Music stopped"

if __name__ == '__main__':
    app.run(debug=True)

