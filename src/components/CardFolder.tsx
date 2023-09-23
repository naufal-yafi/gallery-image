/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const CardFolder = (props: any) => {
  return (
    <>
      <figure className="flex justify-center items-end">
        <Link href={props.link}>
          <div className="w-[350px] h-[200px] border-[3px] border-neutral-800 overflow-hidden">
            <img src={props.img} alt="thumbnail" width={350} height={200} />
          </div>
        </Link>
        <figcaption className="absolute w-[380px] h-[50px] text-lg translate-x-[-15px] bg-yellow-300 flex justify-start items-center ps-5 border-[3px] border-neutral-800 font-bold">
          {props.folder_name}
        </figcaption>
      </figure>
    </>
  );
};

CardFolder.defaultProps = {
  folder_name: "Folder Name",
  link: "",
  img: "/",
};

export default CardFolder;
