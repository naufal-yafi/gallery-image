import Link from "next/link";

const Button = (props: any) => {
  return (
    <>
      <div>
        <Link href={props.link}>
          <button className="flex justify-center items-center px-6 border-[3px] border-neutral-800 font-bold py-3 bg-yellow-300">
            {props.children}
            <div className="w-40 h-12 bg-neutral-800 absolute -z-10 translate-y-[10px] translate-x-[5px]"></div>
          </button>
        </Link>
      </div>
    </>
  );
};

Button.defaultProps = {
  children: "Button",
  link: "",
};

export default Button;
