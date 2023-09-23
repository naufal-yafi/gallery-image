import Head from "next/head";

const Title = (props: any) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
    </>
  );
};

Title.defaultProps = {
  title: "Your Title",
};

export default Title;
