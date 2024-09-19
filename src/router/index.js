import {createRouter , createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeViews.vue'
import JobsView from '@/views/JobsView.vue'
import notFoundView from '@/views/notFoundView.vue'
import JobDetailsView from '@/views/JobDetailsView.vue'
import AddJobView from '@/views/AddJobView.vue'
import EditJobView from '@/views/EditJobView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path : '/',
            name : 'home',
            component : HomeView
        },
        {
            path : '/jobs',
            name : 'jobs' , 
            component : JobsView
        },
        {
            path : '/jobs/:id',
            name : 'jobDetails',
            component : JobDetailsView
        },
        {
            path : '/jobs/edit/:id',
            name : 'jobEdit',
            component : EditJobView
        },
        {
            path : '/jobs/add',
            name : 'addJobs',
            component : AddJobView
        },
        {
            path : '/:catchAll(.*)',
            name : 'notFound',
            component : notFoundView
        }
    ]
})

export default router