import quicksand from "@component/font";
import HomeListImage from "@layout/Home/HomeListImage";
import Layout from "@layout/Layout";
import { useState } from "react";
import useSWR from "swr";

const Home = () => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
    fetcher,
  );

  const COUNT_IMAGE = data?.length;
  const DATA_PER_PAGE = 12;
  const [limit, setLimit] = useState(DATA_PER_PAGE);
  const SHOW_BUTTON = limit < COUNT_IMAGE;

  const handleLimit = () => {
    setLimit(limit + 12);
  };

  return (
    <>
      <Layout title="Gallery Image">
        <main
          className={`pt-24 flex flex-col justify-center items-center ${quicksand.className}`}
        >
          <div className="px-3 md:px-16 w-full flex justify-end items-end">
            <input
              type="text"
              placeholder="Search here..."
              className="border-[3px] border-neutral-800 mb-14 px-5 py-2 font-bold text-neutral-800 w-full outline-none"
            />
            <div className="w-full px-6 md:px-32 absolute -z-10 flex justify-end left-0">
              <div className="w-full px-3 md:px-16">
                <div className="w-full h-[30px] bg-neutral-800 translate-y-[-50px] translate-x-[10px]"></div>
              </div>
            </div>
          </div>

          <HomeListImage limit={limit} />

          {SHOW_BUTTON && (
            <button
              onClick={handleLimit}
              className="flex justify-center items-center mt-14 font-bold bg-blue-600 px-8 py-2 border-[3px] border-neutral-800"
            >
              See More
              <div className="absolute w-[130px] h-[35px] bg-neutral-800 -z-10 translate-y-[12px] translate-x-[12px]"></div>
            </button>
          )}
        </main>
      </Layout>
    </>
  );
};

export default Home;
