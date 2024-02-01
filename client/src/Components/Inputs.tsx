
interface InputProps {
    onChange?: (e: any) => void;
    type?: string;
    name?: string;
    w?: string;
    value?: string;
    labelname?: string;
    placeholder?: string;
}

const Input = ({ onChange, type, name, labelname, placeholder, value , w }: InputProps) => {

    return (
        <div className='w-full flex flex-col gap-2'>
            <span className='font-bold capitalize'>{labelname}</span>
            <input
                type={type ? type : 'text'}
                name={name}
                value={value}
                onChange={onChange}
                className='w-full p-4 rounded-xl border-[3px] border-solid border-neutral-300 hover:border-rose-100 focus:outline-rose-200 focus:border-rose-100 '
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
