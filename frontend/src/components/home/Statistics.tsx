import { useQuery } from "@tanstack/react-query";
import { IStatistic, IApiError } from "../../types";
import { getData } from "../../helpers/fetch";
import Statistic from "../../atoms/home/Statistic";

const Statistics = () => {
  const {
    data: statistics,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["statistics"],
    queryFn: () => getData("/statistics"),
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
    <section className="px-5 lg:px-16 bg-blue-200 py-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {statistics?.map((item: IStatistic) => {
          return (
            <Statistic key={item.id} title={item.title} count={item.count} />
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
