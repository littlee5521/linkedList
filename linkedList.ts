class list {

  head: node
  constructor(arraytoSort: number[]) {
    //temporary work around because TS was throwing a error about this being possibly undefined
    let temp = arraytoSort[0]
    arraytoSort.shift()

    this.head = new node(temp, cat(arraytoSort))

  }

  length(count?: number, item?: node) {
    // this is meant for the first run sets the head to work from
    if (item == undefined) {
      item = this.head
      count = 1
    }

    //this is the base case returns the count when it finds tai;
    if (item?.next == undefined) {
      return count
    }
    count++
    return this.length(count, item.next)
  }

  append(value: number) {
    //intializes the temp to be the head, works down froim there looking for tail
    let temp = this.head
    while (temp.next != undefined) {
      temp = temp.next
    }
    temp.next = new node(value)
  }

  prepend(value: number) {
    // makes a temporary new variable to store the current head and then makes a new node with its value
    let temp = new node(value, this.head)
    this.head = temp
  }

  tail() {
    //moves down the list and returns the last item
    let temp = this.head
    while (temp.next != undefined) {
      temp = temp.next
    }
    return temp
  }


  at(index: number) {
    //takes a number and retunrs the value at the index
    let temp = this.head
    let count = 0
    if (index > this.length()) {
      return undefined
    }
    while (count != index && temp.next != undefined) {
      temp = temp.next
      count++
    }
    return temp
  }
  pop() {
    //removes the last element and returns its value
    let temp = this.indexof(this.tail().data)
    if (temp == undefined) {
      return null
    }
    let index = temp - 1
    let item = this.at(index)
    let value = item?.next?.data
    item.next = undefined
    return value

  }

  contains(item: number) {
    //returns false if item is not found, uses indexof since it already iterates through
    let temp = this.indexof(item)
    if (temp == null) {
      return false
    }
    return true
  }

  indexof(item: number) {
    //takes a item and returns its index
    let temp = this.head
    let count = 0
    while (item != temp.data) {
      if (temp.next == undefined) {
        return null
      }
      temp = temp.next
      count++
    }
    return count
  }

  insertAt(value: number, index: number) {
    let orgItem = this.at(index)
    let newIten = new node(value, orgItem)
    let count = 0
    let temp = this.head
    while (count != index - 1 && temp.next != undefined) {
      temp = temp.next
      count++
    }
    temp.next = newIten
  }

  removeAt(index: number) {
    let orgItem = this.at(index)
    let newItem = orgItem?.next
    let count = 0
    let temp = this.head
    while (count != index - 1 && temp.next != undefined) {
      temp = temp.next
      count++
    }
    temp.next = newItem


  }
}

class node {
  // a node has its value, and then the value that it links to
  data: number
  next?: node
  constructor(data: number, next?: node) {
    this.data = data
    this.next = next
  }
}


const cat = function(array: number[]) {
  // this works through the array returnign items as nodes
  if (array.length == 0) {
    return
  }
  let value = array[0]
  array.shift()
  return new node(value, cat(array))
}

const test = new list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100])
console.log(test.at(49))
