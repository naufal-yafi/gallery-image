/* eslint-disable @next/next/no-img-element */
import NotFound from "@/pages/404";
import InternalServerError from "@/pages/500";
import CardDisplayImage from "@component/CardDisplayImage";
import quicksand from "@component/font";
import HomeListImage from "@layout/Home/HomeListImage";
import Layout from "@layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const Loading = dynamic(() => import("@layout/ImageDetail/IMGDetailLoading"), {
  ssr: false,
});

const ImageDetail = () => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());

  const router = useRouter();
  const { imageSlug, q } = router.query;

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${q}`,
    fetcher,
  );

  if (error) return <InternalServerError />;
  if (isLoading) return <Loading />;

  if (data && data.title) {
    const compareTitleSlug =
      imageSlug === data.title.toLowerCase().split(" ").join("-");
    if (!compareTitleSlug) return <NotFound />;
  } else {
    return <NotFound />;
  }

  return (
    <>
      <Layout title={`${data.title} - Gallery Image`}>
        <main className={`pt-32 ${quicksand.className}`}>
          <CardDisplayImage
            img={data.images[0]}
            category_name={data.category.name}
            title={data.title}
            desc={data.description}
            images={data.images}
            date={`${data.creationAt} | ${data.updatedAt}`}
          />
        </main>

        <section className="mt-36">
          <HomeListImage />
        </section>

        <section className="flex justify-center">
          <Link href="/">
            <button className="flex justify-center items-center mt-14 font-bold bg-blue-600 px-8 py-2 border-[3px] border-neutral-800">
              See More
              <div className="absolute w-[130px] h-[35px] bg-neutral-800 -z-10 translate-y-[12px] translate-x-[12px]"></div>
            </button>
          </Link>
        </section>
      </Layout>
    </>
  );
};

export default ImageDetail;
