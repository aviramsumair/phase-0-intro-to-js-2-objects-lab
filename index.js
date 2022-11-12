const employee = {
    name: "newName",
    streetAddress: "newAddress"
}

function updateEmployeeWithKeyAndValue(obj, key, value,){
    return{
        ...employee,
        [key]: value 
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const cloneEmpl = {...employee}
    delete cloneEmpl[key];
    return cloneEmpl;    
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}