import {Symbol} from "./symbol"

export var LeanIteratorPrototype = {}

LeanIteratorPrototype[Symbol.leanIterator] = function () { return this }

export var iterator

if (process.env.EJS_NO_ES_ITERATORS) {
  iterator = function iterator(cont) {
    return cont[Symbol.leanIterator]()
  }
} else {
  function LeanIterator(iter) {
    this.iter = iter[Symbol.iterator]()
    this.done = false
  }
  
  var LIp = LeanIterator.prototype = Object.create(LeanIteratorPrototype)
  
  LIp[Symbol.iterator] = function() { return this.iter }
  
  LIp.step = function step(v) {
    var next = this.iter.next(v)
    if (next.done)
      return this.pure(next.value)
    this.value = next.value
    return this
  }
  
  LIp.pure = function pure(value) {
    this.value = value
    this.done = true
    return this
  }
  
  LIp.raise = function raise(ex) {
    this.value = void 0
    this.done = true
    throw ex
  }
  
  LIp.handle = function handle(e) {
    var iter = this.iter, next
    if (!iter.throw) {
      if (iter.return) {
        try {
          iter.return()
        } catch(e) {
          return this.raise(e)
        }
      }
      return this.raise(new TypeError("iterator does not have a throw method"))
    }
    try {
      next = this.iter.throw(e)
    } catch(e) {
      return this.raise(e)
    }
    if (next.done)
      return this.pure(next.value)
    this.value = next.value
    return this
  }
  
  LIp.exit = function exit(value) {
    var iter = this.iter, next
    if (!iter.return)
      return this.pure(value)
    try {
      next = iter.return(value)
    } catch (e) {
      return this.raise(e)
    }
    if (next.done)
      return this.pure(next.value)
    this.value = next.value
    return this
  }

  iterator = function iterator(cont) {
    return cont[Symbol.leanIterator]
      ? cont[Symbol.leanIterator]()
      : new LeanIterator(cont)
  }
}

