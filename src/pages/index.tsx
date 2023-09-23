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
          className={`pt-32 flex flex-col justify-center items-center ${quicksand.className}`}
        >
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
