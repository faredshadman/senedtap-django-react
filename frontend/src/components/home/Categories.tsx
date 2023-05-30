import { useQuery } from "@tanstack/react-query";
import { getData } from "../../helpers/fetch";
import { ICategory, IApiError } from "../../types";
import Category from "../../atoms/home/Category";
import SectionHeader from "../../atoms/SectionHeader";
const Categories = () => {
  const {
    data: categories,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getData("/categories"),
    onError: (err: IApiError) => err,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  return (
    <section className="px-5 lg:px-16 py-10">
      <SectionHeader
        first="Sənədlər"
        child={
          <h1 className="flex-1 text-3xl">
            Kateqoriyaya görə <br />
            sənədləri seçin
          </h1>
        }
        third="Bütün sənədlər"
      />
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories?.map((item: ICategory) => {
          return <Category name={item.name} body={item.body} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Categories;
