import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonials.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { CircleUserRound } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3>Testimonials</h3>
      <Swiper
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="swipper-container"
      >
        <SwiperSlide className="swiper-item">
          <div className="name-container">
            {/* <CircleUserRound /> */}
            <p className="name">Josephine William</p>
          </div>
          <p className="comment">
            Great job 👏🏽 on the book Anne. It takes a lot of discipline, guts
            and courage to pen down one’s own experiences in other to help
            others, Bless your heart girl.
          </p>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <div className="name-container">
            {/* <CircleUserRound /> */}
            <p className="name"> Precious Okundaye</p>
          </div>
          <p className="comment">
            Amazing book. God bless you for blessing us with such a book. I am
            not done reading but I couldn’t wait to pen down my review as I am
            already so blessed by it and I know this is the testimony of so many
            others. This book is soul lifting and brings an already drowning
            soul out from a depressive state. I know without a doubt and with
            all certainty that this book is going to save a lot of lives. Keep
            it up sis and God bless you again for such a wonderful book
            “Conquering Depression & Living Happily"
          </p>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <div className="name-container">
            {/* <CircleUserRound /> */}
            <p className="name"> Hutytech ICT Resources</p>
          </div>
          <p className="comment">
            Amazing book to read, teaches how to manage difficult times in one’s
            life.
          </p>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <div className="name-container">
            {/* <CircleUserRound /> */}
            <p className="name">Obehi</p>
          </div>
          <p className="comment">
            5.0 out of 5 stars // Excellent book to help understand and overcome
            depression // Reviewed in the United Kingdom on 14 November 2023 //
            The book has everything that one need to get insight of what
            depression feels like and to know the symptoms, what to do, how to
            overcome it. Great book 👏👏👏
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// [10/1/2024 10:56 AM] Aunty Anne: Reviews

// Josephine William
// Great job 👏🏽 on the book Anne. It takes a lot of discipline, guts and courage to pen down one’s own experiences in other to help others, Bless your heart girl.
// [10/1/2024 10:57 AM] Aunty Anne: Precious Okundaye

// Amazing book. God bless you for blessing us with such a book. I am not done reading but I couldn’t wait to pen down my review as I am already so blessed by it and I know this is the testimony of so many others. This book is soul lifting and brings an already drowning soul out from a depressive state. I know without a doubt and with all certainty that this book is going to save a lot of lives. Keep it up sis and God bless you again for such a wonderful book “Conquering Depression & Living Happily”
// [10/1/2024 10:57 AM] Aunty Anne: Hutytech ICT Resources

// Amazing book to read, teaches how to manage difficult times in one life.
// [10/1/2024 11:00 AM] Aunty Anne: From United Kingdom

// 	obehi
// 5.0 out of 5 stars
// Excellent book to help understand and overcome depression
// Reviewed in the United Kingdom on 14 November 2023
// The book has everything that one need to get insight of what depression feels like and to know the symptoms, what to do, how to overcome it. Great book 👏👏👏

export default Testimonials;
