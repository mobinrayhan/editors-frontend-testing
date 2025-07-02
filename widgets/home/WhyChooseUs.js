import { Col, Container, Row } from "react-bootstrap";

const ourPromises = [
  {
    icon: "",
    title: "অভিজ্ঞ প্রশিক্ষক",
    description:
      "৮ বছরের বেশি সময় ধরে শেখানোর অভিজ্ঞতা, সঙ্গে রয়েছে কন্টেন্ট ক্রিয়েশনে দক্ষতা ও রিয়েল লাইফ কাজের অভিজ্ঞতা। সরাসরি ৫,০০০+ মানুষকে প্রশিক্ষণদেয়ার অভিজ্ঞতার পাশাপাশি রয়েছে  ইউটিউবে ১ লক্ষ+দেশি-বিদেশি ছাত্রছাত্রী! ",
  },
  {
    icon: "",
    title: "বাস্তব প্রজেক্ট ও রিসোর্স",
    description:
      "হাতে-কলমে কাজ শিখুন ডাউনলোডযোগ্য অ্যাসেট, টেমপ্লেট এবং বাস্তব ক্লায়েন্ট প্রজেক্টের উদাহরণের মাধ্যমে।",
  },
  {
    icon: "",
    title: "আজীবন অ্যাক্সেস ও আপডেট",
    description:
      "একবার কোর্সে ভর্তি হলে আপনি আজীবন এই কোর্সগুলো ব্যবহার করতে পারবেন, সঙ্গে পাবেন নিয়মিত আপডেট ও নতুন কনটেন্ট।",
  },
  {
    icon: "",
    title: "সার্টিফিকেট ও চাকরির সহায়তা",
    description:
      "কোর্স শেষ করে অর্জন করুন সার্টিফিকেট এবং প্রথম ভিডিও এডিটিং চাকরি পাওয়ার জন্য পান ক্যারিয়ার গাইডলাইন ও সহায়তা।",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="pt-10 pb-10 bg-white">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="mb-0 mx-2 text-center">
              Editors Academy-কে কেন বেছে নেবেন?
            </h1>
            <p className="text-center ">
              আমরা দিচ্ছি বাস্তব অভিজ্ঞতাভিত্তিক সর্বোচ্চ মানের ভিডিও এডিটিং
              শিক্ষা।
            </p>
          </Col>
        </Row>
        <div className="position-relative">
          <Row className="g-4 px-3 py-4">
            {ourPromises.map(({ description, icon, title }) => (
              <Col key={title} xl={3} md={6} sm={12}>
                <article className="p-3 h-100 rounded shadow-sm text-center bg-light">
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3 bg-white"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  >
                    {icon}
                  </div>
                  <h2 className="fs-5">{title}</h2>
                  <p className="text-muted">{description}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
