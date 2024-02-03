import Button from "../../Components/Button"

const LBanner = () => {
  return (
    <div className="bg-[rgb(255,218,121,255)] h-[800px] md:h-[600px] w-full flex items-center justify-center ">
      <div className="w-[80%] md:w-[40%] h-70 md:h-3/4 flex items-center justify-between flex-col gap-10">
        <h1 className="text-5xl md:text-6xl text-center ">Find your next designer today</h1>
        <p className="text-xl text-center">The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.</p>
        <div className="flex flex-col md:flex-row gap-5">
          <Button py="py-4" >Get started now</Button>
          <Button bg="white" color="text-black" py="py-4" >Learn about hiring</Button>
        </div>

        <p className="flex flex-row items-center text-xl ">Are you designer? <span className="text-underline">Jion Dribble</span></p>
      </div>
    </div>
  )
}

export default LBanner