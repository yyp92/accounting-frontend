import {isFunction} from 'lodash-es'

// 下载文件
export const downloadFile = (
    output: any,
    downloadFileName: string = '未命名文件',
    handleCancel: () => void = () => {}
) => {
    if (!output && isFunction(handleCancel)) {
        handleCancel()
        return
    }
  
    fetch(output, {responseType: 'blob'} as any)
        .then((res: any) => res?.blob?.())
        .then((res: any) => {
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(res)
            link.download = downloadFileName
            link.style.display = 'none'
            document.body.appendChild(link)
            link.click()
        }).catch(e => {
            console.error('downloadFile-error', e)
        })
        .finally(() => {
            isFunction(handleCancel) && handleCancel()
        })
}