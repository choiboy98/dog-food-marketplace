from api.core import Mixin
from .base import db
import uuid


class Recipe(Mixin, db.Model):
    """Recipe Table."""

    __tablename__ = "recipe"

    """FP ids start with f"""
    id = db.Column(db.String, unique=True, primary_key=True)
    chef_id = db.Column(db.String, db.ForeignKey("user.id"))
    name = db.Column(db.String)
    ingredients = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Float)

    def __init__(self, data):
        self.id = "f" + str(uuid.uuid4())

        # required fields should be checked for existence by the request
        self.chef_id = data["chef_id"]
        self.name = data["name"]
        self.ingredients = data["ingredients"]
        self.description = data["description"]
        self.price = Float(data["price"])

    def __repr__(self):
        return f"<Recipe\nID: {self.id}\nChef_id: {self.chef_id}\nName: {self.name}\nIngredients: {self.ingredients}\nDescription: {self.description}Price: {self.price}>"