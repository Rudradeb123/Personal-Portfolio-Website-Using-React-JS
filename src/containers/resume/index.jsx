// import React from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
// import PageHeaderContent from "../../components/pageHeaderContent";
// const Resume=()=>{
//     return(
//         <section id="resume" className="resume">
//       <PageHeaderContent
//         headerText="MY RESUME"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       {/* You can add more content here */}
//     </section>
//     )
// }
// export default Resume;
import React from "react";

const ResumeButton = () => {
  return (
    <a 
      href="/resume.pdf" 
      download="Rudradeb_Das_Resume.pdf" 
      className="resume-download-btn"
    >
      Resume
    </a>
  );
};

export default ResumeButton;

