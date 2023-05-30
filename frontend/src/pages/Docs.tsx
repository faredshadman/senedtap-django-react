import DocsContaier from "../components/docs/DocsContainer";
import DocsMenu from "../components/docs/DocsMenu";
// import { RootState } from "../store";
// import { useSelector } from "react-redux";
const Docs = () => {
  // const { selected } = useSelector((state: RootState) => state.category);

  return (
    <section className="pt-20 px-5 lg:px-16">
      <div className="flex flex-col mb-5 lg:flex-row gap-1">
        <div className="flex-1 lg:sticky top-20 h-full">
          <DocsMenu />
        </div>
        <DocsContaier />
      </div>
    </section>
  );
};

export default Docs;
