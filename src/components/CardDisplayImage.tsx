import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const CardDisplayImage = (props: any) => {
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
};

export default CardDisplayImage;
