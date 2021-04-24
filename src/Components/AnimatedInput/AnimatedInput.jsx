import React, {useState, useEffect} from "react";
import styled from "styled-components";


const AnimatedInput = ({placeholder: passedPlaceholder = "", ...passedProps}) => {
    const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
    const [placeholderIndex, setPlaceholderIndex] = useState(0);


    useEffect(() => {
        const intr = setInterval(() => {
            setPlaceholder(passedPlaceholder.slice(0, placeholderIndex));
            if (placeholderIndex + 1 > passedPlaceholder.length) {
                setPlaceholderIndex(0)
            } else {
                setPlaceholderIndex(placeholderIndex + 1)
            }
        }, 170);
        return () => {
            clearInterval(intr)
        }
    },);


    return <Input {...passedProps} placeholder={placeholder}/>
}; 

const Input = styled.input`
    font-weight: 600; 
    padding: 0.8rem 0.5rem; 
    border: #8d7eaf;
    outline: none; 
    box-shadow: 5px 2px 10px #dfceff;
    border-radius: 5px;
    width: 100%;  
`

export default AnimatedInput; 