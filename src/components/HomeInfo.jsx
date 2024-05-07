import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text , link ,btnText}) => (
    <div className = "info-box">
    <p className = "font-medium sm:text-xl text-center">{text}</p>
        <Link to = {link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />

        </Link>
    </div>

)

const renderContent ={
    1:(
        <h1 className= "sm:text-xl sm: leading-sng text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className= "font-semibold"> Iris </span> 😊
        <br/>
        A Linguistics & Computer Science student at UCLA
        <br/><br/>
        <Link to = "/about">
        <button className="neo-brutalism-white neo-btn">
         About Me <img src={arrow} className="w-4 h-4 object-contain"/>
        </button>
        </Link>
        </h1>
    ),
    2:(
        <InfoBox 
        text = "Contributed to couple projects at school and personal ones "
        link = "/projects"
        btnText= "Visit my portfolio"
        />
    ),
    3:(
        <InfoBox 
        text = "Games I have played and Books I have read"
        link = "/interest"
        btnText= "Learn More"
        />
    ),
    4:(
        <InfoBox 
        text = "Leave me a message!"
        link = "/contact"
        btnText= "Contact"
        />
    )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo