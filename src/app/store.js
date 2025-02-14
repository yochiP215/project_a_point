import { configureStore } from "@reduxjs/toolkit"

import contactSlice from "../features/contact/contactSlice"
export const store = configureStore({
    reducer: {
        contacts: contactSlice,
    }

})