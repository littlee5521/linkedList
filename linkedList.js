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
        //takes a number and retunrs the value at the index
        var temp = this.head;
        var count = 0;
        if (index > this.length()) {
            return undefined;
        }
        while (count != index && temp.next != undefined) {
            temp = temp.next;
            count++;
        }
        return temp;
    };
    list.prototype.pop = function () {
        var _a;
        //removes the last element and returns its value
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
    list.prototype.contains = function (item) {
        //returns false if item is not found, uses indexof since it already iterates through
        var temp = this.indexof(item);
        if (temp == null) {
            return false;
        }
        return true;
    };
    list.prototype.indexof = function (item) {
        //takes a item and returns its index
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
    list.prototype.insertAt = function (value, index) {
        var orgItem = this.at(index);
        var newIten = new node(value, orgItem);
        var count = 0;
        var temp = this.head;
        while (count != index - 1 && temp.next != undefined) {
            temp = temp.next;
            count++;
        }
        temp.next = newIten;
    };
    list.prototype.removeAt = function (index) {
        var orgItem = this.at(index);
        var newItem = orgItem === null || orgItem === void 0 ? void 0 : orgItem.next;
        var count = 0;
        var temp = this.head;
        while (count != index - 1 && temp.next != undefined) {
            temp = temp.next;
            count++;
        }
        temp.next = newItem;
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
var test = new list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
console.log(test.at(49));
