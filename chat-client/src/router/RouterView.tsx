import { Suspense } from 'react' //引入白屏优化
//      history路由模式  hash路由模式 
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RouterListItem } from './router'
import routerConfig from './routerConfig'
import Loading from '@/components/loading'

function RouderView() {
    // 递归渲染
    const { routerList, model } = routerConfig
    const renderRouter = (arr: Array<RouterListItem>) => {
        return arr.map((item: RouterListItem, index: number) => {
            return <Route key={index} path={item.path} element={item.reducer ?
                <Navigate to={item.reducer}></Navigate> : <item.component></item.component>}>
                {
                    item.children && renderRouter(item.children)
                }
            </Route>
        })
    }
    return (
        <Suspense fallback={<Loading />}>
            {
                model === 'history' ? //判断路由模式
                    <BrowserRouter>
                        <Routes>
                            {renderRouter(routerList)}
                        </Routes>
                    </BrowserRouter> :
                    <HashRouter>
                        <Routes>
                            {renderRouter(routerList)}
                        </Routes>
                    </HashRouter>
            }
        </Suspense>
    )
}

export default RouderView