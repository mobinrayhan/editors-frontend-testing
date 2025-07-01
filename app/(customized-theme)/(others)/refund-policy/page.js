"use client";
import { Card, Container, ListGroup } from "react-bootstrap";

const RefundPolicy = () => {
  return (
    <>
      <Container className="my-5">
        <Card className="p-4 shadow-lg rounded-4">
          <h1 className="mb-2">Editors.Academy রিফান্ড নীতি</h1>
          <p className="text-muted mb-4">সর্বশেষ হালনাগাদ: ২৯ জুন, ২০২৫</p>

          <section className="mb-5">
            <h2 className="h5 border-bottom pb-2 mb-3">সংক্ষিপ্ত বিবরণ</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              আমরা সর্বোচ্চ মানের শিক্ষা অভিজ্ঞতা নিশ্চিত করতে প্রতিজ্ঞাবদ্ধ।
              যদি কোনো প্রযুক্তিগত সমস্যা আপনার কোর্সে প্রবেশে বিঘ্ন ঘটে অথবা
              সম্পূর্ণ অসন্তুষ্ট হন, তাহলে ৪৮ ঘণ্টার মধ্যে রিফান্ডের আবেদন করতে
              পারেন।
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h5 border-bottom pb-2 mb-3">যোগ্যতা ও শর্তাবলী</h2>
            <ListGroup
              as="ul"
              className="ps-0"
              style={{ listStyle: "none", counterReset: "item" }}
            >
              {[
                "কোর্স ক্রয়ের ৪৮ ঘণ্টার মধ্যে রিফান্ডের জন্য আবেদন করতে হবে।",
                "ইমেইলে (support@editors.academy) আপনার নাম, অর্ডার আইডি ও সমস্যার বিবরণ পাঠান।",
                "৩–৭ কর্মদিবসের মধ্যে অতিরিক্ত তথ্যের জন্য আমাদের পক্ষ থেকে যোগাযোগ করা হবে।",
                "অনুমোদিত আবেদন হলে ৭–১৫ কর্মদিবসের মধ্যে রিফান্ড নিশ্চিত করা হবে।",
              ].map((text, idx) => (
                <ListGroup.Item
                  as="li"
                  key={idx}
                  className="d-flex align-items-start border-0 ps-0"
                  style={{ marginBottom: "16px" }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      backgroundColor: "#754ffe",
                      color: "#fff",
                      borderRadius: "50%",
                      fontSize: "14px",
                      marginRight: "12px",
                      marginTop: "4px",
                    }}
                  >
                    {idx + 1}
                  </span>
                  <p
                    style={{
                      flex: 1,
                      fontSize: "16px",
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </section>

          <section className="mb-5">
            <h2 className="h5 border-bottom pb-2 mb-3">রিফান্ড আবেদন পদ্ধতি</h2>
            <ul style={{ paddingLeft: "16px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>ইমেইল:</strong>{" "}
                <a href="mailto:support@editors.academy">
                  support@editors.academy
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>সাবজেক্ট:</strong> রিফান্ড অনুরোধ – [কোর্সের নাম]
              </li>
              <li>
                <strong>মেসেজে যোগ করুন:</strong> নাম, অর্ডার/লেনদেন আইডি, ও
                সমস্যার সংক্ষিপ্ত বিবরণ।
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="pb-2 mb-3 border-bottom">৮. যোগাযোগ</h2>
            <div className="p-3 border-start border-4 rounded bg-light border-primary">
              <p style={{ fontSize: "16px" }}>
                যেকোনো প্রশ্ন বা সহায়তার জন্য{" "}
                <a href="mailto:support@editors.academy">
                  support@editors.academy
                </a>{" "}
                এ যোগাযোগ করুন। আমাদের দল দ্রুত সাড়া দেবে।
              </p>
            </div>
          </section>

          <p className="text-muted text-center" style={{ fontSize: "14px" }}>
            Editors.Academy-কে বেছে নেওয়ার জন্য ধন্যবাদ। আপনার সন্তুষ্টি এবং
            শেখার সূচনা আমাদের ক্ষমা নয়, প্রতিজ্ঞা।
          </p>
        </Card>
      </Container>
    </>
  );
};

export default RefundPolicy;
