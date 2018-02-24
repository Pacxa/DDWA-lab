"use strict"

function Teacher(cathedra, position){
    Human.call(this);

    this.cathedra=cathedra;
    this.position=position;
}
    Teacher.prototype = Object.create(Human.prototype);

    Teacher.prototype.getPosition=function(){
        return this.position;
    }
    Teacher.prototype.getCathedra=function(){
        return this.cathedra;
    }

    Teacher.prototype.jsonToObject=function(json){
        var obj=json;
        this.name=obj["name"];
        this.surname=obj["surname"];
        this.birth_day=obj["birth_day"];
        this.phone=obj["phone"];
        this.location=obj["location"];
        this.cathedra=obj["cathedra"];
        this.position=obj["position"];
    }

    Teacher.prototype.setPosition=function(_position){
        this.position=_position;
    }
    Teacher.prototype.setCathedra=function(_cathedra){
        this.cathedra=_cathedra;
}