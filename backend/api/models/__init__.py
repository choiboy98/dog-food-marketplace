# this file structure follows http://flask.pocoo.org/docs/1.0/patterns/appfactories/
# initializing db in api.models.base instead of in api.__init__.py to prevent circular dependencies
from .base import db

from .Recipe import Recipe
from .User import User

__all__ = [
    "db",
    "Recipe",
    "User"
]