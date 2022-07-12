import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "../router"
const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((route, index)=>
                <Route
                    exact = {route.exact}
                    path = {route.path}
                    element = {route.element}
                    key = {index}
                />
            )}
        </Routes>
    )
}
export default AppRouter