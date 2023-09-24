import Link from "next/link";
import formattedDate from "./formattedDate";

/* eslint-disable @next/next/no-img-element */
const CardDisplayImage = (props: any) => {
  const DATE = props.date.split(" | ");
  const isSameDate = DATE[0] === DATE[1];
  const CONDITION = isSameDate ? "Created " : "Updated ";

  let dateTime = isSameDate ? formattedDate(DATE[0]) : formattedDate(DATE[1]);

  return (
    <>
      <figure className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <img
          src={props.img}
          alt="thumbnail"
          className="w-full border-[3px] border-neutral-800"
        />
        <div>
          <Link href={`/folders/${props.category_name}`}>
            <button className="bg-yellow-300 px-8 py-2 border-[3px] border-neutral-800 font-bold mb-8 text-sm">
              {props.category_name}
            </button>
          </Link>
          <figcaption>
            <h1 className="text-5xl font-bold">{props.title}</h1>
            <p className="mt-5">{props.desc}</p>
            <p className="mt-4 text-xs font-bold">
              {CONDITION}
              {dateTime}
            </p>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

CardDisplayImage.defaultProps = {
  img: "/",
  category_name: "Category Name",
  title: "Image Title",
  desc: "image description...",
  date: "",
};

export default CardDisplayImage;
