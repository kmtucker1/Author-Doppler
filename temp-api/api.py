#!/bin/python3

from flask import Flask, json, request

api = Flask(__name__)

#Set global allow* header - THIS IS BAD FOR production but good for testing
@api.after_request
def destroy_cors_policy(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

from random import randint
def get_doppelgangers(s):
    authors = [ {"name":"Brandon Sanderson", "url":"https://www.brandonsanderson.com/","confidence":randint(1,100)},
		{"name":"Robert Jordan", "url":"", "confidence":randint(1,100)},
		{"name":"George R. R. Martin", "url":"https://georgerrmartin.com/", "confidence":randint(1,100)},
    ]

    return dict({"authors":authors})

@api.route('/doppel', methods=['GET'])
def author_doppelganger():
    """
    This function takes a block of text and returns a list of authors in descending order of similarity.
    """
    try:
        anonymous_text = request.args.get('anonymous_text')
        response = json.jsonify(get_doppelgangers(anonymous_text))
        return response
    except Exception as e:
        print(e)
        return "ERROR"

def text_similarity():
    # get two texts to compare
    # return a float indicating author similarity (0 very different, 1 the same text)
    return 1

def fool_me():
    # # give a text for the user to read, then their goal is to "fool" the system into thinking they are that author
    # this is a different webpage, but litterally just calls text_similarity with a fixed threshold
    return 1

if __name__ == '__main__':
    api.run(port=8080)
