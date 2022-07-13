import Content from "../components/common/content/Content"
import About from "../pages/About"
export const publicRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/', element: <About/>, exact: true},
    {path: '/play', element: <Content />, exact: true}
]