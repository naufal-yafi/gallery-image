import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

const Layout = (props: any) => {
  return (
    <>
      <Title title={props.title} />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
