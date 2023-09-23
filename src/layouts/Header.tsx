import TabButton from "@component/TabButton";
import quicksand from "@component/font";
import iconFolder from "@icon/basil_folder-solid.svg";
import iconHome from "@icon/basil_home-solid.svg";

const Header = () => {
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-center px-6 lg:px-32 pt-5 z-30 ${quicksand.className}`}
      >
        <div className="w-full bg-neutral-50 h-12 flex justify-end border-[3px] border-neutral-800">
          <nav className="flex gap-2 translate-x-[3px] translate-y-[-3px]">
            <TabButton link="/" icon={iconHome} />
            <TabButton link="/folders" icon={iconFolder} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
