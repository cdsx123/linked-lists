/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

let Node = require("./Node.js")

module.exports = function LinkedList() {
  let head = null;

  function prepend(data) {
    head = Node(data, head);
  }

  function append(data) {
    if (head === null) {
      prepend(data);
    } else{
      let temp = head
      while(temp.next !== null) {
        temp = temp.next
      }
      temp.next = Node(data, null)
    }
  }

  function size() {
    let count = 0
    let temp = head
    while (temp !== null) {
      count++
      temp = temp.next
    }
    return count
  }

  function tail() {
    if (head === null) {
      return "error, no nodes in list"
    }
    let temp = head
    while(temp.next !== null) {
      temp = temp.next
    }
    return temp
  }

  function at(index) {
    let count = 0
    let temp = head
    while (count < index && temp !== null) {
      count++
      temp = temp.next
    }
    return temp
  }

  function pop() {
    if (head === null) {
      return "error, no nodes in list"
    }
    let cur = head
    let prev = head
    while (cur.next !== null) {
      prev = cur
      cur = cur.next
    }
    prev.next = null
  }

  function contains(data) {
    if (head === null) {
      return "error, no nodes in list"
    }
    let temp = head
    while (temp.data !== data) {
      if (temp.next === null) {
        return false
      }
      temp = temp.next
    }
    return true
  }

  function find(data) {
    if (head === null) {
      return "error, no nodes in list"
    }
    let count = 0
    let temp = head
    while (temp.data !== data) {
      if (temp.next === null) {
        return null
      }
      temp = temp.next
      count++
    }
    return count
  }

  function toString() {
    if (head === null) {
      return "head -> null"
    }
    let temp = head
    let string = "head -> "
    while (temp !== null) {
      string += temp.data + " -> "
      temp = temp.next
    }
    return string + "null"
  }

  return { append, prepend, size, head, tail, at, pop, contains, find, toString };
}

