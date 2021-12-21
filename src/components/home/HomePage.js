import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../common/Loading";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import waves from "../../assets/stacked-waves-haikei.png";
import landing from "../../assets/landing.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dd from "../../assets/dd.jpg";

const HomePage = (props) => {
  return (
    <>
      <Navbar />
      <div className="waves-img position-relative">
        <div className="landing row">
          <div className="col-6">
            <p className="landing-top">
              ‘‘ Medicine Will Never Be Hard AGAIN ’’
            </p>
            <p className="landing-center">
              Find The best online courses here <br />
              With the greatest instructors.
            </p>

            <div className="landing-bottom">
              <input
                type="text"
                className="landing-input pb-2 col-7"
                placeholder="What are you looking for?"
              />
              <button className="btn btn-block landing-button">
                Find it now
              </button>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
        <img className="landing-img" src={landing} />
        <img className="background-img" src={waves} alt="waves" />
      </div>
      <section className="row content-section justify-content-center ms-0 me-0">
        <div className="col-12">
          <h2 className="text-center text-white mt-5 mb-0 courses">Courses</h2>
        </div>
        <div className="col-12">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView="auto"
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1000px
              1000: {
                slidesPerView: 3,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 4,
              },
            }}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="row justify-content-center slider-swiper"
          >
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Course</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Course</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Course</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Course</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body courses-card-body">
                  <h5 className="card-title">CLS Course</h5>
                  <p className="card-text">Some quick example</p>
                </div>
                <img src={dd} className="card-img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-12">
          <h2 className="text-center text-white mt-5 mb-0 courses">
            Instructors
          </h2>
        </div>
        <div className="col-12">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView="auto"
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1000px
              1000: {
                slidesPerView: 3,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 4,
              },
            }}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="row justify-content-center slider-swiper"
          >
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Instructor</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Instructor</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Instructor</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Instructor</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide ps-5 pe-5">
              <div className="card text-white">
                <div className="card-body instructors-card-body">
                  <h5 className="card-title">CLS Instructor</h5>
                  <p className="card-text">Some quick example</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-12 w-75 mt-5">
          <div className="row">
            <div className="col-6">
              <div className="row ms-5">
                <div className="col-5 card card-common">
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-content-center">
                      <div className="text-center text-white mt-5">
                        <h3>400</h3>
                        <h5>Total Subscribers</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5 card card-common ms-5">
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-content-center">
                      <div className="text-center text-white mt-5">
                        <h3>400</h3>
                        <h5>Total Subscribers</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5 card card-common mt-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-content-center">
                      <div className="text-center text-white mt-5">
                        <h3>400</h3>
                        <h5>Total Subscribers</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5 card card-common mt-3 ms-5">
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-content-center">
                      <div className="text-center text-white mt-5">
                        <h3>400</h3>
                        <h5>Total Subscribers</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pb-5">
              <div className="row justify-content-center">
                <div className="col-10">
                  <iframe
                    id="preview"
                    style={{
                      border: "0px",
                      height: "400px",
                      width: "100%",
                      margin: "5px",
                      boxShadow: "0 0 16px 3px rgba(0, 0, 0, 0.2)",
                      borderRadius: "20px",
                    }}
                    src="https://xn--r1a.website/s/CPPCCA"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default HomePage;
