const CardFolderLoading = () => {
  return (
    <>
      <figure className=" animate-pulse flex justify-center items-end">
        <div className="w-[350px] h-[200px] flex justify-center items-center border-[3px] border-neutral-800 overflow-hidden">
          <div className="w-[300px] h-[150px] bg-neutral-600 rounded-lg"></div>
        </div>
        <figcaption className="absolute w-[380px] h-[50px] text-lg translate-x-[-15px] bg-yellow-300 flex justify-start items-center ps-5 border-[3px] border-neutral-800 font-bold">
          <div className="bg-neutral-600 w-[330px] h-[24px] rounded-full animate-pulse"></div>
        </figcaption>
      </figure>
    </>
  );
};

export default CardFolderLoading;
