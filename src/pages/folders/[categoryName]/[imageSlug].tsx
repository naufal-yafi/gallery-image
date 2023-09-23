/* eslint-disable @next/next/no-img-element */
import NotFound from "@/pages/404";
import InternalServerError from "@/pages/500";
import CardDisplayImage from "@component/CardDisplayImage";
import quicksand from "@component/font";
import IMGDetailLoading from "@layout/ImageDetail/IMGDetailLoading";
import Layout from "@layout/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";

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
  if (isLoading) return <IMGDetailLoading />;

  if (data && data.title) {
    const compareTitleSlug =
      imageSlug === data.title.toLowerCase().split(" ").join("-");
    if (!compareTitleSlug) return <NotFound />;
  } else {
    return <NotFound />;
  }

  return (
    <>
      <Layout title={`${imageSlug} - Gallery Image`}>
        <main className={`pt-32 ${quicksand.className}`}>
          <CardDisplayImage
            img={data.images[0]}
            category_name={data.category.name}
            title={data.title}
            desc={data.description}
            images={data.images}
          />
        </main>
      </Layout>
    </>
  );
};

export default ImageDetail;
