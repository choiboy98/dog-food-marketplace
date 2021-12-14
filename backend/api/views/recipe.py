from flask import Blueprint, request, json
from api.models import Recipe
from api.core import create_response, serialize_list

import time
import requests, json

recipe = Blueprint("recipe", __name__)

@recipe.route("/recipes", methods=["GET"])
def get_all_recipes():
    """ function that is called when you visit /recipes, gets all the recipes """

@recipe.route("/recipes/<chefId>", methods=["GET"])
def get_chefs_recipes():
    """ function that is called when you visit /recipes/<chefId>, gets all the recipes with the given chefId """

@recipe.route("/recipe/<recipeId>", methods=["GET"])
def get_single_recipe():
    """ function that is called when you visit /recipes/<recipeId>, gets a single recipe """

@recipe.route("/recipe", methods=["POST"])
def create_recipe():
    """ function that is called when you visit /recipe, creates a new recipe """

    data = request.form.to_dict()
    if data is None:
        return create_response(status = 400, message = "No data provided for new recipe.")
    if "chef_id" not in data:
        return create_response(status = 400, message = "No chef id provided for new recipe.")
    if "name" not in data:
        return create_response(status = 400, message = "No name provided for new recipe.")
    if "ingredients" not in data:
        return create_response(status = 400, message = "No ingredients provided for new recipe.")
    if "description" not in data:
        return create_response(status = 400, message = "No description provided for new recipe.")

    return create_response(status = 200, message = "woohoo")

@recipe.route("/recipe/<chefId>/<recipeId>", methods=["PUT"])
def update_recipe():
    """ function that is called when you visit /recipe/<chefId>/<recipeId>, updates the given recipe if the owner wants to make change """
