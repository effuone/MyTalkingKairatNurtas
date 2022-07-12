import './Layout.module.css'
import scene from '../../../assets/scene.jpg'
const Layout = ({children}) => {
    return(
        <section style={{
            backgroundImage: `url(${scene})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>

            {children}
        </section>
    )
}
export default Layout