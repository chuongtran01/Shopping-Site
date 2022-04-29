import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/Auth/components/userSlice';
import cartReducer from '../features/Cart/cartSlice';
import counterReducer from '../features/Counter/counterSlice';


const rootReducer = {
    count: counterReducer,
    cart: cartReducer,
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store