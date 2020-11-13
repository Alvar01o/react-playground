
import styled from 'styled-components'
import logo from '../../logo.svg';
import React from 'react';
const Cockpit = (props) => {
    let classes = [] ; 
    if(props.persons.length <= 2 ){
      classes.push('red')
    } 
  
    if(props.persons.length <= 1 ){
      classes.push('bold')
    }   
    classes = classes.join(" ")
  
    const StyledButton = styled.button`
    color:black;
    width:60%;
    margin:10px;
    &:hover {
      color:white;
      background-color:darkblue;
    }
    `

    const StyledDiv = styled.div`
      margin:2%;
    `    
    return (
        <StyledDiv>
            <p className={classes}> Some text</p>
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <StyledButton onClick={props.click}>Styled button</StyledButton>
            <br />
            <button onClick={props.click}>Toggle Persons</button>
        </StyledDiv>

    )
}

export default Cockpit;