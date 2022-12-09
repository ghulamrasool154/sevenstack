import './ServiceSection.css'
import datascience from '../../assets/images/data science.png'
import destop from "../../assets/images/Desktop software solutions.png"
import mobileapp from "../../assets/images/mobile app development.png"
import sales from "../../assets/images/salesforce.png"
import discovery from "../../assets/images/Discovery workshop.png"
import innovate from "../../assets/images/Innovation to the wolrd.png"
import uiux from "../../assets/images/ui_ux.png"
import webap from '../../assets/images/web app development.png'
import process from "../../assets/images/process.png"

import GetInTouch from '../getintouch/GetInTouch'
import { useState } from 'react'

import determine from '../../assets/images/determine.png'
import desing from "../../assets/images/designn.png"
import develop from "../../assets/images/develop.png"
import deploy from "../../assets/images/depolu.png"
import processarrow from "../../assets/images/process_arrow 1.png"
const ServiceSection = () => {
    const [itemes, setitems] = useState([
        {
            name: "Data Science",
            img: datascience,
        },
        {
            name: 'Desktop Software Solutions',
            img: destop
        },
        {
            name: 'Mobile App Development',
            img: mobileapp
        },
        {
            name: 'Salesforce',
            img: sales
        },
        {
            name: 'Discovery Workshop',
            img: discovery
        },
        {
            name: 'Innovation to the World',
            img: innovate
        },
        {
            name: "UI/UX",
            img: uiux
        },
        {
            name: 'Web App Development',
            img: webap
        }
    ])
    return (
        <div className='ServiceSection'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 service--colum">
                        <h2 className='section--title'> our service</h2>
                        <div className="service--items--wrapper">
                            {itemes.map((e, i) => {
                                return <div className='single--item' key={i}>
                                    <div className='single-item-head'>
                                        <img src={e.img} alt="datascience" />
                                        <h4>{e.name}</h4>
                                    </div>
                                    <div className='single--item--disc'><p> We believe that our clients approach to us for their tailored needs of web solutions. For this, we provide them top-notch services from strategizing to implementation  of interactive web development services.
                                    </p>
                                    </div >
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 ">
                        <div className='process--row'>
                            <h2 className='section--title'>Our Process</h2>

                            <div className="prodcess-wrapper">
                                <div className='our--process--imge'>
                                    <img src={determine} alt="" />
                                    <h5 className='title--pro'>Determine</h5>
                                </div>

                                <div className='our--process--imge arrow'>
                                    <img src={processarrow} alt="" className='arrow' />
                                </div>

                                <div className='our--process--imge'>
                                    <img src={desing} alt="" />
                                    <h5 className='title--pro'>design</h5>
                                </div>

                                <div className='our--process--imge arrow'>
                                    <img src={processarrow} alt="" className='arrow' />
                                </div>
                                <div className='our--process--imge'>
                                    <img src={develop} alt="" />
                                    <h5 className='title--pro'>develop</h5>
                                </div>

                                <div className='our--process--imge arrow'>
                                    <img src={processarrow} alt="" className='arrow' />
                                </div>
                                <div className='our--process--imge'>
                                    <img src={deploy} alt="" />
                                    <h5 className='title--pro'>deploy</h5>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}

export default ServiceSection