/**
 * * 用户信息
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { GLOBAL_DATA} from '@/global/constants'

type GlobalDataStoreState = {
    // 需要做账的公司列表
    accountCompanyList: Array<{value: string, name: string}>,

    // 做账的公司
    accountCompany?: {
        id: string,
        name: string
    } | null,

    // 账期
    accountDate?: string | null
}

type GlobalDataStoreActions = {
    setAccountCompanyList: (
        accountCompanyList: GlobalDataStoreState['accountCompanyList']
    ) => void,
    setAccountCompany: (
        accountCompany: GlobalDataStoreState['accountCompany']
    ) => void,
    setAccountDate: (
        accountDate: GlobalDataStoreState['accountDate']
    ) => void,
}

type AccountCompanyStore = GlobalDataStoreState & GlobalDataStoreActions

export const globalDataStore = create<AccountCompanyStore>()(
    persist(
        (set) => ({
            accountCompanyList: [
                {
                    value: '1',
                    name: '公司1'
                },
                {
                    value: '2',
                    name: '公司2'
                },
                {
                    value: '3',
                    name: '公司3'
                },
            ],
            accountCompany: {
                id: '',
                name: ''
            },
            accountDate: '',
            setAccountCompanyList: (accountCompanyList) => set({accountCompanyList}),
            setAccountCompany: (accountCompany) => set({accountCompany}),
            setAccountDate: (accountDate) => set({accountDate})
        }),
        {
            name: GLOBAL_DATA
        }
    )
)
