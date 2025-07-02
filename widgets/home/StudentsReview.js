"use client";

import { Col, Container, Row } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import Slider from "react-slick";

const reviews = [
  {
    reviewerName: "আব্দুল মোত্তালিব",
    description: `বাংলায় এত সুন্দর ভিডিও এডিটিং শেখানো হয়েছে যে আমি অবাক! James sir এর কোর্স করার পর আমার চ্যানেলের ভিউ ১০ গুণ বেড়েছে।`,
    startCount: 5,
    passion: "ভিডিও এডিটর",
  },
  {
    reviewerName: "মোবিন",
    description: `আমি অনেক আগে থেকেই ভিডিও এডিট শিখতে চাইতাম। এই কোর্সে একদম শুরু থেকে শিখানো হয়েছে, যা আমার খুব উপকারে এসেছে।`,
    startCount: 5,
    passion: "ভিডিও এডিটর",
  },
  {
    reviewerName: "Himon",
    description: `সবকিছু অনেক সহজভাবে বোঝানো হয়েছে। তবে কিছু জায়গায় আরও উদাহরণ দিলে ভালো হতো।`,
    startCount: 4,
    passion: "ভিডিও এডিটর",
  },
  {
    reviewerName: "রবিন",
    description: `এই কোর্স করার পর আমি নিজেই এখন ছোট ছোট প্রজেক্ট নিচ্ছি। সত্যিই দারুন একটা অভিজ্ঞতা!`,
    startCount: 5,
    passion: "ভিডিও এডিটর",
  },
  {
    reviewerName: "Rozen",
    description: `কোর্সটা খুবই হেল্পফুল ছিলো। তবে মাঝে মাঝে কিছু ভিডিওর কোয়ালিটি একটু কম লেগেছে।`,
    startCount: 4,
    passion: "ভিডিও এডিটর",
  },
  {
    reviewerName: "আসরাফুল",
    description: `আমি আগে কিছুই পারতাম না, এখন নিজে ভিডিও এডিট করে ক্লায়েন্টকে দিচ্ছি। ধন্যবাদ স্যার!`,
    startCount: 5,
    passion: "ভিডিও এডিটর",
  },
  {
    reviewerName: "নাফিজ",
    description: `এই কোর্সের মাধ্যমে আমার অনেক নতুন জিনিস শেখা হয়েছে। প্র্যাকটিকাল উদাহরণগুলো খুব ভালো লেগেছে।`,
    startCount: 5,
    passion: "ভিডিও এডিটর",
  },
  {
    reviewerName: "Tonny",
    description: `সবকিছু ভালো ছিল, শুধু কিছু টপিক আরও বিস্তারিত হলে ভালো হতো। তবুও কোর্সটা ছিল অসাধারণ।`,
    startCount: 4,
    passion: "ভিডিও এডিটর",
  },
];

export default function StudentsReview() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="pt-10 pb-10 bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="mb-0 mx-2 text-center">শিক্ষার্থীদের মতামত</h1>
            <p className="text-center ">
              হাজারো সফল ভিডিও এডিটরের সঙ্গে আপনিও যুক্ত হন, যারা তাদের
              ক্যারিয়ারে নতুন মাত্রা এনেছেন আমাদের কোর্সের মাধ্যমে।
            </p>
          </Col>
        </Row>
        <div className="position-relative">
          <Row className="g-4 px-3 py-4">
            <Slider {...settings} className="pb-sm-5 mb-5 slick-slider-wrapper">
              {reviews.map(
                ({ description, passion, reviewerName, startCount }) => (
                  <div className="bg-white p-4 rounded-md-2 text-center">
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "1rem",
                      }}
                    >
                      {Array(5)
                        .fill(1)
                        .map((_, index) =>
                          index < startCount ? (
                            <StarFill
                              size={18}
                              style={{
                                color: "var(--geeks-primary)",
                              }}
                            />
                          ) : (
                            <Star
                              size={18}
                              style={{
                                color: "var(--geeks-primary)",
                              }}
                            />
                          )
                        )}
                    </div>
                    <em className="pb-2 d-inline-block">
                      &quot; {description} &quot;
                    </em>
                    <h3 className="mb-0">{reviewerName}</h3>
                    <span>{passion}</span>
                  </div>
                )
              )}
            </Slider>
          </Row>
        </div>
      </Container>
    </section>
  );
}
