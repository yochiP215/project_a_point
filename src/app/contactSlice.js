import {creatSlice} from "@reduxjs/toolkit" 
const initialState={
    arrContacts:[],
    currentContact:null
} 
const contactSlice=creatSlice({
    name:"contactSlice",
    initialState,
    reducers:{
        addContact:(state,action)=>{
           const exist= state.find(contact=>contact.id===action.payload.id);
           if(!exist)
            state.push(action.payload);
        },
        updateContact:(state,action)=>{
            const index=state.findIndex(contact=>contact.payload.id);
            if(index!==-1){
                state[index]={...state[index],...action.payload};
            }


        }

    }
});
export const {addContact,updateContact}=contactSlice.actions;
export default contactSlice.reducers;