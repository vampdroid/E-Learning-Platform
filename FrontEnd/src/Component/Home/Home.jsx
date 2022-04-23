import React from "react";
import js from "../Assets/js.png";
import ok from "../Assets/ok.png";
import "../Home/Home.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Book = () => {
  return (
    <div className="Book">
      <div className="Book-inside">
        <FontAwesomeIcon width={"2em"} icon={faPersonChalkboard} />
      </div>
      <h3 className="mt-2 Book-inside2">Learn from best Instructors</h3>
    </div>
  );
};
const Book1 = () => {
  return (
    <div className="Book">
      <div className="Book-inside">
        <FontAwesomeIcon width={"2em"} icon={faCertificate} />
      </div>
      <h3 className="mt-2 Book-inside2 ">Get Certification</h3>
    </div>
  );
};
const Book2 = () => {
  return (
    <div className="Book">
      <div className="Book-inside">
        <FontAwesomeIcon width={"2em"} icon={faChartLine} />
      </div>
      <h3 className="mt-2 Book-inside2 ">Reach new heights</h3>
    </div>
  );
};
const Sub = () => {
  return (
    <div className="Book1">
      <div className="Book-inside">
        <FontAwesomeIcon width={"4em"} icon={faPlane} />
      </div>
      <h3 className="mt-2 Book-inside2">Physics</h3>
    </div>
  );
};
let Inside = () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(
      <Link className="Link" to="/CourseDetail">
        <div className="outer card shadow pop">
          <img className="img img-fluid" src={js} alt="" />
          <h4 className="">Introduction to js</h4>
          <h5 className="mt-3">Instructor</h5>
        </div>
      </Link>
    );
  }
  return arr;
};

const Owldemo1 = () => {
  var settings = {
    speed: 200,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="bg-primary">
        <div className="container container1">
          <div className="align-items-center g-0 row">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                <h1 className="text-white display-4 fw-bold">
                  Welcome to <br /> E Learning Application
                </h1>
                <p class="text-white-50 mb-4 lead">
                  Hand-picked Instructor and expertly crafted courses, designed
                  for the modern students and entrepreneur.
                </p>
              </div>
            </div>
            <div class="text-lg-end text-center col-xl-7 col-lg-6 col-md-12">
              <img src={ok} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h3>Our 'Featured ' Courses:</h3>
      <br />
      <div data-aos="fade-up">
        <Slider {...settings}>{Inside()}</Slider>
      </div>
      <br />
      <br />
      <Categories />
      <br />
      <br />
      <h3>Other courses you can look upto :</h3>
      <br />
      <div data-aos="fade-right">
        <Slider {...settings}>{Inside()}</Slider>
      </div>
      <div className="Flexdes" data-aos="fade-up">
        <Book />
        <Book1 />
        <Book2 />
      </div>
    </>
  );
};

export default Owldemo1;