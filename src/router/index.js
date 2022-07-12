import About from "../pages/About"
import MusicPage from "../pages/MusicPage"
import PlayPage from "../pages/PlayPage"
export const publicRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/music', element: <MusicPage/>, exact: true},
    {path: '/play', element: <PlayPage/>, exact: true}
]