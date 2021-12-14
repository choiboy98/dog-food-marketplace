from api.core import Mixin
from .base import db
import uuid


class User(Mixin, db.Model):
    """User Table."""

    __tablename__ = "user"

    """FP ids start with f"""
    id = db.Column(db.String, unique=True, primary_key=True)
    email = db.Column(db.String)
    name = db.Column(db.String)
    pw = db.Column(db.String)
    description = db.Column(db.String)

    def __init__(self, data):
        self.id = "f" + str(uuid.uuid4())

        # required fields should be checked for existence by the request
        self.email = data["email"]
        self.name = data["name"]
        self.pw = data["pw"]
        self.description = data["description"]

    def __repr__(self):
        return f"<User\nID: {self.id}\nEmail: {self.email}\nName: {self.name}\nDescription: {self.description}\n>"