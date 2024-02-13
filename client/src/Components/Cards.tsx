import { memo, useMemo } from 'react';
import Card from './Card';
import CardSkeleton from './CardSkeleton';

interface CardsProps {
    cards: any[];
    Delete?: any;
    profile?: any;
    isLoading?: boolean;
    cardlength?: number;
}

const Cards = memo(({ cards, Delete, profile, isLoading, cardlength }: CardsProps) => {
    const renderedCards = useMemo(() => (
        cards.slice(0, cardlength || cards?.length).map((card: any) => (
            <Card key={card?._id} data={card} Delete={Delete} profile={profile} />
        ))
    ), [cards, cardlength, Delete, profile]);
    
    return (
        <div className="w-full">
            {isLoading ? (
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 3xl:grid-cols-5 gap-10 p-[20px] md:p-[75px] items-center'>
                    {[...Array(12)].map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <>
                    {cards?.length > 0 ? (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 3xl:grid-cols-5 gap-10 p-[20px] md:p-[75px] items-center">
                            {renderedCards}
                        </div>
                    ) : (
                        <div className='w-full flex items-center justify-center h-[300px] font-bold'>No Projects</div>
                    )}
                </>
            )}
        </div>
    );
});

export default Cards;
