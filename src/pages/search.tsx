import CardImage from "@component/CardImage";
import SearchBar from "@component/SearchBar";
import quicksand from "@component/font";
import HomeLoading from "@layout/Home/HomeLoading";
import Layout from "@layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import InternalServerError from "./500";

const Search = () => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());

  const router = useRouter();
  const { q } = router.query;

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/?title=${q}`,
    fetcher,
  );

  if (error) return <InternalServerError />;
  if (isLoading) return <HomeLoading />;
  return (
    <>
      <Layout title={`${q} - Gallery Image`}>
        <main
          className={`pt-24 flex flex-col justify-center items-center ${quicksand.className}`}
        >
          <div className="px-3 md:px-16 w-full flex justify-end items-end">
            <SearchBar />
            <div className="w-full px-6 md:px-32 absolute -z-10 flex justify-end left-0">
              <div className="w-full px-3 md:px-16">
                <div className="w-full h-[30px] bg-neutral-800 translate-y-[-50px] translate-x-[10px]"></div>
              </div>
            </div>
          </div>
        </main>

        <section className="mt-5 flex justify-center">
          {data.length != 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
              {data?.map((image: any) => (
                <CardImage
                  key={image.id}
                  img={image.images}
                  title={image.title}
                  link={`/folders/${image.category.name}/${image.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}?q=${image.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="border-[3px] border-neutral-800 px-12 py-8 bg-yellow-300">
              <hgroup>
                <h1 className="text-2xl font-bold">
                  What you are looking for was not found!
                </h1>
                <p className="text-sm mt-2">
                  You can search for something else or go back to the homepage.
                </p>
              </hgroup>
              <Link href="/">
                <button className="font-bold border-[3px] border-neutral-800 px-5 py-2 bg-blue-600 mt-8">
                  Back
                </button>
              </Link>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
};

export default Search;
