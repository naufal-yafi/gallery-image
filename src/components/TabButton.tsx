import Image from "next/image";
import Link from "next/link";

const TabButton = (props: any) => {
  return (
    <>
      <div>
        <Link href={props.link}>
          <button className="bg-blue-600 border-[3px] border-neutral-800 p-1 flex justify-center items-center">
            <Image
              src={props.icon}
              alt="icon"
              width={35}
              height={35}
              className="w-9 h-9 md:w-10 md:h-10"
            />
          </button>
        </Link>
      </div>
    </>
  );
};

TabButton.defaultProps = {
  link: "",
  icon: "",
};

export default TabButton;
