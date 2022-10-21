import React, {FC, ReactElement, HTMLInputTypeAttribute, ChangeEvent, ReactNode } from 'react';

type InputFieldProps = {
    className: string;
    type: HTMLInputTypeAttribute;
    value: unknown;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputField: FC<InputFieldProps> = ({ className, type, placeholder="", onChange}): ReactElement => {

    return (
        <input className={className} type={type} placeholder={placeholder} onChange={onChange}/>
    );

}

export default InputField;