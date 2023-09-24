/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import quicksand from "./font";
import formattedDate from "./formattedDate";

const CardFolderDetail = (props: any) => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${props.category_id}/products`,
    fetcher,
  );

  const countImage = data?.length;

  const DATE = props.date.split(" | ");

  let resultDate = "";

  if (DATE[0] === DATE[1]) {
    resultDate = formattedDate(DATE[0]);
  } else {
    resultDate = formattedDate(DATE[1]);
  }

  return (
    <>
      <figure
        className={`w-auto px-8 md:px-24 py-4 border-[3px] border-neutral-800 flex flex-col md:flex-row gap-8 ${quicksand.className}`}
      >
        <div className="h-[150px] w-[150px] overflow-hidden border-[3px] border-neutral-800">
          <img src={props.img} alt="" width={150} />
        </div>
        <figcaption>
          <h1 className="font-bold text-xl">{props.title}</h1>
          <p>{resultDate}</p>

          <div className="bg-yellow-300 flex justify-center items-center mt-8 py-2 px-4 border-[3px] border-neutral-800 font-bold">
            <span className="text-xs mr-2">Count:</span> {countImage}
          </div>
        </figcaption>
      </figure>
    </>
  );
};

CardFolderDetail.defaultProps = {
  img: "/",
  title: "Folder Name",
  date: "",
  category_id: 0,
};

export default CardFolderDetail;
