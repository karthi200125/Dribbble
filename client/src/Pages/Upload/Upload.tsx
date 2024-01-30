import { useState } from "react"
import Button from "../../Components/Button"
import ImageUplaod from "./ImageUplaod"
import EditUplaod from "./EditUplaod"

const Upload = () => {
  const [image, setImage] = useState('')
  const [baropen, setBaropen] = useState(false)

  const handleImageChange = (imageUrl: string) => {
    setImage(imageUrl);
  };

  return (
    <div className={`${baropen ? "w-[80%]" : "w-full"} h-screen flex flex-col gap-5 bg-neutral-50`}>

      {/* upload nav*/}
      <div className="w-full flex flex-row items-center justify-between p-6">
        <Button title="cancel" bg="transparent" border="neutral-200" py="py-2" />
        <div className="flex flex-row gap-5 items-center">
          <Button title="save as craft" bg="neutral-100" color="text-black" />
          <Button title="continue" />
        </div>
      </div>
      {image ? <EditUplaod onBaropen={(d: any) => setBaropen(d)} image={image} /> : <ImageUplaod onImage={handleImageChange} />}
    </div>
  )
}

export default Upload