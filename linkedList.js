var list = /** @class */ (function () {
    function list(arraytoSort) {
        //temporary work around because TS was throwing a error about this being possibly undefined
        var temp = arraytoSort[0];
        arraytoSort.shift();
        this.head = new node(temp, cat(arraytoSort));
    }
    list.prototype.length = function (count, item) {
        // this is meant for the first run sets the head to work from
        if (item == undefined) {
            item = this.head;
            count = 1;
        }
        //this is the base case returns the count when it finds tai;
        if ((item === null || item === void 0 ? void 0 : item.next) == undefined) {
            return count;
        }
        count++;
        return this.length(count, item.next);
    };
    list.prototype.append = function (value) {
        //intializes the temp to be the head, works down froim there looking for tail
        var temp = this.head;
        while (temp.next != undefined) {
            temp = temp.next;
        }
        temp.next = new node(value);
    };
    list.prototype.prepend = function (value) {
        // makes a temporary new variable to store the current head and then makes a new node with its value
        var temp = new node(value, this.head);
        this.head = temp;
    };
    list.prototype.tail = function () {
        //moves down the list and returns the last item
        var temp = this.head;
        while (temp.next != undefined) {
            temp = temp.next;
        }
        return temp;
    };
    list.prototype.at = function (index) {
        var temp = this.head;
        var count = 0;
        if (index > this.length()) {
            return null;
        }
        while (count != index && temp.next != undefined) {
            temp = temp.next;
            count++;
        }
        return temp;
    };
    list.prototype.pop = function () {
        var _a;
        var temp = this.indexof(this.tail().data);
        if (temp == undefined) {
            return null;
        }
        var index = temp - 1;
        var item = this.at(index);
        var value = (_a = item === null || item === void 0 ? void 0 : item.next) === null || _a === void 0 ? void 0 : _a.data;
        item.next = undefined;
        return value;
    };
    list.prototype.indexof = function (item) {
        var temp = this.head;
        var count = 0;
        while (item != temp.data) {
            if (temp.next == undefined) {
                return null;
            }
            temp = temp.next;
            count++;
        }
        return count;
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
    // this works through the array returnign items as nodes
    if (array.length == 0) {
        return;
    }
    var value = array[0];
    array.shift();
    return new node(value, cat(array));
};
var test = new list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(test.tail());
console.log(test.pop());
console.log(test.tail());
