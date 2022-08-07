import Mock from 'mockjs'
import homeApi from './mockServeData/home.js'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission'

Mock.mock('/api/home/getData', homeApi.getStatisticalData)
// 正则的方式拦截
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)

// Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/getUser/, 'get',userApi.getUserList)

Mock.mock(/user\/del/, 'post', userApi.deleteUser)
Mock.mock(/permission\/getMenu/,permissionApi.getMenu)