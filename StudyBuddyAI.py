from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS

from langchain_community.document_loaders import TextLoader
from langchain.indexes import VectorstoreIndexCreator
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set your OpenAI API key
os.environ["OPENAI_API_KEY"] = "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"

# Load your AI learning model
data = TextLoader("AI_Learning_Model.txt")
index = VectorstoreIndexCreator().from_loaders([data])

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    response = index.query(user_message)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
