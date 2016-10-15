from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Define the WSGI application object
app = Flask(__name__)

# Configurations
app.config.from_object('config')

db = SQLAlchemy(app)

# Register blueprint(s)
from app.meta.controller import routing as meta

app.register_blueprint(meta)
