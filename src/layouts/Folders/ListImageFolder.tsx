import InternalServerError from "@/pages/500";
import CardImage from "@component/CardImage";
import useSWR from "swr";

const ListImageFolder = (props: any) => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${props.category_id}/products`,
    fetcher,
  );

  if (error) return <InternalServerError />;
  if (isLoading) return <></>;

  return (
    <>
      <section className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
        {data?.map((image: any) => (
          <CardImage
            key={image.id}
            title={image.title}
            img={image.images[0]}
            link={`/folders/${image.category.name}/${image.title
              .toLowerCase()
              .split(" ")
              .join("-")}?q=${image.id}`}
          />
        ))}
      </section>
    </>
  );
};

ListImageFolder.defaultProps = {
  category_id: 0,
};

export default ListImageFolder;
