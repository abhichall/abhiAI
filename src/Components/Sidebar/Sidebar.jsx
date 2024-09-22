import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

  return (
    <div className = "sidebar">

        <div className="top">

        <img 
            className = 'menu'  
            onClick={(prev) => setExtended(prev => !prev)}
            src= {assets.menu_icon} 
            alt=""  
        />

        

        {extended ? 
       
       <div className="new-chat">

        <img className = 'plus' src={assets.plus_icon} alt=""/>

        <p> New Chat</p>

        </div>          :

        null
 
    }
           
            
            
        {extended ? 
            <div className="recent">
                <p className="recent-title">Recent</p>
 
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react...</p>
                </div>
            </div>

            :
            
            null
        }

 
        </div>

        <div className="bottom">

                   {extended ? 
                   
                   <div className="bottom-item recent-entry" >
                        <img src={assets.question_icon} alt=""/>
                        <p>Help</p>
                    </div>

                    : null}


                    {extended ?

                    <div className="bottom-item recent-entry">
                        <img src={assets.history_icon} alt=""/>
                        <p>Activity</p>
                    </div>
                    : null}

                    
                    {extended ?

                    <div className="bottom-item recent-entry">
                        <img src={assets.setting_icon} alt=""/>
                        <p>Settings</p>
                    </div>
                    :
                    null}



        </div>
      
    </div>
  )
}

export default Sidebar
