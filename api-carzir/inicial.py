# Instalar con pip install flask
from flask import Flask, jsonify, request
# Instalar con pip install flask-cors
from flask_cors import CORS

from app.models import Auto

from app.dataAuto import autos

app = Flask(__name__)
CORS(app)

@app.route('/')
def principal():
    return "CarZir 🏆"

@app.route('/autos', methods=['GET','POST'])
def autosEndpoint():
    """
    Recupera todos los autos de la lista de ejemplo.
    """
    if request.method == 'GET':
        autos_list = [] 
        for auto in autos:
            auto={
            "id": auto.id,
            "marca": auto.marca,
            "modelo": auto.modelo,
            "año": auto.año,
            "imagen": auto.imagen,
            }
            autos_list.append(auto) 
            print("holaaaa", auto) 

        return jsonify(autos_list)
    else:
        # POST
        data = request.get_json()
        print("Holaaaaaaaaaa",data)
        new_auto = Auto(
            id=data['id'],
            title=data.get('marca'),
            modelo=data.get('modelo'),
            año=data.get('año'),
            imagen=data.get('imagen')
        )
        autos.append(new_auto)
        new_auto_dict = {
            "id": new_auto.id,
            "title": new_auto.marca,
            "modelo": new_auto.modelo,
            "año": new_auto.año,
            "imagen": new_auto.imagen
        }
        print(">>>>>>>>>>>>>>>>>>>>>>>",len(autos))
        return jsonify(new_auto_dict), 203



if __name__ == '__main__':
    app.run(debug=True)