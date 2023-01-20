import { FC } from 'react'

type MyButtonProps = {
    options: {
        name: string;
        value: string;
    }[];
    defaultValue: string;
    value: string;
    onChange: (event: any) => void;
}

const MySelect: FC<MyButtonProps> = ({ options, defaultValue, value, onChange }) => {
    return (
        <div>
            <select value={value} onChange={event => onChange(event.target.value)}>
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>)}

            </select>
        </div>
    )
}

export default MySelect