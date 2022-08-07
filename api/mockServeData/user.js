// // import Mock from 'mockjs'

// // // get请求从config.url获取参数，post从config.body中获取参数
// // function param2Obj(url) {
// //   const search = url.split('?')[1]
// //   console.log(search)
// //   if (!search) { //非?
// //     return {}
// //   }
// //   /*  replace() 方法返回一个由替换值（replacement）
// //       替换部分或所有的模式（pattern）匹配项后的新字符串。
// //       模式可以是一个字符串或者一个正则表达式，替换值可以
// //       是一个字符串或者一个每次匹配都要调用的回调函数。如
// //       果pattern是字符串，则仅替换第一个匹配项。
// //       语法
// //        str.replace(regexp|substr, newSubStr|function)
// //        下方replace代表的意思  
// //        "用\\代替  
// //        &用,代替
// //        =用:代替
// //   */
// //   return JSON.parse(
// //     '{"' +
// //     decodeURIComponent(search)
// //     .replace(/"/g, '\\"')
// //     .replace(/&/g, '","')
// //     .replace(/=/g, '":"') +
// //     '"}'
// //   )

// // }

// // let List = []
// // const count = 200

// // for (let i = 0; i < count; i++) {
// //   List.push(
// //     Mock.mock({
// //       id: Mock.Random.guid(),
// //       name: Mock.Random.cname(),
// //       addr: Mock.mock('@county(true)'),
// //       'age|18-60': 1,
// //       birth: Mock.Random.date(),
// //       sex: Mock.Random.integer(0, 1)
// //     })
// //   )
// // }

// // async function  PromiseList(){
// //   const v1 = new Promise((resolve, reject) => {
// //     resolve(List)
// //   })
// //   return await List
// // }

// // export default {
// //   /**
// //    * 获取列表
// //    * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
// //    * @param name, page, limit
// //    * @return {{code: number, count: number, data: *[]}}
// //    */
// //   getUserList: config => {
// //     const {
// //       name,
// //       page = 1,
// //       limit = 20
// //     } = param2Obj(config.url)
// //     console.log('name:' + name, 'page:' + page, '分页大小limit:' + limit)
// //     const mockList = List.filter(user => {
// //       if (name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) return false
// //       return true
// //     })

// //     const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
// //     return {
// //       code: 20000,
// //       count: mockList.length,
// //       list: pageList
// //     }

// //   },
// //   /**
// //    * 增加用户
// //    * @param name, addr, age, birth, sex
// //    * @return {{code: number, data: {message: string}}}
// //    */
// //   createUser: config => {
// //     const {
// //       name,
// //       addr,
// //       age,
// //       birth,
// //       sex
// //     } = JSON.parse(config.body)
// //     console.log(JSON.parse(config.body))
// //     // unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
// //     List.unshift({
// //       id: Mock.Random.guid(),
// //       name: name,
// //       addr: addr,
// //       age: age,
// //       birth: birth,
// //       sex: sex
// //     })
// //     return {
// //       code: 20000,
// //       data: {
// //         message: '添加成功'
// //       }
// //     }
// //   },
// //   /**
// //    * 删除用户
// //    * @param id
// //    * @return {*}
// //    */
// //   deleteUser: config => {
// //     const {
// //       id
// //     } = param2Obj(config.url)
// //     if (!id) {
// //       return {
// //         code: -999,
// //         message: '参数不正确'
// //       }
// //     } else {
// //       List = List.filter(u => u.id !== id)
// //       return {
// //         code: 20000,
// //         message: '删除成功'
// //       }
// //     }
// //   },
// //   /**
// //    * 批量删除
// //    * @param config
// //    * @return {{code: number, data: {message: string}}}
// //    */
// //   batchremove: config => {
// //     let {
// //       ids
// //     } = param2Obj(config.url)
// //     ids = ids.split(',')
// //     List = List.filter(u => !ids.includes(u.id))
// //     return {
// //       code: 20000,
// //       data: {
// //         message: '批量删除成功'
// //       }
// //     }
// //   },
// //   /**
// //    * 修改用户
// //    * @param id, name, addr, age, birth, sex
// //    * @return {{code: number, data: {message: string}}}
// //    */
// //   updateUser: config => {
// //     const {
// //       id,
// //       name,
// //       addr,
// //       age,
// //       birth,
// //       sex
// //     } = JSON.parse(config.body)
// //     const sex_num = parseInt(sex)
// //     // some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
// //     List.some(u => {
// //       if (u.id === id) {
// //         u.name = name
// //         u.addr = addr
// //         u.age = age
// //         u.birth = birth
// //         u.sex = sex_num
// //         return true
// //       }
// //     })
// //     return {
// //       code: 20000,
// //       data: {
// //         message: '编辑成功'
// //       }
// //     }
// //   }
// // }
// import Mock from 'mockjs'
// // get请求从config.url获取参数，post从config.body中获取参数
// // function param2Obj(url) {
// //     const search = url.split('?')[1]
// //     console.log(search);
// //     if (!search) {
// //         return {}
// //     }
// //     return JSON.parse(decodeURIcomponent('{"' + search.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'))
// // }
// let List = []
// const count = 200
// // / 使用mock生成模拟数据
// for (let i = 0; i < count; i++) {
//   List.push(
//     Mock.mock({
//       id: Mock.Random.guid(),
//       name: Mock.Random.cname(),
//       addr: Mock.mock('@county(true)'),
//       'age|18-60': 1,
//       birth: Mock.Random.date(),
//       sex: Mock.Random.integer(0, 1)
//     })
//   )
// }

