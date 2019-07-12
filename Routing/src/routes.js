import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';


export const routes = [
    { path: '', component: Home},
    //By adding :id, you make it so that the URL is set dynamically, in Header "id" is hardcoded to 10
    // { path: '/user/:id', component: User}
    { path: '/user', component: User, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit},

    ]}

];