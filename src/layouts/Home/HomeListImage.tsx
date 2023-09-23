import InternalServerError from "@/pages/500";
import CardImage from "@component/CardImage";
import useSWR from "swr";
import HomeLoading from "./HomeLoading";

const HomeListImage = (props: any) => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?offset=0&limit=${props.limit}`,
    fetcher,
  );

  if (error) return <InternalServerError />;
  if (isLoading) return <HomeLoading />;

  return (
    <>
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
    </>
  );
};

HomeListImage.defaultProps = {
  limit: 12,
};

export default HomeListImage;
