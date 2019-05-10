import VueRouter from 'vue-router'

import Home from '../components/Home'
import AddSmoothie from '../components/smoothie/AddSmoothie'
import EditSmoothie from '../components/smoothie/EditSmoothie'

export default new VueRouter({
    mode: 'history',
    routes: [
        {name: 'home', path: '/', component: Home},
        {name: 'add-smoothie', path: '/add-smoothie', component: AddSmoothie},
        {name: 'edit-smoothie', path: '/edit-smoothie/:id', component: EditSmoothie}
    ]
})