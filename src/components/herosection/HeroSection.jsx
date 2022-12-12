import './HeroSection.css'
const HeroSection = () => {
    return (
        <section className='HeroSection'>
            <div className="container-xxl">
                <div className="row col-lg-10 m-auto col-sm-12 col-12">
                    <div className="hero--about">
                        <h1 className='hero---title'> <span>Quality</span> Over  Quantity</h1>
                        <p className='hero--disc'>
                            Transforming your ideas in to reality
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection