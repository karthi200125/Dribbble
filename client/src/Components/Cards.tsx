import { memo } from 'react';
import Card from './Card';

interface CardsProps {
    cards: any;
    Delete?: any;
    profile?: any;
    isLoading?: boolean;
}

const Cards = ({ cards, Delete, profile , isLoading }: CardsProps) => {
    
    return (
        <div className="w-full ">
            {cards?.length > 0 ?
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 3xl:grid-cols-5 gap-10 p-[20px] md:p-[75px] items-center ">
                    {isLoading ?
                        <div className="w-full flex items-center justify-center mt-4 ">
                            <div className="animate-spin rounded-full border-t-4 border-rose-500 border-opacity-50 h-12 w-12"></div>
                        </div>
                        :
                        cards.map((card: any) => (
                            <Card key={card?._id} data={card} Delete={Delete} profile={profile} />
                        ))}
                </div>
                :
                <div className='w-full flex items-center justify-center h-[300px] font-bold'>no Projects</div>
            }
        </div>
    );
}

export default memo(Cards);
