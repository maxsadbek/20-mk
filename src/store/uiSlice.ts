import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  isMobileMenuOpen: boolean
}

const initialState: UIState = {
  isMobileMenuOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload
    },
  },
})

export const { toggleMobileMenu, setMobileMenuOpen } = uiSlice.actions
export default uiSlice.reducer
