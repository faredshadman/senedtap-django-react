import axiosInstance from "../lib/axios";

export const getData = async (url: string) => {
  const response = await axiosInstance(url);
  return response.data;
};
