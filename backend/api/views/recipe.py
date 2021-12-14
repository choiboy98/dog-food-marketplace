from flask import Blueprint, request, json
from api.models import User
from api.core import create_response, serialize_list

import time
import requests, json

recipe = Blueprint("recipe", __name__)

@user.route("/recipes", methods=["GET"])
def get_all_recipes():
    """ function that is called when you visit /recipes, gets all the recipes """

@user.route("/recipes/<chefId>", methods=["GET"])
def get_users_recipes():
    """ function that is called when you visit /recipes/<chefId>, gets all the recipes with the given chefId """

@user.route("/recipes/<recipeId>", methods=["GET"])
def get_users_recipes():
    """ function that is called when you visit /recipes/<recipeId>, gets a single recipe """

@user.route("/recipe", methods=["POST"])
def create_recipe():
    """ function that is called when you visit /recipe, creates a new recipe """

@user.route("/recipe/<chefId>/<recipeId>", methods=["PUT"])
def update_recipe():
    """ function that is called when you visit /recipe/<chefId>/<recipeId>, updates the given recipe if the owner wants to make change """
