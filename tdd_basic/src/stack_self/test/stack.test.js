const Stack = require('../stack');


describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack()
  });

  it('push test', () => {
    expect(stack.list).toEqual([])
    stack.push('apple')
    expect(stack.list).toEqual(["apple"])
    expect(stack.length).toBe(1)
  })
  it('push test again', () => {
    expect(stack.list).toEqual([])
    stack.push('apple')
    stack.push('banana')
    expect(stack.list).toEqual(["apple", "banana"])
    expect(stack.length).toBe(2)
  })
  it('pop test when null', () => {
    expect(stack.list).toEqual([])
    expect(stack.pop()).toBe('no item')
  })
  it('pop test when contained item', () => {
    stack.push('apple')
    stack.push('banana')
    expect(stack.pop()).toBe('banana')
    expect(stack.pop()).toBe('apple')
  })

  it('stack length text', () => {
    expect(stack.length).toBe(0)
    stack.push('1')
    expect(stack.length).toBe(1)
    stack.push('1')
    expect(stack.length).toBe(2)
    stack.push('1')
    expect(stack.length).toBe(3)
    stack.pop()
    expect(stack.length).toBe(2)
    stack.pop()
    expect(stack.length).toBe(1)
    stack.pop()
    expect(stack.length).toBe(0)
    stack.pop()
    expect(stack.length).toBe(0)
  })
})