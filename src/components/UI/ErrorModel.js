import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModel.module.css'
const Backdrop =(props)=>{
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}
const ModelOverlay =(props)=>{
  return <Card className={classes.model}>
      <header className={classes.header}>
        <h2>{props.errorTitle}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.errorMessage}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
}
const ErrorModal =(props)=>{
  return(
    <>
    {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<ModelOverlay errorTitle={props.errorTitle} errorMessage={props.errorMessage} onConfirm={props.onConfirm}/>,document.getElementById("overlay-root"))}
    </>
  )
}

export default ErrorModal