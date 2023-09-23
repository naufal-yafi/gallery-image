import Button from "@component/Button";
import quicksand from "@component/font";
import Header from "@layout/Header";
import Title from "@layout/Title";

const NotFound = () => {
  return (
    <>
      <Title title="Page Not Found - 404" />

      <Header />

      <main
        className={`pt-24 flex gap-8 flex-col items-center justify-center ${quicksand.className}`}
      >
        <hgroup className="text-center">
          <h2 className="text-sm text-red-400 font-bold">404 Not Found</h2>
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p className="mt-3">
            Sorry this page is not available, please return to the homepage
          </p>
        </hgroup>

        <Button link="/">Back to Home</Button>
      </main>
    </>
  );
};

export default NotFound;
