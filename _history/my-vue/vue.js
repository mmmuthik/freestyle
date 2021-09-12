

function defineReactive(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    get() {
      console.log('set ', key)
      return val;
    },
    set(newVal) {
      console.log('get ', key + ' ' + newVal)
      if(newVal !== val) {
        observe(newVal)
        val = newVal
      }
    }
  })
}

function observe(obj) {
  if(typeof obj !== 'object' || obj == null) {
    return
  }
  new Observer(obj)
}

class Vue {
  constructor(options) {
    // 保存选项
    this.$options = options;
    this.$data = options.data;

    // 响应式处理
    observe(this.$data)
  }
}


// 根据对象的类型决定如何响应化
class Observer {
  constructor(value) {
    this.value = value;

    if(typeof value === 'object') {
      this.walk(value)
    }
  }

  // 对象数据响应化
  walk(obj) {
    console.log('walk')
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }

  // 数组对象响应化
}