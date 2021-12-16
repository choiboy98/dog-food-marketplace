from flask import Blueprint, request, json
from api.models import User
from api.core import create_response, serialize_list

import time
import requests, json

user = Blueprint("user", __name__)

@user.route("/users", methods=["GET"])
def get_all_users():
    """ function that is called when you visit /users, gets all the users """

@user.route("/user/<id>", methods=["GET"])
def get_user():
    """ function that is called when you visit /user/<id>, gets the specific user with the given id """

@user.route("/register", methods=["POST"])
def register():
    """ function that is called when you visit /register, creates a new user """
    data = request.form.to_dict()
    if data is None:
        return create_response(status = 400, message = "No data provided for new recipe.")
    if "email" not in data:
        return create_response(status = 400, message = "No email provided for new recipe.")
    # if "name" not in data:
    #     return create_response(status = 400, message = "No name provided for new recipe.")
    if "password" not in data:
        return create_response(status = 400, message = "No pw provided for new recipe.")
    # if "description" not in data:
    #     return create_response(status = 400, message = "No description provided for new recipe.")

    return create_response(status = 200, message = "woohoo")

@user.route("/user/<id>", methods=["PUT"])
def update_user():
    """ function that is called when you visit /user/<id>, updates the given id's user's information """
