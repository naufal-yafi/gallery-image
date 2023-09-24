import CardFolderDetail from "@component/CardFolderDetail";
import ListImageFolder from "@layout/Folders/ListImageFolder";
import Layout from "@layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const ImageByCategory = () => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());

  const router = useRouter();
  const { categoryName } = router.query;

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`,
    fetcher,
  );

  const category = data?.find((item: any) => item.name === categoryName);
  const categoryID = category?.id;

  useEffect(() => {
    if (!data) {
      router.push("/404");
    }
  }, [data, router]);

  return (
    <>
      <Layout title={`${categoryName} - Gallery Image`}>
        <main className="pt-32">
          <div className="flex flex-col items-center gap-14 justify-center">
            <CardFolderDetail
              img={category?.image}
              title={category?.name}
              date={`${category?.creationAt} | ${category?.updatedAt}`}
              category_id={categoryID}
            />
          </div>
        </main>

        <ListImageFolder category_id={categoryID} />
      </Layout>
    </>
  );
};

export default ImageByCategory;
