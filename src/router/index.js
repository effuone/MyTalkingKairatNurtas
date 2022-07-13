import About from "../pages/About"
import MusicPage from "../pages/MusicPage"
import Content from '../components/common/content/Content'
export const publicRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/music', element: <MusicPage/>, exact: true},
    {path: '/play', element: <Content />, exact: true}
]