import User from './components/user/User'
import Home from './components/Home'

// lazy loading:
const UserStart = resolve =>{
  require.ensure(['./components/user/UserStart'],()=>{
    resolve(require('./components/user/UserStart'))
  })
}

// the next tow will be bundled together in one bundle
const UserEdit = resolve =>{
  require.ensure(['./components/user/UserEdit'],()=>{
    resolve(require('./components/user/UserEdit'))
  },'bundle-group')
}
const UserDetail = resolve =>{
  require.ensure(['./components/user/UserDetail'],()=>{
    resolve(require('./components/user/UserDetail'))
  },'bundle-group')
}

export const routes = [
  {
    path:'/',
    component:Home,
    name:'home'
  },
  {
    path:'/user',
    component:User,
    children:[
      {
        path:'',
        component:UserStart,
      },
      {
        path:':id',
        component:UserDetail,
        props:true
      },
      {
        path:':id/edit',
        component:UserEdit,
        name:'userEdit'
      },
    ]
  },
  {
    path:'/redirect-me',
    redirect:{
      name:'home'
    }
  },
  {
    path:'/*',
    redirect:{
      name:'home'
    }
  }
]
