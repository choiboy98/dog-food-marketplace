from flask_script import Manager
from flask_migrate import Migrate
from api import create_app

import time
import os

# sets up the app
app = create_app()

manager = Manager(app)
# migrate = Migrate(app, db)

@manager.command
def runserver():
    app.run(debug=True, host="0.0.0.0", port=os.environ.get("PORT", "5000"))

if __name__ == "__main__":
    manager.run()