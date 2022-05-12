import React from 'react'
import {useParams} from 'react-router-dom'

const Input = (props) => {

    const {input, textColor="black", bgColor="white"} = useParams();
    

    return(
        <div>
        {
            isNaN(input)? 
            <h2 style={{color:textColor, backgroundColor:bgColor}}>The word is {input}</h2> 
            :<h2 style={{color:textColor, backgroundColor:bgColor}}>The number is {input}</h2>
        }
        </div>
    )
}
export default Input