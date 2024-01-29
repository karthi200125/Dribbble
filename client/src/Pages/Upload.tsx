import { useLocation } from "react-router-dom"
import Button from "../Components/Button"

const Upload = () => {

  const location = useLocation()  

  return (
    <div className="w-full h-screen flex flex-col gap-5">
      <div className="w-full flex flex-row items-center justify-between p-6">
        <Button title="cancel" bg="transparent" border="neutral-200" py="py-2" />
        <div className="flex flex-row gap-5 items-center">
          <Button title="save as craft" bg="neutral-100" color="text-black" />
          <Button title="continue" />
        </div>
      </div>
      <div className="flex items-center justify-start gap-10 flex-col w-full h-full">
        <h1 className="text-3xl font-bold">What have you been working on?</h1>
        <input type="file" name="" id="drop" className="hidden" />
        <label htmlFor="drop" className="w-[55%] h-[90%] rounded-md flex items-center justify-center cursor-pointer border-[1px] border-dotted border-neutral-200 flex-col gap-5">
          <img src="https://cdn.dribbble.com/assets/packs/media/assets/images/picture-placeholder-663241b1d5d22ee9abbe41bf9dd724df.png"
            alt=""
            className="w-[60px] h-[80px] object-cover"
          />
          <p>Drag and drop an image, or Browse</p>
          <p>Minimum 1600px width recommended. Max 10MB each (20MB for videos)</p>
        </label>
      </div>
    </div>
  )
}

export default Upload