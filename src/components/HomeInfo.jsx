import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) =>(
    <div className = "info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Siphesihle</span>👋 <br/>
            An aspiring Fullstack Developer from South Africa</h1>
    ),
    2: (
        <InfoBox  text="Worked on many projects and looking forward to gain more knowledge"
        link="/about" 
        btnText="Learn More"
        />
    ),
    3: (
        <InfoBox  text="Collaborated in many successful projects with talented individuals"
        link="/projects" 
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox  text="Any position available for an aspiring developer with no work experience "
        link="/contact" 
        btnText="Let's talk"
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;

}

export default HomeInfo
