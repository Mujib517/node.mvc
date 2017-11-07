class MyClass {

    myMethod() {
        let a = 10;
        let b = 20;
        let c = 30;
        console.log("method executed with value a as " + a + " and b as " + b + " and c as " + c);

        console.log(`method executed with value a as ${a}, b as ${b} and c as ${c}`);
    }
}

module.exports = MyClass;
