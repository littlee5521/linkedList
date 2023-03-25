var list = /** @class */ (function () {
    function list(arraytoSort) {
        var temp = arraytoSort[0];
        arraytoSort.shift();
        this.head = new node(temp, cat(arraytoSort));
    }
    return list;
}());
var node = /** @class */ (function () {
    function node(data, next) {
        this.data = data;
        this.next = next;
    }
    return node;
}());
var cat = function (array) {
    if (array.length == 0) {
        return;
    }
    var value = array[0];
    array.shift();
    return new node(value, cat(array));
};
var test = new list([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(test.head.next.next.next.next.next.next.next.next.next.data);
