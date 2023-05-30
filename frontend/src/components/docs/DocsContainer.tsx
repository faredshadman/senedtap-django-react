import { useQuery } from "@tanstack/react-query";
import { IApiError, IDoc } from "../../types";
import { getData } from "../../helpers/fetch";
import Doc from "../../atoms/docs/Doc";

const DocsContaier = () => {
  const {
    data: docs,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["docs"],
    queryFn: () => getData("/docs"),
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
    <div className="flex-[3] bg-slate-200">
      <div className="grid p-2 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {docs?.map((doc: IDoc) => (
          <Doc key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
};

export default DocsContaier;
