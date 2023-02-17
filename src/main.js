import { createApp } from 'vue';
import { createWebHistory,createRouter } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import UsersList from './components/users/UsersList.vue'

const app = createApp(App)
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/teams'},
        {path:'/teams',component:TeamsList,children:[
            {path:':teamId',component:TeamMembers,props:true},
        ]},
        {path:'/users',component:UsersList},
        {path:'/:notFound(.*)',redirect:'/teams'},
    ],
})

app.use(router)

app.mount('#app');
