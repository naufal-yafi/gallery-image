const CardImageLoading = () => {
  return (
    <>
      <figure className=" animate-pulse border-[3px] border-neutral-800 bg-neutral-800 w-[250px]">
        <div className="flex justify-center items-end">
          <div className=" animate-pulse w-[250px] h-[250px] bg-neutral-600"></div>
          <figcaption className="font-bold text-lg absolute bg-yellow-300 border-[3px] border-neutral-800 text-ellipsis w-[270px] px-4 py-1 translate-y-[3px]">
            <div className="w-[230px] h-3 my-3 rounded-full bg-neutral-600 animate-pulse"></div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default CardImageLoading;
