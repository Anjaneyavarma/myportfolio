import React from "react";
import propic from '../assets/pro_pic_ca.png'
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

const Header = () => {
    return(
        <React.Fragment>
            <div>
                <h1 className='text-4xl font-bold sm:text-5xl'>Anjaneya varma</h1>
                <h2 className='font-medium tracking-tight mt-3 sm:text-xl'>Java Full Stack Developer 👨🏻‍💻</h2>
                <p className='mt-4 font-normal leading-normal max-w-sm'>Experienced Software Engineer with a focus on building engaging & accessible digital experiences</p>
            </div>
            <div className='mt-7 border-r-2 border-b-2 border-green-500 rounded-2xl h-56 max-w-44'>
                <img className='h-52 object-fill rounded-2xl' src={propic} alt="pro_pic"/>
            </div>
            <div className='mt-16 lg:mt-16 '>
                <ul className='flex items-center'>
                    <li className='mr-5 shrink-0 text-3xl'><a className='block' href="https://github.com/Anjaneyavarma" target="_blank">
                            <span className='sr-only'>Github</span>
                            <AiOutlineGithub/>
                        </a>    
                    </li>
                    <li className='mr-5 shrink-0 text-3xl'><a className='block' href="https://www.linkedin.com/in/anjaneya-varma-6812a311a/" target="_blank">
                            <span className='sr-only'>LinkedIn</span>
                            <AiOutlineLinkedin/>
                        </a>    
                    </li>
                    <li className='mr-5 shrink-0 text-3xl'><a className='block' href="https://medium.com/@anjivarma.penmatsa" target="_blank">
                            <span className='sr-only'>Medium</span>
                            <AiOutlineMedium/>
                        </a>    
                    </li>
                    <li className='mr-5 shrink-0 text-3xl'><a className='block' href="https://twitter.com/penmatsa_varma" target="_blank">
                            <span className='sr-only'>Twitter</span>
                            <AiOutlineTwitter/>
                        </a>    
                    </li>
                    <li className='mr-5 shrink-0 text-3xl'><a className='block' href="https://www.youtube.com/@penumatsaanjaneyavarma" target="_blank">
                            <span className='sr-only'>Youtube</span>
                            <AiOutlineYoutube/>
                        </a>    
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Header;