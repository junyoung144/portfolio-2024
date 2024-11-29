import React, { useState } from 'react';

function Checkbox({ label, onChange }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);

        if (onChange) {
            onChange(newCheckedState); // 부모 컴포넌트로 상태 전달
        }
    };

    return (
        <label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            {label}
        </label>
    );
}

export default Checkbox;
