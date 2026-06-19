import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { User, RegisterFormData, LoginFormData } from '../types/index'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const getUserFromLocalStorage = (): User | null => {
  try {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  } catch {
    return null
  }
}

const initialState: AuthState = {
  user: getUserFromLocalStorage(),
  isAuthenticated: !!getUserFromLocalStorage(),
  loading: false,
  error: null,
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData: RegisterFormData, { rejectWithValue }) => {
    try {
      // Check if user already exists
      const usersStr = localStorage.getItem('users')
      const users: User[] = usersStr ? JSON.parse(usersStr) : []
      
      const existingUser = users.find(u => u.email === userData.email)
      if (existingUser) {
        return rejectWithValue('Bu email allaqachon ro\'yxatdan o\'tgan')
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        createdAt: new Date().toISOString(),
      }

      // Store user credentials (in real app, this should be hashed)
      const credentials = {
        email: userData.email,
        password: userData.password,
      }
      
      const credentialsStr = localStorage.getItem('credentials')
      const credentialsList = credentialsStr ? JSON.parse(credentialsStr) : []
      credentialsList.push(credentials)
      localStorage.setItem('credentials', JSON.stringify(credentialsList))

      // Store user
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))

      // Auto login after registration
      localStorage.setItem('user', JSON.stringify(newUser))

      return newUser
    } catch (error) {
      return rejectWithValue('Ro\'yxatdan o\'tishda xatolik yuz berdi')
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginFormData, { rejectWithValue }) => {
    try {
      const credentialsStr = localStorage.getItem('credentials')
      const credentialsList = credentialsStr ? JSON.parse(credentialsStr) : []
      
      const validCredentials = credentialsList.find(
        (c: any) => c.email === credentials.email && c.password === credentials.password
      )

      if (!validCredentials) {
        return rejectWithValue('Email yoki parol noto\'g\'ri')
      }

      const usersStr = localStorage.getItem('users')
      const users: User[] = usersStr ? JSON.parse(usersStr) : []
      
      const user = users.find(u => u.email === credentials.email)
      if (!user) {
        return rejectWithValue('Foydalanuvchi topilmadi')
      }

      localStorage.setItem('user', JSON.stringify(user))
      return user
    } catch (error) {
      return rejectWithValue('Tizimga kirishda xatolik yuz berdi')
    }
  }
)

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('user')
  return null
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
        state.isAuthenticated = false
        state.error = null
      })
  },
})

export const { clearError } = authSlice.actions
export default authSlice.reducer
