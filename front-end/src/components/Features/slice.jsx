import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch products from the API
export const fetchProductsAsync = createAsyncThunk('list/fetchProducts', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        return response.data.results;
    } catch (error) {
        throw error;
    }
});

// Fetch categories from the API
export const fetchCategoriesAsync = createAsyncThunk('list/fetchCategories', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
});

// Initial state of the slice
const initialState = {
    listItems: [],
    categories: [],
    addedItems: [],
    loading: false,
    error: null,
};

// Create the Redux slice
const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description,
                categoryId: action.payload.categorie_id,
            };
            state.addedItems.push(newItem);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.addedItems = state.addedItems.filter(item => item.id !== itemId);
        },
    },
    extraReducers: (builder) => {
        // Handle the asynchronous action for fetching products
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.listItems = action.payload;
            })
            .addCase(fetchProductsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
        
        // Handle the asynchronous action for fetching categories
        builder
            .addCase(fetchCategoriesAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategoriesAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export actions and reducer
export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;
