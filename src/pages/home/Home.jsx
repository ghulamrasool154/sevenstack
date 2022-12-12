import "./Home.css"
import HeroSection from '../../components/herosection/HeroSection'
import ServiceSection from "../../components/servicesection/ServiceSection"
import Header from "../../layouts/header/Header"
import Footer from "../../layouts/footer/Footer"
const Home = () => {
    return (
        <>
            <section className="Home">
                <HeroSection />
                <ServiceSection />
            </section>
        </>

    )
}

export default Home