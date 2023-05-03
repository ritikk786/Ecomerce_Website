import  ReactDOM  from "react-dom";

import React,{Fragment} from 'react'
import './Modal.css'


const Backdrop = (props)=>{
   return <div className="backdrop"/>
}

const Overlay = (props)=>{
   return( <div className="overlay">
        <div>{props.children}</div>
    </div>
   )
}

 const Modal = (props) => {
    const place= document.getElementById('overlays')
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,place)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,place)}
    </Fragment>
  )
}
export default Modal;
