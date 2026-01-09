/**
 * * 用户信息
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LOGIN_TOKEN} from '@/global/constants'

type UserInfoStoreState = {
    token: string
}

type UserInfoStoreActions = {
    setToken: (token: string) => void,
    clearToken: () => void
}

type UserInfoStore = UserInfoStoreState & UserInfoStoreActions

export const tokenStore = create<UserInfoStore>()(
    persist(
        (set) => ({
            token: '',
            setToken: (token) => set({token}),
            clearToken: () => set({token: ''})
        }),
        {
            name: LOGIN_TOKEN
        }
    )
)
