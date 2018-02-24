    "use strict"

function Human(){
    
    var name;
    var surname;
    var birth_day;
    var phone;
    var location;

    this.getName=function(){
        return this.name;
    }
    this.getSurname=function(){
        return this.surname;
    }
    this.getBirth_day=function(){
        return this.birth_day;
    }
    this.getPhone=function(){
        return this.phone;
    }
    this.getLocation=function(){
        return this.location;
    }
    this.getID=function(){
        return this.humanId;
    }
    

    this.setName=function(_name){
        this.name=_name;
    }
    this.setSurname=function(_surname){
        this.surname=_surname;
    }
    this.setBirth_day=function(_birth_day){
        this.birth_day=_birth_day;
    }
    this.setPhone=function(_phone){
        this.phone=_phone;
    }
    this.setLocation=function(_location){
        this.location=_location;
    }
}   