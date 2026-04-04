export const Input = ({ placeholder, type = 'text', className = ''}) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className={`w-[362px] lg:w-[450px] mt-3.5 border-b-2 border-title p-2 outline-none placeholder:text-placeholder ${className}`}
        />
    )
}