import { IApiError, IReview } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../helpers/fetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { AiFillStar, AiOutlineStar, AiOutlineLine } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Reviews = () => {
  const {
    data: reviews,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getData("/reviews"),
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
    <section className="px-5 sm:px-10 py-10 bg-blue-100 relative">
      <span className="flex items-center gap-2 text-blue-600">
        <AiOutlineLine />
        Fikirlər
      </span>
      <h1 className="flex-1 mb-10 text-blue-900 text-3xl">
        Onlar bizi seçirlər
      </h1>
      <Swiper
        loop={true}
        navigation={true}
        breakpoints={{
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3.5,
            centeredSlides: true,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper rounded-sm">
        {reviews?.map((review: IReview) => {
          return (
            <SwiperSlide
              className="flex bg-white p-5 shadow-xl gap-2"
              key={review.id}>
              <img
                className="w-14 h-14 rounded-full"
                src={process.env.REACT_APP_IMAGEURL + review.image_url}
                alt=""
              />
              <div className="flex-1">
                <p className="text-justify">{review.body}</p>
                <div>
                  <div className="flex flex-col sm:flex-row gap-1 py-2 sm:items-center">
                    <h1>{review.name}</h1>
                    <BsDot className="hidden sm:inline-flex" />
                    <span>{review.job}</span>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => {
                      return (
                        <span key={i}>
                          {review.stars > i ? (
                            <AiFillStar className="text-yellow-400" />
                          ) : (
                            <AiOutlineStar className="text-yellow-400" />
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reviews;
