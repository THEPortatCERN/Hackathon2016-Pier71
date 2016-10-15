from app import db

# BASE MODEL - id, created, updated #
class Base(db.Model):

    __abstract__  = True

    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    modified = db.Column(db.DateTime,  default=db.func.current_timestamp(),
                                           onupdate=db.func.current_timestamp())



class Organization(Base):
    __tablename__ = 'organization'

    name = db.Column(db.String(255))
    geolat = db.Column(db.Float(64))
    geolong = db.Column(db.Float(64))

    #addresses = db.relationship('Address', backref='person',
    #                            lazy='dynamic')

    def __init__(self, name, geolat, geolong):
        self.name = name
        self.geolat = geolat
        self.geolong = geolong


    def as_dict(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'created' : self.created,
            'updated' : self.updated
        }


class Product(Base):
    __tablename__ = 'product'
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    # TODO picture / meda files in sqlalchemy/flask?
    # TODO how to fk company =  db.foreign

    def __init__(self, name, description):
        self.name = name
        self.description = description

    def as_dict(self):
        return {
            'id'            : self.id,
            'name'          : self.name,
            'description'   : self.description,
            'company'       : self.companies__name,
            'created'       : self.created,
            'updated'       : self.updated
        }

class Certificates(Base):
    __tablename__ = 'certificates'
    organization = db.Column(db.String(255))

    def __init__(self, organization, certificate):
        self.certificate = certificate
        self.organization = organization


    def as_dict(self):
        return {
            'certificate'   : self.certificate,
            'organization'  : self.organization,
            'created'       : self.created,
            'updated'       : self.updated
        }