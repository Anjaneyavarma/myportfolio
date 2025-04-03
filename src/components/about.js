import React from "react";
import { AiOutlineJava } from "react-icons/ai";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { FaDocker, FaHtml5, FaSitemap } from "react-icons/fa";


const About = () =>{

    return (
        <React.Fragment>
            <div className='sticky top-0 z-20 mb-4 backdrop-blur'>
                <h1 className='font-bold uppercase text-sm'>about</h1>
            </div>
            <div>
                <p className='font-light'>
                    I am a passionate and self-taught <strong className='font-bold'>Java Full stack web developer</strong> and a freelancer Software Engineer from India.
                    My passion software lies in dreaming up ideas and making them come true with elegant interfaces. I take
                    great care in the experience, architecture and code quality of the things I build.
                </p>
                <p className='font-light mt-3'>
                    I am a passionate software engineer and problem solver, dedicated to creating impactful codes that thrive on the internet.
                    Since pursuing my engineering degree, my career has taken me through diverse industries, allowing me to refine my expertise in web development. 
                    In the realm of <strong className='font-bold'> Web</strong>, I am dedicated to pushing boundaries and driving advancements. With experience working alongside esteemed organizations like
                    <strong className='font-bold'> Synchrony</strong> my passion for web and continuous learning drives me to make a positive impact and advance technology.
                </p>
            </div>
            <p className='mt-3 mb-5'>Here are a few technologies I've been working with recently:</p>
            <div className='mt-2 flex flex-row'>
                <div className='lg:mr-36 mr-24'>
                    <p className='flex items-center text-sm mb-5'><AiOutlineJava className='text-xl mr-2 text-green-600'/> Java</p>
                    <p className='flex items-center text-sm mb-5'><DiJsBadge className='text-xl mr-2 text-green-600'/> Javascript</p>
                    <p className='flex items-center text-sm mb-5'><DiReact className='text-xl mr-2 text-green-600'/> React</p>
                    <p className='flex items-center text-sm mb-5'><DiMysql className='text-xl mr-2 text-green-600'/> Mysql</p>
                    <p className='flex items-center text-sm mb-5'><DiGit className='text-xl mr-2 text-green-600'/> Git</p>
                </div>
                <div>
                    <p className='flex items-center text-sm mb-5'><AiOutlineJava className='text-xl mr-2 text-green-600'/> Spring Boot</p>
                    <p className='flex items-center text-sm mb-5'><DiJsBadge className='text-xl mr-2 text-green-600'/> Kafka</p>
                    <p className='flex items-center text-sm mb-5'><FaDocker className='text-xl mr-2 text-green-600'/> Docker</p>
                    <p className='flex items-center text-sm mb-5'><FaHtml5 className='text-xl mr-2 text-green-600'/> HTML, CSS</p>
                    <p className='flex items-center text-sm mb-5'><FaSitemap className='text-xl mr-2 text-green-600'/> System architecture</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;