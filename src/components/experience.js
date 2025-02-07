import React from "react";
import { AiOutlineLink } from "react-icons/ai";


const Experience = () => {

    return(
        <React.Fragment>
            <div className='sticky top-0 z-50 mb-10 backdrop-blur'>
                <h1 className='font-bold uppercase text-sm'>Experience</h1>
            </div>
            <div className='mb-10'>
                <a href="https://www.synchrony.com/" target="_blank" className=''>
                    <h1 className='flex flex-row items-center font-medium text-green-600 text-2xl'>Synchrony International Private Limited
                        <AiOutlineLink className='ml-2'/>
                    </h1>
                    <p className="text-base">Software Development Engineer II <span className="text-sm italic font-light">June 2024 - Present</span></p>
                    <p className="text-base">IT Developer, Digital Solutions <span className="text-sm italic font-light">May 2022 - May 2024</span></p>
                </a>
                <div className="mt-2 pl-6">
                    <ul className="list-disc">
                        <li className="mb-1">
                            <p>Design and development of user-facing web applications by creating visually and user-friendly interfaces using React, Vanilla JS,
                                reusable Micro-Front-ends.</p>
                        </li>
                        <li>
                            <p>Design and Developing Java based back-end applications by building and maintaining server logic using Spring Framework, J2EE,
                                Spring boot, reusable Micro-services, Restful Web-service</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <a href="https://www.tcs.com/" target="_blank" className=''>
                    <h1 className='flex flex-row items-center font-medium text-green-600 text-2xl'>Tata Consultancy Services
                        <AiOutlineLink className='ml-2'/>
                    </h1>
                    <p className="text-base">System Engineer <span className="text-sm italic font-light">Jan 2021 - April 2022</span></p>
                    <p className="text-base">Assistant System Engineer <span className="text-sm italic font-light">Jan 2020 - Jan 2021</span></p>
                    <div className="mt-2 pl-6">
                        <ul className="list-disc">
                            <li className="mb-1">
                                <p>Design and development of user-facing web applications by creating visually and user-friendly interfaces using React, Vanilla JS,
                                    reusable Micro-Front-ends.</p>
                            </li>
                            <li>
                                <p>Design and Developing Java based back-end applications by building and maintaining server logic using Spring Framework, J2EE,
                                    Spring boot, reusable Micro-services, Restful Web-service</p>
                            </li>
                        </ul>
                    </div>
                </a>
                <p></p>
            </div>
        </React.Fragment>
    )
}

export default Experience;