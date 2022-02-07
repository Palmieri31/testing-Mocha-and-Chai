exports.sumTest = function(value1, value2) {
    const result = value1 + value2;
    return result;
};

console.log(typeof(this.sumTest('hola', 2)));