
interface InputProps {
    onChange?: (e: any) => void;
    type?: string;
    name?: string;
    value?: string;
    labelname?: string;
    placeholder?: string;
}

const Input = ({ onChange, type, name, labelname, placeholder, value }: InputProps) => {

    return (
        <div className='w-full flex flex-col gap-2'>
            <span className='font-bold capitalize'>{labelname}</span>
            <div className="input rounded-xl border-[1px] border-solid border-neutral-100 hover:border-rose-100 overflow-hidden">
                <input
                    type={type ? type : 'text'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className='w-full p-4 rounded-xl border-[1px] border-solid focus:outline-rose-200 focus:border-rgba(255, 0, 0, 0.2) focus:shadow-[0 0 10px 2px rgba(255, 0, 0, 0.2)]'
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default Input;
