import InternalServerError from "@/pages/500";
import useSWR from "swr";
import CardImage from "./CardImage";
import LoadingHome from "./Loading/LoadingHome";

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, 6);
};

const ListImage = (props: any) => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${props.endpoint}`,
    fetcher,
  );

  if (error) return <InternalServerError />;
  if (isLoading) return <LoadingHome />;

  const result = props.random ? shuffleArray(data) : data;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
        {result?.map((image: any) => (
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

ListImage.defaultProps = {
  endpoint: "/products?offset=0&limit=12",
  random: false,
};

export default ListImage;
