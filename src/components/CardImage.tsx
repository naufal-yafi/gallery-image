import Link from "next/link";

const CardImage = (props: any) => {
  return (
    <>
      <figure className="border-[3px] border-neutral-800 bg-neutral-800 w-[250px]">
        <Link href={props.link}>
          <div className="flex justify-center items-end">
            <img src={props.img} alt="image" width={250} height={250} />
            <figcaption className="font-bold text-lg absolute bg-yellow-300 border-[3px] border-neutral-800 text-ellipsis w-[270px] px-4 py-1 translate-y-[3px]">
              {props.title.length > 21
                ? `${props.title.slice(0, 24)}...`
                : props.title}
            </figcaption>
          </div>
        </Link>
      </figure>
    </>
  );
};

CardImage.defaultProps = {
  title: "Your Title",
  img: "/",
  link: "",
};

export default CardImage;
