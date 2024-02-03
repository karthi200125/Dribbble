import dribbleicon from '../assets/dribbblegif.gif'

const Loading = () => {
    return (
        <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center flex-col gap-5">
            <img src={dribbleicon} alt="" className='w-[200px] h-[200px] object-contain' />
            <span className='text-rose-500 font-bold'>Loading ....</span>
        </div>
    )
}

export default Loading