import {createRouter, createWebHistory} from "vue-router";
import Products from "@/components/Products";
import ProductDetails from "@/components/ProductDetails";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Products},
        {path: '/:id', component: ProductDetails}
    ]
})
