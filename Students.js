"use strict"

function Students(faculty, course){
    Human.call(this);

    this.faculty=faculty;
    this.course=course;
}
    Students.prototype = Object.cerate(Human.prototype)
    
    Students.prototype.getFaculty=function(){
        return this.faculty;
    }
    Students.prototype.getCourse=function(){
        return this.course;
    }

    Students.prototype.jsonToObject=function(json){
        var obj=json;
        this.name=obj["name"];
        this.surname=obj["surname"];
        this.birth_day=obj["birth_day"];
        this.phone=obj["phone"];
        this.location=obj["location"];
        this.faculty=obj["faculty"];
        this.course=obj["course"];
    }

    Students.prototype.setFaculty=function(_faculty){
        this.faculty=_faculty;
    }
    Students.prototype.setCourse=function(_course){
        this.course=_course;
}