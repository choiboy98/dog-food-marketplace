from flask_script import Manager
from flask_migrate import Migrate
from api import create_app
from api.models import db

import time
import os

# sets up the app
app = create_app()

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

manager = Manager(app)
migrate = Migrate(app, db)

@manager.command
def runserver():
    app.run(debug=True, host="0.0.0.0", port=os.environ.get("PORT", "5000"))

@manager.command
def clear_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

if __name__ == "__main__":
    manager.run()