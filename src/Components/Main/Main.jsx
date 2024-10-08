import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import ContextProvider, { Context } from '../../context/context'



const Main = () => {

   
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);


  return (
    
      
        <div className="main">
            <div className="nav">   
                <p> abhi.ai </p>
                <img src={assets.user_icon}   />
            </div>

            <div className="main-container">

        {!showResult 
                ? <> 
                <div className="greet">
                <p> <span>Hello, I'm abhi.ai</span></p>
                <p> How can I help you?</p>
                </div>

                <div className="cards">
                
                <div className="card">
                <p>Suggest beautiful places to see on a road trip</p>
                <img src={assets.compass_icon} />
                </div>
                
                <div className="card">
                <p>Briefly summarize the concept: urban planning</p>
                <img src={assets.bulb_icon} />
                </div>

                <div className="card">
                <p>Brainstorm team bonding activities</p>
                <img src={assets.message_icon} />
                </div>

                <div className="card">
                <p>Tell me about React.js</p>
                <img src={assets.code_icon} />
                </div>

                </div>
          </> 
          
          :

          <div className = 'result'>
                
            <div className="result-title">

                    
                    <img src= {assets.user_icon}   />
                    <p>{recentPrompt}</p>
                </div>


                <div className="result-data">
                <img src= {assets.gemini_icon}   />

                {loading 
                ?
                    <div className="loader"> 

                    <hr />
                    <hr />
                    <hr />
                    
                    </div> 
                :
            
        
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

}

                </div>

            

          </div>
        }
                

         

                


         

          
          


                

            <div className="main-bottom">
                
                <div className="searchbox">
                    <input onChange={(e) => setInput(e.target.value)} value = {input} className="input" type = "text" placeholder='Enter prompt here:'></input>
 
                    <div>
                        <img src={assets.gallery_icon}  /> 
                        <img src={assets.mic_icon}  />
                        <img onClick = { () => onSent() } src={assets.send_icon}  />
                    </div>

                    
        
                </div>
                <p className="bottom-info">
                    abhi.ai may display inaccurate info, including about people, so double-check its responses
                    </p>
            </div>


        </div>
        </div>

  )
  
}

export default Main;
 