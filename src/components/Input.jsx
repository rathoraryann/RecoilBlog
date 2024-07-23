import React, { useId, forwardRef} from "react";

const Input = forwardRef(function input({
    label,
    type = 'text',
    className = ' ',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}
            >
                {label}
            </label>}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-300 duration-200 border border-gray-50 w-full ${className}`}
                ref={ref}
                id={id}
                {...props}
            />
        </div>
    )
})

export default Input;