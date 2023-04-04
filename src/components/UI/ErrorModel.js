import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModel.module.css'
import Wrapper from '../Helper/Wrapper'
const ErrorModal =(props)=>{

  return(
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
    <Card className={classes.model}>
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
    </>
  )
}

export default ErrorModal