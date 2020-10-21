import React from 'react';

<<<<<<< HEAD
const Input = ({name, placeholder, ...rest}) => {
=======
const Input = ({name, placeholder, error,...rest}) => {
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
    return (
        <div className="form-group m-3">
            <label htmlFor={name} className="control-label"></label>
            <input {...rest} id={name} name={name} placeholder={"?מה ה" + placeholder + " שלך "} className="form-control input-md text-right"/>
<<<<<<< HEAD
=======
            {error && 
            <span className="text-danger">{error}</span>
            }
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
        </div>
    )

} 

export default Input;