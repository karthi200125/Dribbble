import Card from "../../Components/Card"

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
  ]

  return (
    <div className="w-full flex items-center flex-col justify-center">
      <h1 className="text-6xl">Explore inspiring designs</h1>
      <div className="w-full grid grid-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  )
}

export default LExplore