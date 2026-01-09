/**
 * * 根据权限来生成菜单
 * @param menu 
 * @param permissions 
 * @returns 
 */
export const filterMenu = (menu: any[], permissions: string[]) => {
    const newList: any = []

    menu.forEach((group: any) => {
        if (permissions.includes(group.key)) {
            const data = {...group}
            delete data.hideInMenu
            delete data.showFullScreen

            if (Array.isArray(data?.children)) {
                const children = data.children
                    .filter((item: any) => permissions.includes(item.key) && !item?.hideInMenu)
                    .map((item: any) => {
                        const newItem = {...item}
                        delete newItem.hideInMenu
                        delete newItem.showFullScreen

                        return newItem
                    })
                data.children = children
            }

            newList.push(data)
        }
    })

    return newList
}