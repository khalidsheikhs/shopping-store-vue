import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

export default [
    {
        path: '/',
        component: Products
    },
    {
        path: '/product/:productId',
        component: ProductDetails,
        name: 'product'
    }
]