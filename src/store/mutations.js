export const LOAD_PRODUCTS = (state, products) => {
    state.products = products
}

export const SORT_PRODUCTS = (state, products) => {
    state.products = products
}

export const SELECT_PRODUCT = (state, product) => {
    state.selectedProduct = product
}

export const ADD_ITEM = (state, item) => {
    state.cartItems.push(item)
}

export const UPDATE_ITEM = (state, item) => {
    let index = state.cartItems.findIndex(item_ => item_.id === item.id) //finding index of the item
    let newArray = [...state.cartItems] //making a new array
    newArray[index].count = item.count //changing value in the new array
    state.cartItems =  newArray
}

export const REMOVE_ITEM = (state, item) => {
    state.cartItems = state.cartItems.filter(item_ => item_.id !== item.id)
}