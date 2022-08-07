import Cookies from "js-cookie"
// import router from "src----配置代理不会 没写完/router"
export default {
    state: {
        isCollapse: false,
        tabsList: [{
            path: '/home',
            name: 'home',
            label: '首页',
            icon: 'home'
        },],
        currentMenu: null,
        menu:[]
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
            // console.log( isCollapse);

        },
        // 面包屑逻辑
        selectMenu(state, val) {
            // console.log( selectMenu );
            // console.log("selectMenu", state, val)//val是一个对象 会返回 icon label name path url 
            // console.log(typeof state.tabsList + 'shuzu2')
            if (val.name !== 'home') {
                state.currentMenu = val
                // console.log('mbx--val',val);
                // findIndex（）和indexOf（）方法一样  找到返回元素的位置  找不到就返回-1
                const result = state.tabsList.findIndex(item => item.name === val.name)
                // 等于-1  说明没找到
                if (result === -1) {
                  state.tabsList.push(val)
                //   console.log('tablist--',state.tabsList);
                    // console.log(typeof state.tabsList + 'shuzu')
                    // console.log(X + 'push')


                } else {
                    state.currentMenu = null
                    // console.log('aa')
                }

            }
        },
        closeTag(state,val){
            // console.log('closeYag',val);//val是一个对象 会返回 icon label name path url 
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result,1)
        },
        setMenu(state,val){
            state.menu = val
            Cookies.set('menu',JSON.stringify(val))

        },
        clearMenu(state){
            state.Menu = []
            Cookies.remove('menu')
        },
        addMenu(state,router){
            if(!Cookies.get('menu')){
                Cookies.set("menu", JSON.stringify(state.menu));
            }
            const menu = JSON.parse(Cookies.get('menu'))
            console.log('menu------',menu);
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item =>{
                        item.component =() => import(`../pages/${item.url}`)
                        return item
                    })
                  
                    menuArray.push(...item.children)
                }else{
                    item.component =() => import(`../pages/${item.url}`)
                    menuArray.push(item)
                     
                }
                
            });
            console.log('aaa===',menu);
            // 路由动态添加
            menuArray.forEach(item =>{
                router.addRoute('Main',item)
            })


        }
    }
}