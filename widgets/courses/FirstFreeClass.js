import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const classOptions = [
  "এডিটিংয়ের গুরুত্বপূর্ণ মূলনীতি শিখুন",
  "টাইমলাইনের বেসিকস বুঝে নিন",
  "দরকারি কিবোর্ড শর্টকাটে দক্ষ হন",
  "কোনো ধরনের বাধ্যবাধকতা নেই",
];
export default function FirstFreeClass() {
  const vdocipherIframe = `
            <iframe
              src="https://player.vdocipher.com/v2/?otp=${"course?.videoInfo?.otp"}&playbackInfo=${"course?.videoInfo?.playbackInfo"}"
              title="Editors Academy - First Free Class"
              width="100%"
              height="100%"
              allowfullscreen
              allow="encrypted-media"
              frameborder="0"
            ></iframe>
            `;

  return (
    <section className="pt-10 pb-10 bg-white">
      <Container>
        <Row className="mb-4">
          <Col lg={6} sm={12}>
            <div
              className="h-12rem h-sm-18rem h-lg-20rem h-xl-21rem mb-4"
              dangerouslySetInnerHTML={{ __html: vdocipherIframe }}
            />
          </Col>
          <Col lg={6} sm={12}>
            <h1>
              প্রথম ক্লাস{" "}
              <span
                style={{
                  color: "var(--geeks-primary)",
                }}
              >
                ফ্রি দেখুন
              </span>
            </h1>
            <p>
              আমাদের শেখানোর ধরন ও কোর্সের মান কেমন, তা বুঝে নিন এক্সক্লুসিভ
              প্রিভিউ লেসনের মাধ্যমে। জেমস প্রিন্স নিজে আপনাকে ভিডিও এডিটিংয়ের
              মৌলিক ধারণা শেখাবেন এই ক্লাসে।
            </p>
            <ul className="ps-3" style={{ listStyleType: "none" }}>
              {classOptions.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 d-flex align-items-center gap-2"
                >
                  <span
                    className="rounded"
                    style={{
                      backgroundColor: "var(--geeks-primary)",
                      display: "inline-block",
                      height: "10px",
                      width: "10px",
                    }}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={"/"}
              className="text-light p-2 px-4 rounded-1 d-inline-block "
              style={{
                backgroundColor: "var(--geeks-primary)",
                fontWeight: "bold",
              }}
            >
              ফ্রি ক্লাস দেখুন
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
