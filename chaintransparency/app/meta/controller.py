from app.meta.models import Organization
from flask import Blueprint, request, jsonify
from app import db


routing = Blueprint('meta', __name__, url_prefix='/meta')


@routing.route('/manufacturer/', methods=['GET', 'POST'])
def manufacturer():
    if request.method == 'POST':
        json = request.json
        m = Organization(name=json["name"])
        db.session.add(m)
        db.session.commit()
        return jsonify(m.as_dict()), 201
    else:
        q = Organization.query.all()
        return jsonify([i.as_dict() for i in q]), 200


@routing.route('/manufacturer/<int:manufacturer_id>/', methods=['GET'])
def get_organization(manufacturer_id):
    q = Organization.query.get(manufacturer_id)
    if q:
        return jsonify(q.as_dict())
    else:
        return "Organization not found", 404