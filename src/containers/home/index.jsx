import React from "react";
import { useNavigate } from "react-router-dom";
import {Animate} from 'react-simple-animate';
import './style.scss';
const Home=()=>{
    const navigate=useNavigate();
    console.log(navigate);

    const handleNavigateToContactMePage=()=>{
        navigate('/contact');
    }
    return(
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>Hi, I'm Rudradeb Das</h1>
                <h1>A Passionate Full-Stack Python Developer.

                </h1>
            </div>
           <Animate
            play
            duration={1.5}
            delay={0} // ⏱️ 1 second delay
            start={{
                transform: "translateY(100px)",
                opacity: 0
  }}
  end={{
    transform: "translateY(0px)",
    opacity: 1
  }}
>
                <div className="home__contact-me">
        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
      </div>

            </Animate>
        </section>
       
    )
}
export default Home;