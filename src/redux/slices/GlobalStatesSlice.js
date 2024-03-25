import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topNavbarHeight: 0,
  mobileSidebar: false,
  RegisterInputsFocus: {
    name: { active: false, value: "" },
    email: { active: false, value: "" },
    password: { active: false, value: "" },
    phone: { active: false, value: "" },
  },
  loading: false,
  user: null,
};

const GlobalSates = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTopNavbarHeight: (state, action) => {
      state.topNavbarHeight = action.payload;
    },

    setMobileSidebar: (state, action) => {
      state.mobileSidebar = action.payload;
    },

    setRegisterInputFocus: (state, action) => {
      const type = action.payload.type;
      const tmp = { ...state.RegisterInputsFocus[type] };

      if (action.payload.active !== undefined) {
        tmp["active"] = action.payload.active;
      }

      if (action.payload.value !== undefined) {
        tmp["value"] = action.payload.value;
      }

      for (const key in state.RegisterInputsFocus) {
        state.RegisterInputsFocus[key]["active"] = false;
      }

      state.RegisterInputsFocus[type] = tmp;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },

  },
});

export default GlobalSates.reducer;
export const {
  setTopNavbarHeight,
  setMobileSidebar,
  setRegisterInputFocus,
  setLoading,
  setUser,
} = GlobalSates.actions;
