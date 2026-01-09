/**
 * * 用户信息
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { THEME_TOKEN} from '@/global/constants'

type AntdTokenStoreState = {
    isDark: boolean
}

type AntdTokenStoreActions = {
    setIsDark: (
        isDark: AntdTokenStoreState['isDark']
    ) => void,
}

type AntdTokenStore = AntdTokenStoreState & AntdTokenStoreActions

export const antdTokenStore = create<AntdTokenStore>()(
    persist(
        (set) => ({
            isDark: false,
            setIsDark: (isDark) => set({isDark})
        }),
        {
            name: THEME_TOKEN
        }
    )
)