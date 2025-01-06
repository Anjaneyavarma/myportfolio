import React from "react";
import About from "../components/about";

const Home = () => {
    return(
        <React.Fragment>
            <section className='scroll-mt-24 mb-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
                <About/>
            </section>
        </React.Fragment>
    )
}

export default Home;