import React from "react";
import Slider from "react-slick";
import "../Courses-section/courses.css";
import BasicCard from "../Card";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';


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
  const { t } = useTranslation();
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
      {t('tests.title')}
      </h1>

      <div style={{ margin: 20 }}>
        <button onClick={() => slider?.current?.slickPrev()}>{t('tests.prevButton')}</button>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
        >
          {t('tests.nextButton')}
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return (
            <Link to={item.link} key={item.id}>
              <BasicCard item={item} />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}

const products = [
  {
    id: 1,
    image: "https://english-language-club.com/online-classroom/pluginfile.php/3/coursecat/description/A1.jpg",
    link: "/testA1"
  },
  {
    id: 2,
    image: "https://english-language-club.com/online-classroom/pluginfile.php/3/coursecat/description/A2.jpg",
    link: "/testA2"
  },
  {
    id: 3,
    image: "https://westminstercollege.uk/wp-content/uploads/2021/05/se7cggv2xt.png",
    link: "/testB1"
  },
  {
    id: 4,
    image: "https://i.ytimg.com/vi/FoTf1RSvitA/mqdefault.jpg",
    link: "/testB2"
  },

  {
    id: 5,
    image: "https://i.ytimg.com/vi/r7nSgE6_QZc/maxresdefault.jpg",
    link: "/testC1"
  },
  {
    id: 6,
    image: "https://my.7esl.com/wp-content/uploads/2022/10/1-9-624x351.jpg",
    link: "/testC2"
  },
];
