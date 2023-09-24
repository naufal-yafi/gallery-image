import Layout from "@layout/Layout";

const IMGDetailLoading = () => {
  return (
    <>
      <Layout title="Please Wait...">
        <main className="pt-32 animate-pulse">
          <figure className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="w-full h-[400px] lg:h-[600px] bg-neutral-800 px-[20px] border-[3px] border-neutral-800 flex justify-center items-center">
              <div className="animate-pulse w-full h-[450px] bg-neutral-600 rounded-lg"></div>
            </div>
            <div>
              <button className="bg-yellow-300 px-8 py-2 border-[3px] border-neutral-800 font-bold mb-8 text-sm">
                <div className="w-[100px] h-[20px] bg-neutral-600 rounded-lg animate-pulse"></div>
              </button>
              <figcaption className="animate-pulse">
                <h1 className="text-5xl font-bold">
                  <div className="w-full h-[40px] bg-neutral-600 rounded-lg"></div>
                </h1>
                <p className="mt-5">
                  <div className="w-full h-[15px] bg-neutral-600 rounded-lg"></div>
                  <div className="w-1/2 mt-2 h-[15px] bg-neutral-600 rounded-lg"></div>
                  <div className="w-full mt-2 h-[15px] bg-neutral-600 rounded-lg"></div>
                  <div className="w-2/3 mt-2 h-[15px] bg-neutral-600 rounded-lg"></div>
                </p>
              </figcaption>
            </div>
          </figure>
        </main>
      </Layout>
    </>
  );
};

export default IMGDetailLoading;
