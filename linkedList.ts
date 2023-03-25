class list {

  head: node
  constructor(arraytoSort: number[]) {
    let temp = arraytoSort[0]
    arraytoSort.shift()

    this.head = new node(temp, cat(arraytoSort))

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

const test = new list([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.log(test.head.next.next.next.next.next.next.next.next.next.data)
