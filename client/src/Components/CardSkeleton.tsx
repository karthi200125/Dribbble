
const CardSkeleton = () => {
  return (
    <div className="card animate-pulse">
      <div className="h-[210px] rounded-xl bg-neutral-200"></div>
      <div className="h-[35px] w-full flex flex-row items-center justify-between p-2">
        <div className="w-full flex flex-row items-center gap-3">
          <div className="w-[30px] h-[30px] rounded-full bg-neutral-200"></div>
          <div className="w-[70%] bg-neutral-200 h-[10px]"></div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="w-[15px] h-[15px] rounded-full bg-neutral-200"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-neutral-200"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
