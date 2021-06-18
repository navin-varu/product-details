import {
    createSlice, nanoid
}
    from '@reduxjs/toolkit';

const initialState = {
    products: [
        {
            id: 'Ov4frsb_Tk3sHmY1VodwI',
            name: "Maggi",
            description: "It is a beloved food product",
            quantity: 50
        },
        {
            id: '2vggQ31W5-aWqspVrzEYo',
            name: "Pepsodent",
            description: "It is a oral health product",
            quantity: 10
        },
        {
            id: 'WteZUBBYFTPlj2yvizoUm',
            name: "Laptop",
            description: "It is an electronic product",
            quantity: 100
        }
    ],
    product: undefined
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        createProduct: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        updateProduct: (state, action) => {
            let product = action.payload;
            let products = state.products.filter(p => p.id !== product.id);
            state.products = [...products, product];
        },
        removeProduct: (state, action) => {
            let productId = action.payload;
            state.products = state.products.filter(p => p.id !== productId);
        },
        addProduct: state => {
            state.product = undefined;
        },
        editProduct: (state, action) => {
            let productId = action.payload;
            state.product = state.products.find(p => p.id === productId);
        }
    }
});

export const { createProduct, updateProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer

export const selectProducts = state => state.product.products;
export const selectProductById = (state, id) => {
    return state.product.products.find(p => p.id === id);
}