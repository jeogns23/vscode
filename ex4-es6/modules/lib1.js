function test() {
    console.log("lib1 module test");
};

function test1() {
    console.log("lib1 module test1");
};

export let data = { x: 20, y: 30 };

export {
    test, test1
};