// export default {
//   /**
//    * 获取列表
//    * 要带参数 name, page, limt; name可以不填, page, limit有默认值
//    * @param name, page, limit
//    * @return {{code: number, count: number data: *[]}}
//    */
//   getUserList: config => {
//     // const { name, page = 1, limit = 20 } = param2Obj(config.url)
//     // 处理请求头，将字符串转换为对象
//     const search = config.url.split('?')[1]
//     const { name, page, limit = 20 } = JSON.parse(decodeURIComponent('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}'))
//     console.log('name:' + name, 'page:' + page, '分页大小limit:' + limit)
//     // 先判断搜索框是否输入名字，再核对列表的人员姓名及地址，返回符合要求的数据
//     const mockList = List.filter(user => {
//       if (name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) return false
//       return true
//     })
//     // 设置每个分页行的显示个数
//     const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
//     return {
//       code: 20000,
//       count: mockList.length,
//       list: pageList
//     }
//   },

//   /**
//    * 增加用户
//    * @param name, addr, age, birth, sex
//    * @return {{code: number, data: {message: string}}}
//    */
//   createUser: config => {
//     const { name, addr, age, birth, sex } = JSON.parse(config.body)
//     // console.log(name)
//     List.unshift({
//       id: Mock.Random.guid(),
//       name: name,
//       addr: addr,
//       age: age,
//       birth: birth,
//       sex: sex
//     })
//     return {
//       code: 20000,
//       data: {
//         message: '添加成功'
//       }
//     }
//   },
//   /**
//    * 删除用户
//    * @param name
//    * @return {{*}}}
//    */
//   deleteUser: config => {
//     const { params: { id } } = JSON.parse(config.body)
//     // console.log(name);
//     if (!id) {
//       return {
//         code: -999,
//         message: '参数不正确'
//       }
//     } else {
//       List = List.filter(u => u.id !== id)  // 执行删除 
//       return {
//         code: 2000,
//         message: '删除成功'
//       }
//     }
//   },

//   /**
//    * 批量删除
//    * @param config
//    * @return {{code: number, data: {message: string}}}
//    */
//   // batchremove: config => {
//   //     let {ids} = JSON.parse(config.url)
//   //     ids = ids.split(',')
//   //     List = List.filter(u => !ids.includes(u.id))
//   //     return {
//   //         code: 20000,
//   //         data: {
//   //             message: '批量删除成功'
//   //         }
//   //     }
//   // },

//   /**
//    * 修改用户
//    * @param id, name, addr, age, birth, sex
//    * @return {{code: number, data: {message: string}}}
//    */
//   updateUser: config => {
//     const { id, name, addr, age, birth, sex } = JSON.parse(config.body)
//     const sex_num = parseInt(sex)
//     List.some(u => {
//       if (u.id === id) {
//         u.name = name
//         u.addr = addr
//         u.age = age
//         u.birth = birth
//         u.sex = sex_num
//         return true
//       }
//     })
//     return {
//       code: 20000,
//       data: {
//         message: '编辑成功'
//       }
//     }
//   }
// }




// }
// import { make } from 'core-js/core/object'
// import { construct } from 'core-js/fn/reflect'
// import { search } from 'core-js/fn/symbol'
import Mock from 'mockjs'

// get请求从config.url获取参数，post从config.body中获取参数
function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
  )
}

let List = []
const count = 200

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: Mock.Random.guid(i),
      name: Mock.Random.cname(),
      addr: Mock.mock('@county(true)'),
      'age|18-60': 1,
      birth: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1)
    })
  )
}

