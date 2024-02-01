import { memo } from 'react';
import Card from './Card';

interface CardsProps {
    cards: [];
    Delete?: any;
    profile?: any;
}

const Cards = ({ cards, Delete, profile }: CardsProps) => {

    return (
        <div className="w-full ">
            {cards?.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 3xl:grid-cols-5 gap-10 p-[75px] items-center">
                    {cards.map((card, i) => (
                        <Card key={i} data={card} Delete={Delete} profile={profile} />
                    ))}
                </div>
                :
                <div className='w-full flex items-center justify-center h-[300px] font-bold'>no Projects</div>
            }
        </div>
    );
}

export default memo(Cards);
