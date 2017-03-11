// test3

function foo() {
    var a = 2;

    return function baz() {
        var b = 9;

        return function fn() {
            console.log(a);
        }
    }
}

var bar = foo();
var fn = bar();
fn();