import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Header from './components/Header.vue';



export const routes = [
    { path: '', name: 'home', components: { 
        default: Home,
        'header-top': Header
    }},
    //By adding :id, you make it so that the URL is set dynamically, in Header.vue "id" is hardcoded to 10
    // { path: '/user/:id', component: User}
    { path: '/user', components: { 
        default: User,
        'header-bottom': Header
    }, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'},

    ]},
    { path: '/redirect-me', redirect: {name: 'home'}},
    //Redirecting, star catches all possible routing names not included and redirects
    { path: '*', redirect: '/'}

];