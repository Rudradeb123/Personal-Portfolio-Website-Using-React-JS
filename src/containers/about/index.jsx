import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss';
import {
  DiReact,
  DiPython,
  DiDjango,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiDatabase,
} from "react-icons/di";

const personalDetails = [
  { label: "Name", value: "Rudradeb Das" },
  { label: "Age", value: "23" },
  { label: "Address", value: "Shyamnagar, Kolkata, West Bengal, India" },
  { label: "Email", value: "debrudra9163@gmail.com" },
  { label: "Contact No", value: "+91 6289385279" },
];

const jobSummary =
  "As a Full Stack Python Developer, I design and build robust, scalable web applications by integrating modern front-end frameworks like React.js with powerful back-end technologies such as Python, Django, and Flask. My expertise spans across the entire web development stack, from intuitive UI/UX to secure APIs and databases.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
          play
          duration={1.5}
          delay={0}
          start={{ transform: "translateX(-900px)", opacity: 0 }}
          end={{ transform: "translateX(0px)", opacity: 1 }}
        >
          <h3>Full Stack Python Developer</h3>
          <p>{jobSummary}</p>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{ transform: "translateX(500px)", opacity: 0 }}
          end={{ transform: "translateX(0px)", opacity: 1 }}
        >
          <h3 className="personalInformationHeaderText">Personal Information</h3>
          <ul>
            {personalDetails.map((item, i) => (
              <li key={i} className="about__content__personalItem">
                <span className="title">{item.label}: </span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </Animate>

        </div>
        <div className="about__content__servicesWrapper">
          <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{ transform: "translateX(600px)", opacity: 0 }}
          end={{ transform: "translateX(0px)", opacity: 1 }}
        >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
            <DiReact size={60} color="var(--blue-theme-main-color)"/>
            </div>
            <div>
            <DiPython size={60} color="var(--blue-theme-main-color)"/>
            </div>
            <div>
            <DiDjango size={60} color="var(--blue-theme-main-color)"/>
            </div>
            {/* <DiJavascript1 size={60} color="var(--blue-theme-main-color)"/>
            <DiHtml5 size={60} color="var(--blue-theme-main-color)"/>
            <DiCss3 size={60} color="var(--blue-theme-main-color)"/> */}
            <div>
            <DiDatabase size={60} color="var(--blue-theme-main-color)"/>
          </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
