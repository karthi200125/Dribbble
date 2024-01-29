import Card from './Card';

interface CardsProps {
    cards: [];
}

const Cards = ({ cards }: CardsProps) => {
    return (
        <div className="w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 3xl:grid-cols-5 gap-10 p-[75px] items-center">
                {cards.map((card, i) => (
                    <Card key={i} data={card} />
                ))}
            </div>
        </div>
    );
}

export default Cards;
