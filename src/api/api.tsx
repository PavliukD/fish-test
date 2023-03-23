import axios from "axios";
import { Product } from "../utils/types";

const URL = 'https://dummyjson.com'

axios.defaults.baseURL = URL

type Response = {
    products: Product[]
}


export const api = {
    get: async () => {
        try {
            const resp = await axios.get('/products')
            return resp.data.products as Response
        } catch (e) {
            return e
        }
    },
    add: async (newProduct: Product) => {
        const resp = await axios.post('/products/add', newProduct)

    }
}
