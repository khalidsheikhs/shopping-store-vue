import axios from 'axios'

const api = 'https://fakestoreapi.com/'

export const fetchProducts = async () => {
    return await axios.get(api + 'products').catch((err) => {
        console.log('ERR', err);
    });
}

export const fetchProductById = async (id) => {
    return await axios.get(api + 'products/' + id).catch((err) => {
        console.log('ERR', err);
    });
}