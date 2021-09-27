//import './preloader.scss';

// function Preloader() {
//     return (
//         <div className="preloader-container">
//             <div className="loadingio-spinner-eclipse-8tibvhradnw"><div className="ldio-wcjmra3zof">
//             <div></div>
//             </div></div>
//         </div>
//     )
// }

// export default Preloader

import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = (props) => (
<ContentLoader 
className='pizza-block'
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="566" cy="243" r="20" /> 
    <circle cx="140" cy="135" r="111" /> 
    <rect x="24" y="264" rx="3" ry="3" width="238" height="23" /> 
    <rect x="239" y="306" rx="0" ry="0" width="8" height="0" /> 
    <rect x="24" y="308" rx="6" ry="6" width="238" height="64" /> 
    <rect x="128" y="388" rx="10" ry="10" width="131" height="34" /> 
    <rect x="31" y="391" rx="3" ry="3" width="73" height="26" />
  </ContentLoader>
)

export default Preloader