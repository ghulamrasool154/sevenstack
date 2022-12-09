import './AboutVision.css'
import mision from '../../assets/images/Mission 3.png'
const AboutVision = () => {
    return (
        <section className='AboutVision'>
            <div className="container-xxl">
                <div className="row vision--row">
                    <div className="col-md-7 col-12 "></div>
                    <div className="col-md-5 col-12">
                        <h2 className='our--vision--mission'>Our Vision</h2>
                        <p className='our--vison--disc'>
                            We are a full service Information Technology Solutions Company serving small, medium and Fortune 500 companies with special focus on Government and Public Sector
                        </p>
                    </div>
                </div>
                <div className="row mission--row">

                    <div className="col">
                        <h2 className='our--vision--mission'>Our Mission</h2>
                        <div className="mission--wrapper">
                            <div className="mission--item">
                                <div className='mision--head'>
                                    <img src={mision} alt="" />
                                    <h4>Mission Title</h4>
                                </div>
                                <div className="mission--disc">
                                    <p>
                                        We believe that our clients approach to us for their tailored needs of web solutions. For this, we provide them top-notch services from strategizing to implementation  of interactive web development services.
                                    </p>
                                </div>
                            </div>
                            <div className="mission--item">
                                <div className='mision--head'>
                                    <img src={mision} alt="" />
                                    <h4>Mission Title</h4>
                                </div>
                                <div className="mission--disc">
                                    <p>
                                        We believe that our clients approach to us for their tailored needs of web solutions. For this, we provide them top-notch services from strategizing to implementation  of interactive web development services.
                                    </p>
                                </div>
                            </div>
                            <div className="mission--item">
                                <div className='mision--head'>
                                    <img src={mision} alt="" />
                                    <h4>Mission Title</h4>
                                </div>
                                <div className="mission--disc">
                                    <p>
                                        We believe that our clients approach to us for their tailored needs of web solutions. For this, we provide them top-notch services from strategizing to implementation  of interactive web development services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutVision