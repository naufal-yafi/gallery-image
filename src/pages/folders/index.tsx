import CardFolder from "@component/CardFolder";
import quicksand from "@component/font";
import FoldersLoading from "@layout/Folders/FoldersLoading";
import Layout from "@layout/Layout";
import useSWR from "swr";
import InternalServerError from "../500";

const Folders = () => {
  const fetcher = (args: RequestInfo | URL) =>
    fetch(args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`,
    fetcher,
  );

  if (error) return <InternalServerError />;
  if (isLoading) return <FoldersLoading />;

  return (
    <>
      <Layout title="Folders - Gallery Image">
        <main
          className={`${quicksand.className} pt-32 flex justify-center items-center`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {data?.map((folder: any) => (
              <CardFolder
                key={folder.id}
                folder_name={folder.name}
                img={folder.image}
                link={`/folders/${folder.name}`}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Folders;
