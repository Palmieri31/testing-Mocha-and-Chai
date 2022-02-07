const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.validate = (email, password, age) => {
    const emailValid = regex.test(email);
    if (!emailValid){
        return false;
    }
    if(password.length < 6){
        return false;
    }
    const ageNumber = Number(age);
    if(Number.isNaN(ageNumber)){
        return ageNumber;
    }
    return true;
};

exports.createObject = () => {
    const persona = {
        nombre: 'federico',
        apellido: 'palmieri',
        edad: 27
    };
    return persona;
}