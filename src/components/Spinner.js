import React from 'react'
import loading from './loading.gif'
// import './Spinner.css'

const Spinner=()=> {

    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="loading"/>
            {/* <div id="cssload-contain">
                <div className="cssload-wrap" id="cssload-wrap1">
                    <div className="cssload-ball" id="cssload-ball1"></div>
                </div>

                <div className="cssload-wrap" id="cssload-wrap2">
                    <div className="cssload-ball" id="cssload-ball2"></div>
                </div>
                
                <div className="cssload-wrap" id="cssload-wrap3">
                    <div className="cssload-ball" id="cssload-ball3"></div>
                </div>
                
                <div className="cssload-wrap" id="cssload-wrap4">
                    <div className="cssload-ball" id="cssload-ball4"></div>
                </div>

            </div> */}
      </div>
    )
  
}

export default Spinner
