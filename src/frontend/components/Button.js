import { useState } from 'react'

function Button() {
    const [value, setValue] = useState(null);

    const exempleFunction = () => {
        setValue('Button is pressed');
    }
    return (
        <button onClick={exempleFunction} text="Button">
            {value} 
        </button>
    )
}
export default Button;