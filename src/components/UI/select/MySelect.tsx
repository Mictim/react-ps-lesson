import React from 'react'

interface MyButtonProps {
    options: {
        name: string;
        value: string;
    }[];
    defaultValue: string;
    value: string;
    onChange: (event: any) => void;
}

const MySelect = ({ options, defaultValue, value, onChange }: MyButtonProps) => {
    return (
        <div>
            <select value={value} onChange={event => onChange(event.target.value)}>
                <option  disabled value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>)}

            </select>
        </div>
    )
}

export default MySelect