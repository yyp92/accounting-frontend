/**
 * * 用户信息
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PERMISSION} from '@/global/constants'

type PermissionStoreState = {
    permissions: string[]
}

type PermissionStoreActions = {
    setPermissions: (permissions: string[]) => void,
    clearPermissions: () => void
}

type PermissionStore = PermissionStoreState & PermissionStoreActions

export const permissionStore = create<PermissionStore>()(
    persist(
        (set) => ({
            permissions: [],
            setPermissions: (permissions) => set({permissions}),
            clearPermissions: () => set({permissions: []}),
        }),
        {
            name: PERMISSION
        }
    )
)
