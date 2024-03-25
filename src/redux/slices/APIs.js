import { createSlice } from "@reduxjs/toolkit";

const ApisSlice = createSlice({
  initialState: {
    textSummarize: {
      dataToSend: {
        text: "",
        range: 30,
        type: "text",
      },
      dataToReceive: "",
      loading: false,
      error: {},
    },
  },

  name: "apis",

  reducers: {
    setTextSummarizeRange: (state, action) => {
      state.textSummarize.dataToSend.range = action.payload;
    },

    setTextSummarizeType: (state, action) => {
      if (action.payload === "text" || action.payload === "bullets") {
        state.textSummarize.dataToSend.type = action.payload;
      }
    },

    setTextSummarizeText: (state, action) => {
      state.textSummarize.dataToSend.text = action.payload;
    },

    setTextSummarizeLoading: (state, action) => {
      state.textSummarize.loading = action.payload;
    },

    setDataToReceive: (state, action) => {
      state.textSummarize.dataToReceive = action.payload;
    },
    setError: (state, action) => {
      state.textSummarize.error = action.payload;
    },
  },
});

export default ApisSlice.reducer;

export const {
  setTextSummarizeText,
  setTextSummarizeType,
  setTextSummarizeRange,
  setTextSummarizeLoading,
  setDataToReceive,
  setError
} = ApisSlice.actions;
