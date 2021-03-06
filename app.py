import numpy as np
import json
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template,url_for
from flask import request, redirect

# enabling the app.py
app=Flask(__name__)

db_path='sqlite:///static/data/summerspots.db'

engine=create_engine(db_path)



@app.route('/')
def render_indexjf():
    return render_template('/indexjf.html')

@app.route('/index3')
def render_index3():
    return render_template('/index3.html')

@app.route('/index4')
def render_index4():
    return render_template('index4.html')

@app.route('/index2')
def render_index2():
    return render_template('/index2.html')


@app.route('/csv/read')
def return_csv_data():
    names=pd.read_csv('./db/Final_2019_data.csv')
    return jsonify(names.to_dict())

@app.route('/csv/read2')
def return_csv_data2():
    names=pd.read_csv('./db/Final_2020_data.csv')
    return jsonify(names.to_dict())



############Diana's Code########################

@app.route('/Map/')
def render_index():
  return render_template('map.html')

if __name__ == "__main__":
    app.run(debug=True)






