import React, { useState } from 'react';

function Inputs() {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {

        setChecked(!checked);

    };

    return (

        <div>

            <input type="checkbox" onChange={handleChange} />

            <p>
                {checked ? 'Checked' : 'Not checked'}
            </p>

        </div>

    );

};

export default Inputs;
