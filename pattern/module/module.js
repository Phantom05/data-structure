var GLOBAL = GLOBAL || {}
GLOBAL.globalVariable0 = 0;

let Module = (function(_g = {}){

  let count = 0;

  _g.npaces = {
    globalVariable1 : 20,
    globalVariable2 : 30,
    globalVariable3 : 40,
    globalVariable4 : 50,
  }

  return {
    getGlobalVariable(get_g){
      return (get_g)? _g.npaces[`${get_g}`] : _g.npaces
    },
    setGlobalVariable(set_g){
      return (Object.keys(set_g).length)
      ? Object.entries(set_g).forEach(x=>{ _g.npaces[`${x[0]}`] = x[1] })
      : console.error(`Function setGlobalVariable() is, key, value of the object type is required.`)
    },
    setCounter(){ // 은닉화
      return count++;
    }
  }

})(GLOBAL)

console.log(GLOBAL);
console.log(
  Module.getGlobalVariable(),
  Module.getGlobalVariable('globalVariable1'),
  Module.getGlobalVariable('globalVariable3')
)
console.log(
  Module.setGlobalVariable({
    globalVariable1:100,
    globalVariable3:00
  })
)
console.log(
  Module.setCounter(),
  Module.setCounter(),
  Module.setCounter(),
)
console.log(
  Module.getGlobalVariable()
)
