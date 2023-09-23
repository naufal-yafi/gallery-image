import quicksand from "@component/font";
import Header from "@layout/Header";
import Title from "@layout/Title";

const InternalServerError = () => {
  return (
    <>
      <Title title="Internal Server Error - 500" />

      <Header />

      <main
        className={`pt-24 flex gap-8 flex-col items-center justify-center ${quicksand.className}`}
      >
        <hgroup className="text-center">
          <h2 className="text-sm text-red-400 font-bold">
            500 Internal Server Error
          </h2>
          <h1 className="text-3xl font-bold">The app is under construction.</h1>
          <p className="mt-3">
            Please wait for this application to finish repairing.
          </p>
        </hgroup>
      </main>
    </>
  );
};

export default InternalServerError;
