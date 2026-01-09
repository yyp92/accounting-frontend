/**
 * * 用户信息
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { USER_INFO} from '@/global/constants'

type UserInfoStoreState = {
    userInfo: {
        userId?: string,
        userName?: string
    }
}

type UserInfoStoreActions = {
    setUserInfo: (
        userInfo: UserInfoStoreState['userInfo']
    ) => void,
    clearUserInfo: () => void
}

type UserInfoStore = UserInfoStoreState & UserInfoStoreActions

export const userInfoStore = create<UserInfoStore>()(
    persist(
        (set) => ({
            userInfo: {
                userName: '小明',
                userId: '111'
            },
            setUserInfo: (userInfo) => set({userInfo}),
            clearUserInfo: () => set({userInfo: {}})
        }),
        {
            name: USER_INFO
        }
    )
)
