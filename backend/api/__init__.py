import os
from flask import Flask
from flask_cors import CORS
from sqlalchemy_utils import create_database, database_exists
from flask_migrate import Migrate

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    CORS(app)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    db_url = "postgresql://localhost:5432/ruff"
    if not database_exists(db_url):
        create_database(db_url)

    # register sqlalchemy to this app
    from api.models import db

    db.init_app(app)  # initialize Flask SQLALchemy with this flask app
    Migrate(app, db)

    # import and register blueprints
    from api.views import user, recipe

    # why blueprints http://flask.pocoo.org/docs/1.0/blueprints/
    app.register_blueprint(user.user)
    app.register_blueprint(recipe.recipe)
    
    return app