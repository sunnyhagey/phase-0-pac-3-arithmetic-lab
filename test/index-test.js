var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

describe('basic math functions', function () {
  it("'add()' is a valid function", function() {
    expect(add).toExist
  })
  function add(x, y){
    return x + y
  }
  console.log(add(3, 4))

  it("'subtract()' is a valid function", function() {
    expect(subtract).toExist
  })
  function subtract(f, h){
    return f - h
  }
  console.log(subtract(10, 5))

  it("'multiply()' is a valid function", function() {
    expect(multiply).toExist
  })
  function multiply(t, v) {
    return t * v
  }
  console.log(multiply(5, 5))

  it("'divide()' is a valid function", function() {
    expect(divide).toExist
  })
  function divide (l, s){
    return l / s
  }
  console.log(divide(22, 11))

  it('add(a, b) adds two numbers and returns the result', function() {
    expect(add(a, b)).toEqual(a + b)
  })
  function add(a, b){
    return a + b
  }
  console.log(add(2, 3))

  it('subtract(a, b) subtracts b from a and returns the result', function() {
    expect(subtract(a, b)).toEqual(a - b)
  })
  function subtract(a, b){
    return a - b
  }
  console.log(subtract(8, 7))
  
  it('multiply(a, b) multiplies two numbers and returns the result', function() {
    expect(multiply(a, b)).toEqual(a * b)
  })
  function multiply(a, b){
    return a * b
  }
  console.log(multiply(9, 9))
  
  it('divide(a, b) divides a by b and returns the result', function() {
    expect(divide(a, b)).toEqual(a / b)
  })
  function divide(a, b) {
    return a / b
  }
  console.log(divide(25, 5))
  
  it('increment(n) increments n and returns the result', function() {
    expect(increment(a)).toEqual(a + 1)
  })
  function increment(a){
    return a+1
  }
  console.log(increment(1))
  
  it('decrement(n) decrements n and returns the result', function() {
    expect(decrement(a)).toEqual(a - 1)
  })
  function decrement(a){
    return a - 1
  }
  console.log(decrement(5))
})




describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })
  function makeInt(n){
    return parseInt(n, 10)
  }
  console.log(makeInt('0x2328'))
  
  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
  function makeInt(n){
    return parseInt(n, 10)
  }
  console.log(makeInt('sldkjflksjf'))
  
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })
  function preserveDecimal(n){
    return parseFloat(n)
  }
  console.log(preserveDecimal('2.222'))

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
  function preserveDecimal(n){
    return parseFloat(n)
  }
  console.log(preserveDecimal('NaN'))
  
})
