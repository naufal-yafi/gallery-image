import quicksand from "@component/font";
import HomeListImage from "@layout/Home/HomeListImage";
import Layout from "@layout/Layout";

const Home = () => {
  return (
    <>
      <Layout title="Gallery Image">
        <main
          className={`pt-32 flex justify-center items-center ${quicksand.className}`}
        >
          <HomeListImage />
        </main>
      </Layout>
    </>
  );
};

export default Home;
