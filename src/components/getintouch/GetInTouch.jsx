import './GetInTouch.css'
import envalope from '../../assets/images/Contact 1.png'
const GetInTouch = () => {
    return (

        <section className='getintouch'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="get--in--touch--wap">
                            <div className="left">
                                <h2>Get in touch  <span>
                                    <img src={envalope} alt="" />
                                </span>
                                </h2>
                            </div>
                            <div className=" right">
                                <h5>+92 334 5655555</h5>
                                <h5>sevenstacksltd@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                </div></div>
        </section>

    )
}

export default GetInTouch