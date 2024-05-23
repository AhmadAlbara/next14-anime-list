import SearchPage from "@/components/Pages/Search/SearchPage";

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);

  return <SearchPage keyword={decodedKeyword} />;
};

export default Page;