export default {
  /**
   * 获取列表
   * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
   * @param name, page, limit
   * @return {{code: number, count: number, data: *[]}}
   */
  getUserList: config => {
    const { name, page = 1, limit = 20 } = param2Obj(config.url)
    console.log('name:' + name, 'page:' + page, '分页大小limit:' + limit)//List数据试生成成功的
    // const mockList = List.filter(user => {
    //   if (name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1){return false} 
    //   // return user
    //   user
    // })
    var mockList = List
    console.log('aaa',name);
    
    var mockList1 = List.filter(user => {
     
      if (user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) {
        console.log('没有查找到的');
        return false
        

      } 
        console.log('找到的');
        return true
      
    //  return true
    })

// if(name){
//   // 如果name存在 就进行过滤
//   return List.filter(item =>{
//     return
//   })
// }






    // var mockList = List
    // if(name){
    //   return List.filter(user => {
    //     if (!(name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1))return true

    //   })

    // }else{
    //  mockList = List
    // }

    // let mockList = []
    // mockList = List.filter(user => {
    // if(!(name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1)){
    //   return true

    // }else{
    //   return false
    // }

    // return turn
    // else{ return true }
    // user

    // })
    // console.log(mockList);
    // let arr =[]
    // const arr1= List.filter(user => {
    //   console.log('name==',name);
    //   if (name &user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) {
    //     return arr = []
    //   } else {
    //     return arr.push()
    //   }
    // })
    // console.log('cha--',arr);

    // })
    // const mockname = name
    //  var mockList = List
    // mockList .map(user  => {
    //   // console.log('222222--');
    //   if(user.find(k => {return k.name == name})){
    //     console.log('aaa');
    //     let arr = []
    //     let arr1 =  arr.push(user)
    //     this.mockList = arr1
    //   }else{
    //     mockList 
    //     console.log('nnn');

    //   }
    // })
    // if(user.includes(name) ){
    //   return user
    // }else{
    //   return mockList 

    // }

    //  if( mockList.find(user=> {user.name = name})){
    //   return 'aa'
    //  }else{
    //   console.log('mm');
    //  }
    // 这个是成功的 
    // let acc = mockList.find(k => {return k.name == name})
    // console.log('aa',acc);
    // if(acc !== undefined){
    //   // this.List = [acc]
    //   console.log('ssss');
    // }
    // function findname(aname) {
    //   return aname = name
    //   console.log('namea-',name);

    // }
    // mockList.find(mockList.filter.name === name)
    // for (const key in mockList){
    //   delete this.mockList[key].id
    // }
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 20000,
      count: mockList.length, //0
      list: pageList,//0
      limit,
      data:mockList1
      
    }
  },
  /**
   * 增加用户
   * @param name, addr, age, birth, sex
   * @return {{code: number, data: {message: string}}}
   */
  createUser: config => {
    const { name, addr, age, birth, sex } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    List.unshift({
      id: Mock.Random.guid(),
      name: name,
      addr: addr,
      age: age,
      birth: birth,
      sex: sex
    })
    return {
      code: 20000,
      data: {
        message: '添加成功'
      }
    }
  },
  /**
   * 删除用户
   * @param id
   * @return {*}
   */
  deleteUser: config => {
    console.log('1212', config);
    const { body: id } = param2Obj(config.url)
    const bodyid = JSON.parse(config.body)
    console.log('id----', bodyid.id);//undefinded
    if (!bodyid.id) {
      return {
        code: -999,
        message: '参数不正确'
      }
    } else {
      List = List.filter(u => u.id !== bodyid.id)
      return {
        code: 20000,
        message: '删除成功'
      }
    }
  },
  /**
   * 批量删除
   * @param config
   * @return {{code: number, data: {message: string}}}
   */
  batchremove: config => {
    let { ids } = param2Obj(config.url)
    ids = ids.split(',')
    List = List.filter(u => !ids.includes(u.id))
    return {
      code: 20000,
      data: {
        message: '批量删除成功'
      }
    }
  },
  /**
   * 修改用户
   * @param id, name, addr, age, birth, sex
   * @return {{code: number, data: {message: string}}}
   */
  updateUser: config => {
    const { id, name, addr, age, birth, sex } = JSON.parse(config.body)
    const sex_num = parseInt(sex)
    List.some(u => {
      if (u.id === id) {
        u.name = name
        u.addr = addr
        u.age = age
        u.birth = birth
        u.sex = sex_num
        return true
      }
    })
    return {
      code: 20000,
      data: {
        message: '编辑成功'
      }
    }
  }
}
