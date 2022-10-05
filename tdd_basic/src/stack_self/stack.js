class Stack {
  constructor() {
    this.list = []
    this.length = 0
  }

  push(item) {
    this.list.push(item)
    this.length += 1;
  }
  pop() {
    if (this.length === 0) {
      return 'no item'
    }
    const item = this.list.pop()
    this.length -= 1;
    return item;
  }
}

module.exports = Stack;