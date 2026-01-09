import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import router from '@/router/router'
import '@/assets/iconfont/iconfont.css' 
import './app.scss'

function App() {
    return <RouterProvider router={router} />
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
