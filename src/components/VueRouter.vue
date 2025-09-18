<script>
    import {createMemoryHistory, createRouter} from 'vue-router'
    import ProductMaintain from '@/routes/ProductMaintain.vue';
import ClientMaintain from '@/routes/ClientMaintain.vue';


    const routes = [
        {path:'/Product', component: ProductMaintain},
        {path:'/Client',  component: ClientMaintain},
    ]

    export const router = createRouter ({
        history: createMemoryHistory(),
        routes,
    })

export default router
</script>
