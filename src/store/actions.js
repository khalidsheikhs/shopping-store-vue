import {fetchProductById, fetchProducts} from '../services/apis'

export const loadProducts = ({ commit }) => {
    fetchProducts().then(res => {
        if (res && res.data) commit('LOAD_PRODUCTS', res.data)
    })
}

export const sortProducts = (context, type) => {
    let products = context.state.products.slice().sort(
        (a, b) => (type === "lowest" ? ((parseFloat(a.price) > parseFloat(b.price)) ? 1 : -1) :
            type === "highest" ? ((parseFloat(a.price) < parseFloat(b.price)) ? 1 : -1) :
                ((a.id < b.id) ? 1 : -1)))
    context.commit('SORT_PRODUCTS', products)
}

export const selectProduct = ({ commit }, id) => {
    if (id === -1) {
        commit('SELECT_PRODUCT', {})
    } else {
        fetchProductById(id).then(res => {
            if (res && res.data) commit('SELECT_PRODUCT', res.data)
        })
    }
}

export const addItem = (context, item) => {
    const cartItems = context.state.cartItems.slice()
    let alreadyInCart = false;
    cartItems.forEach((item_) => {
        if (item_.id === item.id) {
            let count = item_.count + 1
            // dispatch(changeItem({ ...item, count: count }));
            context.commit('UPDATE_ITEM', { ...item, count: count })
            alreadyInCart = true
        }
    });
    if (alreadyInCart === false) {
        context.commit('ADD_ITEM', { ...item, count: 1 })
    }
}

export const removeItem = (context, item) => {
    const cartItems = context.state.cartItems.slice()
    let stillInCart = true
    cartItems.forEach((item_) => {
        if (item_.id === item.id && item_.count > 0) {
            let count = item_.count - 1
            context.commit('UPDATE_ITEM', { ...item, count: count })
            stillInCart = false;
        }
    });
    if (stillInCart === true || item.count === 0) { // cartItems.push({ ...product, count: 1 });
        const index = cartItems.indexOf(item)
        if (index > -1)
            context.commit('REMOVE_ITEM', item) // cartItems.splice(index, 1);
    }


}