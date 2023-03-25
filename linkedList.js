var list = /** @class */ (function () {
    function list(arraytoSort) {
        var temp = arraytoSort[0];
        arraytoSort.shift();
        this.head = new node(temp, cat(arraytoSort));
    }
    list.prototype.length = function (count, item) {
        if (item == undefined) {
            item = this.head;
            count = 1;
            console.log("i ran");
        }
        if ((item === null || item === void 0 ? void 0 : item.next) == undefined) {
            return count;
        }
        count++;
        return this.length(count, item.next);
    };
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
var test = new list([1, 3, 4]);
console.log(test.head);
console.log(test.length());
