/**
 * * 用户菜单
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { MENUS} from '@/global/constants'

type MenusStoreState = {
    menus: any[]
}

type MenusStoreActions = {
    setMenus: (menus: string[]) => void,
    clearMenus: () => void
}

type MenusStore = MenusStoreState & MenusStoreActions

export const menusStore = create<MenusStore>()(
    persist(
        (set) => ({
            menus: [],
            setMenus: (menus) => set({menus}),
            clearMenus: () => set({menus: []}),
        }),
        {
            name: MENUS
        }
    )
)
