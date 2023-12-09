import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: "Pablo",
    age: 25
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    }
  }
})

//  exportando as ações
export const { setName, setAge } = slice.actions;
export default slice.reducer;

/*
  O createSlice possui a propriedade initialState que são os dados iniciais
  e a propriedade reducers que são as funções que modificam os dados iniciais
*/