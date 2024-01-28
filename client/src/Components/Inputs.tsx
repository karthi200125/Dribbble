import React, { ChangeEvent } from 'react';

interface InputProps {
    onChange?: (value: string) => void;
    type?: string;
    name?: string;
    labelname?: string;
    placeholder?: string;
}

const Input = ({ onChange, type, name, labelname, placeholder }: InputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className='w-full flex flex-col gap-2'>
            <span className='font-bold capitalize'>{labelname}</span>
            <input
                type={type ? type : 'text'}
                name={name}
                onChange={handleChange}
                className='w-full p-4 rounded-xl border-[1px] border-solid border-neutral-300 hover:border-rose-500 focus:border focus:outline-rose-500 '
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
