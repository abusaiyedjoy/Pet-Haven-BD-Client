import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import comma from './../../../assets/Group.png';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Header from "../../Header/Header";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [axiosPublic]);

  return (
    <section className="my-20">
      <Header
        Heading={"🐕Reviews from Our Happy Pet Parents🐕"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-12 flex justify-center items-center flex-col">
              <img src={comma} className="text-center mb-5" alt="" />
              <h2 className="text-4xl font-semibold text-[#ceb174] text-center">
                {review.name}
              </h2>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="text-center max-w-[800px] mt-10 mb-6">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
