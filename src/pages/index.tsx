import Title from "@layout/Title";
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Title title="Gallery Image" />

      <main className={quicksand.className}></main>
    </>
  );
};

export default Home;
