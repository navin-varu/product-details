import { configureStore } from '@reduxjs/toolkit';

import productReducer from './features/product/reducerSlices/productSlice';

export default configureStore({
    reducer: {
        product: productReducer
    },
});