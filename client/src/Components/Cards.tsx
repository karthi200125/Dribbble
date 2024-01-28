import Card from './Card';

interface CardsProps {
    cards: [];
}

const Cards = ({ cards }: CardsProps) => {
    return (
        <div className="w-full flex justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-10 p-5 items-center">
                {cards.map((card, i) => (
                    <Card key={i} data={card} />
                ))}
            </div>
        </div>
    );
}

export default Cards;
