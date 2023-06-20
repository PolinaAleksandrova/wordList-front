import React from "react";
import Slider from "react-slick";
import "../Courses-section/courses.css";
import BasicCard from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}

export default function Courses() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    // customPaging: function (i) {
    //   return <p>{i + 1}</p>;
    // },

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "62px 0px" }}>
        Courses
      </h1>

      <div style={{ margin: 20 }}>
        <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>
    </div>
  );
}

const products = [
  {
    id: 1,
    image: "https://www.woodwardenglish.com/wp-content/uploads/2020/04/english-phrasal-verbs-course.jpg",
  },
  {
    id: 2,
    image: "https://www.woodwardenglish.com/wp-content/uploads/2022/09/english-reading-course-read-in-english.jpg",
  },
  {
    id: 3,
    image: "http://cotkandy.dtet.gov.lk/img/course/engcom.jpg",
  },
  {
    id: 4,
    image: "https://www.kingseducation.com/assets/images/assets/kings-life/2023-06/SEO_ENG_BusinessEnglishCourses.jpg",
  },

  {
    id: 5,
    image: "https://i.vimeocdn.com/video/1206403343-e49a33c8f2a496879311ad6e740ee797a5b21e7be4f3a3efc277d72551f58d51-d_640",
  },
  {
    id: 6,
    image: "https://www.woodwardenglish.com/wp-content/uploads/2022/09/english-reading-course-read-in-english.jpg",
  },
];
