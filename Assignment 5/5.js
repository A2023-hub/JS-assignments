//question1
function Check(obj) {
    obj.setter = function () {
        console.log(obj.name);
    };

    return obj;
}

//question2
function Check(obj) {
    delete obj.rollno;
    return obj;
}

//question3
function Check(obj) {
    if (obj.salary > 500000) {
        return "Dream";
    } else {
        return "NotDream";
    }
}

//question4
function Check(obj) {
    if (Object.keys(obj).length == 0) {
        return false;
    } else {
        return true;
    }
}

//question5
function Check(obj1, obj2) {
    let obj = Object.assign({}, obj1, obj2);
    return obj;
}

//question6
function Check(obj, N) {
    obj.id = obj.id * N;
    obj.houseno = obj.houseno * N;

    return obj;
}

//question7
function Check(obj) {
    return obj.p1 + obj.p2 + obj.p3;
}

//question8
function Check(obj, new_name, new_id) {
    if (obj.name == new_name && obj.id == new_id) {
        return true;
    } else {
        return false;
    }
}