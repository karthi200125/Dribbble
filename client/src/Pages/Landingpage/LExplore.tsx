import { CARDS } from "../../Cardsdata"
import Button from "../../Components/Button"
import Cards from "../../Components/Cards"

const LExplore = () => {

  return (
    <div className="w-full flex items-center flex-col justify-center bg-white pt-10 pb-20">
      <h1 className="w-full text-5xl mb-8 text-center md:text-center ">Explore inspiring designs</h1>
      <Cards cards={CARDS} />
      <Button title="Browse more inspiration" bg="transparent" border="border-black" py="py-4" />
    </div>
  )
}

export default LExplore