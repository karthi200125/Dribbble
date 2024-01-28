import Button from "../../Components/Button"
import Cards from "../../Components/Cards"

const LExplore = () => {

  const cards = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/17652903/pexels-photo-17652903/free-photo-of-naomi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: 'title',
      profilImg: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
      username: 'one',
      like: 100,
      see: 300
    },
    {
      id: 2,
      img: "",
      title: '',
      profilImg: '',
      username: '',
      like: 100,
      see: 300
    },
    {
      id: 3,
      img: "",
      title: '',
      profilImg: '',
      username: '',
      like: 100,
      see: 300
    },
    {
      id: 4,
      img: "",
      title: '',
      profilImg: '',
      username: '',
      like: 100,
      see: 300
    },
  ]

  return (
    <div className="w-full flex items-center flex-col justify-center bg-white pt-10 pb-20">
      <h1 className="w-full text-5xl mb-8 text-center md:text-center ">Explore inspiring designs</h1>
      <Cards cards={cards} />
      <Button title="Browse more inspiration" bg="transparent" border="border-black" py="py-4" />
    </div>
  )
}

export default LExplore