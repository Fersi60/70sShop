import React from 'react' ; 
import './BackDrop.css' ;  


function BackDrop({show,click}) {
    return show && (
        <div className="back-drop" onClick={click}>
            
        </div>
    )
}

export default BackDrop
