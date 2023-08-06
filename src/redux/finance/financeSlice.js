import { createSlice } from '@reduxjs/toolkit';
import {
    createTransactionThunk,
    delTransactionThunk,
    fetchAllTransactionsThunk,
    getSummaryTransactionThunk,
    getTransactionCategoriesThunk,
    updTransactionThunk,
} from './financeThunks';

const financeSlice = createSlice({
    name: 'finance',
    initialState: { totalBalance: 0, data: null, categories: null },
    extraReducers: builder => {
        builder
            .addCase(createTransactionThunk.fulfilled, (state, action) => {})
            .addCase(fetchAllTransactionsThunk.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(updTransactionThunk.fulfilled, (state, action) => {})
            .addCase(delTransactionThunk.fulfilled, (state, action) => {
                const index = state.data.findIndex(
                    transaction => transaction.id === action.payload
                );
                state.data.splice(index, 1);
            })
            .addCase(
                getTransactionCategoriesThunk.fulfilled,
                (state, action) => {
                    state.categories = action.payload;
                }
            )
            .addCase(getSummaryTransactionThunk.fulfilled, (state, action) => {
                state.totalBalance = action.payload;
            });
    },
});

export const financeReducer = financeSlice.reducer;
