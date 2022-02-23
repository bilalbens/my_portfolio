import React from "react";
// import INFO from "../data/info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import {
  faCode,
  faGraduationCap,
  faChartArea,
  faPager,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";


const SocialeMediaIcons = () => {
    // const {linkedin, github, gitlab} = INFO;
    const github = "https://github.com/bilalbens"
    const linkedin = "https://www.linkedin.com/in/bilal-benslimane/"
    const gitlab ="https://github.com/bilalbens"
    const cv = "https://drive.google.com/file/d/15zLhjDxSsNUrd0D1VT_pt-mEE7SjchJd/view?usp=sharing"

    return (
        <div className="flex-center my-5">
            <a href={linkedin} target="_blank"><i className="fa fa-linkedin fa-3x icon-3d"></i></a>
            <a href={github} target="_blank"><i className="fa fa-github fa-3x icon-3d mx-5"></i></a>
            {/* <a href={cv} target="_blank"><FontAwesomeIcon icon={faDownload}/></a>  */}
            <a className="fa fa-3x icon-3d" 
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon CV au format PDF"
            >
            <p >
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ fontSize: "0.9em"}}
                />
              </p>  
            </a>
        </div>
    );

}


export default SocialeMediaIcons;