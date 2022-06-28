import { createSlice } from "@reduxjs/toolkit";

export const formReducer = createSlice({
  name: "products",
  initialState: {
    value: [],
    editindex: "",
    valueofupdate: "",
    delete: "",
  },
  reducers: {
    get: (state, action) => {
      console.log(state);
      state.value.push(action.payload);

    },
    edit: (state, action) => {
      state.editindex = action.payload;
    },
    updatevalue: (state, action) => {
      state.valueofupdate = action.payload;
      const existingUser = state.value.find((user) => user.id === state.editindex);
      if (existingUser) {
        existingUser.Id = state.valueofupdate.Id;
        existingUser.Name = state.valueofupdate.Name;
        existingUser.Price = state.valueofupdate.Price;
        existingUser.File = state.valueofupdate.File;
        existingUser.DropValue = state.valueofupdate.DropValue;
      }
    },
    Removedetails: (state, action) => {
      // state.value.splice(state, 1);
      state.delete = action.payload;
      const existingUser = state.value.find((user) => user.id === state.delete);
      if (existingUser) {
        state.value = state.value.filter((user) => user.id !== state.delete);
      }
    },
  },
});

export const { get, edit, updatevalue, Removedetails } = formReducer.actions;
export const selectProduct = (state) => state.products.value;
export const EditIdex = (state) => state.products.editindex;
export const update = (state) => state.products.valueofupdate;
export const remove = (state) => state.products.delete;



export default formReducer.reducer;


