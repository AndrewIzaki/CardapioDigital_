<script>
    import {createMemoryHistory, createRouter} from 'vue-router'
    import ProductMaintain from '@/routes/ProductMaintain.vue';


    const routes = [
        {path:'/Product', component: ProductMaintain},
    ]

    export const router = createRouter ({
        history: createMemoryHistory(),
        routes,
    })

export default router
</script>
