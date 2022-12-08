import "./Home.css"
import HeroSection from '../../components/herosection/HeroSection'
import ServiceSection from "../../components/servicesection/ServiceSection"
import Header from "../../layouts/header/Header"
import Footer from "../../layouts/footer/Footer"
const Home = () => {
    return (
        <>
            <Header />
            <section className="Home">
                <HeroSection />
                <ServiceSection />
            </section>
            <Footer />
        </>

    )
}

export default Home