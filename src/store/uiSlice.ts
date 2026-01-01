import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortKey = "price" | "marketCap" | "change24h";
export type SortOrder = "asc" | "desc";

interface UIState {
  globalSort: {
    sortKey: SortKey;
    sortOrder: SortOrder;
  };
}

const initialState: UIState = {
  globalSort: {
    sortKey: "marketCap",
    sortOrder: "desc",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setGlobalSort: (state, action: PayloadAction<SortKey>) => {
      if (state.globalSort.sortKey === action.payload) {
        state.globalSort.sortOrder =
          state.globalSort.sortOrder === "asc" ? "desc" : "asc";
      } else {
        state.globalSort.sortKey = action.payload;
        state.globalSort.sortOrder = "desc";
      }
    },
  },
});

export const { setGlobalSort } = uiSlice.actions;
export default uiSlice.reducer;
