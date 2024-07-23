import { forwardRef , useId} from "react";

function Select({
    label,
    options,
    className='',
    ...props
}, ref){
    const id = useId();
    return (
        <>
        <div className="w-full">
            {label && <label htmlFor={id}>
                </label >}
                <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-slate-300 duration-200 border border-gray-100 w-full ${className}`}>
                {options?.map((option)=>(
                    <option key={option} value={option}>{option}</option>
                ))}</select>               
        </div>
        </>
    )
} 

export default forwardRef(Select)