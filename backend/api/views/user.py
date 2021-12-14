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

@user.route("/user", methods=["POST"])
def register():
    """ function that is called when you visit /user, creates a new user """

@user.route("/user/<id>", methods=["PUT"])
def update_user():
    """ function that is called when you visit /user/<id>, updates the given id's user's information """
