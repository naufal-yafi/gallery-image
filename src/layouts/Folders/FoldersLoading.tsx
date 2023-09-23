import CardFolderLoading from "@component/CardFolderLoading";
import quicksand from "@component/font";
import Layout from "@layout/Layout";

const FoldersLoading = () => {
  return (
    <>
      <Layout title="Please Wait...">
        <main
          className={`${quicksand.className} pt-32 flex justify-center items-center`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <CardFolderLoading />
            <CardFolderLoading />
            <CardFolderLoading />
            <CardFolderLoading />
            <CardFolderLoading />
            <CardFolderLoading />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default FoldersLoading;
