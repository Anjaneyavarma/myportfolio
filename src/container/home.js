import React from "react";
import About from "../components/about";
import Experience from "../components/experience";
import TechBlog from "../components/Blog";

const Home = () => {
    return(
        <React.Fragment>
            <section className='scroll-mt-24 mb-16 md:mb-24 lg:mb-24 lg:scroll-mt-24'>
                <About/>
            </section>
            <section className='scroll-mt-24 mb-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
                <Experience/>
            </section>
            <section className='scroll-mt-24 mb-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
                <TechBlog/>
            </section>
        </React.Fragment>
    )
}

export default Home;