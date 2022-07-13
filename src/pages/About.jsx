import {Link} from "react-router-dom";

const About = ()=> {
    return (
        <section className="jumbotron text-center" style={{background: 'white', paddingTop: '100px'}}>
            <div className="container">
                <h1 className="jumbotron-heading">My Dancing Kaireke</h1>
                <p className="lead text-muted">Давно мечтали посетить концерты талантливейшего артиста нашей страны?
                    Теперь это не проблема,
                    ведь карманный Кайрош будет следовать за вами везде </p>
                <p>
                    <a as={Link} to="/play" className="btn btn-danger  btn-lg">LET'S GET STARTED!</a>
                </p>
            </div>
        </section>
    )
}
export default About