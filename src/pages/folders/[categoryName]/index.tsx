import Layout from "@layout/Layout";
import { useRouter } from "next/router";

const ImageByCategory = () => {
  const router = useRouter();
  const { categoryName } = router.query;

  return (
    <>
      <Layout title={`${categoryName} - Gallery Image`}></Layout>
    </>
  );
};

export default ImageByCategory;
