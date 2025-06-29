import { Card, CardBody, Col, Container, Row } from "react-bootstrap";

export default function RefundPolicy() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0">
            <CardBody>
              <h1 className="mb-4 text-center py-1">
                Editors.Academy রিফান্ড নীতি
              </h1>
              <p>
                Editors.Academy-তে আমরা আপনাকে সেরা শিক্ষা অভিজ্ঞতা দিতে
                প্রতিশ্রুতিবদ্ধ। তবুও কোনো কারণে আপনি যদি আমাদের কোর্স বা সেবা
                নিয়ে অসন্তুষ্ট হন, নিচের পদ্ধতি অনুসরণ করে রিফান্ডের আবেদন করতে
                পারেন।
              </p>

              <h2 className="mt-4">১. রিফান্ডের শর্তাবলী</h2>
              <ul>
                <li>
                  <h3>৪৮ ঘণ্টার ভিতরে আবেদন</h3>
                  <p>
                    কোর্স ক্রয়ের ৪৮ ঘণ্টার মধ্যে আপনার রিফান্ডের অনুরোধ
                    গ্রহণযোগ্য, তবে শুধুমাত্র তখনই যখন টেকনিক্যাল সমস্যার কারণে
                    আপনি কোর্সে প্রবেশ করতে পারছেন না।
                  </p>
                </li>
                <li>
                  <h3>আবেদনের ফর্মালিটি</h3>
                  <p>
                    রিফান্ড চাহিদা জানানোর জন্য ইমেইলে (support@editors.academy)
                    আপনার নাম, কোর্সের নাম, অর্ডার নম্বর ও সমস্যার বিবরণ পাঠাতে
                    হবে।
                  </p>
                </li>
                <li>
                  <h3>প্রক্রিয়ার সময়</h3>
                  <p>
                    রিফান্ড অনুরোধ পাওয়ার ৩–৭ ব্যবসায়িক দিনের মধ্যে আমরা আপনার
                    সঙ্গে যোগাযোগ করে প্রয়োজনীয় অতিরিক্ত তথ্য নেবো। আমাদের
                    অনুমোদন পেলে, রিফান্ড সম্পন্ন হতে ৭–১৫ কার্যদিবস লাগতে পারে।
                  </p>
                </li>
              </ul>

              <h2 className="mt-4">২. রিফান্ড আবেদন প্রক্রিয়া</h2>
              <ul>
                <li>
                  <p>
                    ইমেইল করুন:{" "}
                    <a href="mailto:support@editors.academy">
                      support@editors.academy
                    </a>
                  </p>
                </li>
                <li>
                  <p>সাবজেক্ট লাইনে লিখুন: “রিফান্ড অনুরোধ – [কোর্স নাম]”</p>
                </li>
                <li>
                  <p>মেসেজে যুক্ত করুন:</p>
                  <ul>
                    <li>আপনার পুরো নাম</li>
                    <li>আদেশ/ট্রানজেকশন আইডি</li>
                    <li>কারণ ও সমস্যা সংক্ষেপে</li>
                  </ul>
                </li>
              </ul>

              <h2 className="mt-4">৩. যোগাযোগ</h2>
              <p>
                রিফান্ড প্রক্রিয়া, নীতি সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের
                সাপোর্ট টিমে লিখুন:
                <br />
                📧{" "}
                <a href="mailto:support@editors.academy">
                  support@editors.academy
                </a>
              </p>

              <p className="mt-4">
                Editors.Academy-কে বেছে নেওয়ার জন্য আপনাকে ধন্যবাদ। আমরা আপনার
                সন্তুষ্টি নিশ্চিত করতে সর্বদা প্রস্তুত।
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
