import React, { useState } from 'react';//двухсторонее связывание

const TextInput = function () {

    const [value, setValue] = useState('text in input')

    return (
        <div>
            <h2>{value}</h2>

            <input type="text"
                value={value}
                onChange={event => setValue(event.target.value)} />
        </div>
    )
}

export default TextInput;

//useState - для управления состоянием