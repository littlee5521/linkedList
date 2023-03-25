class list {

  head: node
  constructor(arraytoSort: number[]) {
    let temp = arraytoSort[0]
    arraytoSort.shift()

    this.head = new node(temp, cat(arraytoSort))

  }

  length(count?: number, item?: node) {
    if (item == undefined) {
      item = this.head
      count = 1
      console.log("i ran")
    }
    if (item?.next == undefined) {
      return count
    }
    count++
    return this.length(count, item.next)
  }
}

class node {
  data: number
  next: node
  constructor(data: number, next: node) {
    this.data = data
    this.next = next
  }
}


const cat = function(array: number[]) {
  if (array.length == 0) {
    return
  }
  let value = array[0]
  array.shift()
  return new node(value, cat(array))
}

const test = new list([1, 3, 4])
console.log(test.head)
console.log(test.length())
