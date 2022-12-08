import AboutVision from '../../components/aboutvision/AboutVision'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import './About.css'

const About = () => {
    return (
        <>
            <Header />
            <section className='about'>
                <div className="container-xxl">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className='about--detial'>
                                <h2>Technology Experts</h2>
                                <p>
                                    We are a full service Information Technology Solutions Company serving small, medium and Fortune 500 companies with special focus on Government and Public Sector
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutVision />
            <Footer />
        </>
    )
}

export default About