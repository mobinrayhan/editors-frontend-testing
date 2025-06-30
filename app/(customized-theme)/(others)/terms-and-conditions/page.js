import { Card, Container } from "react-bootstrap";

const TermsAndConditions = () => {
  const technicalHelp = ["প্রতিশ্রুতি:", "সাপোর্ট সময়:", "যোগাযোগ মাধ্যম:"];

  const accountSecurity = [
    "ব্যক্তিগত ক্রেডেনশিয়ালস:",
    "একক ব্যবহার:",
    "ডিভাইস সীমা:",
    "সঠিক তথ্য প্রদান:",
    "নকল তথ্য নিষেধ:",
  ];

  const copyrightContent = [
    "অধিকার স্বত্ব:",
    "ওয়াটারমার্ক & লেবেল:",
    "আইনি মোকাবেলা:",
  ];

  const behavior = ["সুবিবেচিত পরিবেশ:", "প্রমোশনাল বিষয়:"];

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg rounded-4">
        <h1 className="mb-2">Editors.Academy শর্তাবলী ও বিধিমালা</h1>
        <p className="text-muted mb-4">সর্বশেষ হালনাগাদ: ২৯ জুন, ২০২৫</p>

        {/* ১. অ্যাকাউন্ট ও নিরাপত্তা */}
        <section className="mb-5">
          <h2 className="pb-2 mb-3 border-bottom">১. অ্যাকাউন্ট ও নিরাপত্তা</h2>
          <ul className="list-unstyled">
            {[
              "আপনার ব্যবহারকারীর নাম ও পাসওয়ার্ড শুধুমাত্র আপনারই জন্য। শেয়ার করলে অ্যাকাউন্ট বাতিল হতে পারে।",
              "একাউন্টে শুধুমাত্র আপনি কোর্স সম্পন্ন করতে পারবেন; অন্য কারো প্রবেশাধিকার বাতিল হতে পারে।",
              "একযোগে একটি মাত্র ডিভাইস থেকে লগইন; অন্য ডিভাইসে লোগইন করলে পূর্বের সেশন শেষ হবে।",
              "নিবন্ধনকালে সঠিক নাম, ইমেইল, ফোন নম্বর দিতে হবে; ভুল তথ্য পেলে সীমাবদ্ধতা আরোপ হতে পারে।",
              "ছদ্মনাম বা ভুয়া ইমেইল/ফোন ব্যবহার করলে এনরোলমেন্ট বাতিল হতে পারে।",
            ].map((item, index) => (
              <li key={index} className="d-flex mb-3">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 28,
                    height: 28,
                    fontSize: 14,
                    lineHeight: "28px",
                    textAlign: "center",
                    marginRight: 12,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <p className="mb-0 flex-grow-1" style={{ lineHeight: 1.6 }}>
                  <strong>{accountSecurity[index]} </strong>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ২. কপিরাইট ও কন্টেন্ট শেয়ারিং */}
        <section className="mb-5">
          <h2 className="pb-2 mb-3 border-bottom">
            ২. কপিরাইট ও কন্টেন্ট শেয়ারিং
          </h2>
          <ul className="list-unstyled">
            {[
              "সকল লেকচার, টেক্সট, ছবি ও উপকরণ Editors.Academy-এর এক্সক্লুসিভ। অনুমতি ছাড়া শেয়ার বা বিক্রি নিষিদ্ধ।",
              "ভিডিওতে লোগো ও আপনার ইমেইল ডায়নামিকভাবে প্রদর্শিত হবে, কপিরাইট সুরক্ষা নিশ্চিত করতে।",
              "অননুমোদিত শেয়ারে বাংলাদেশি কপিরাইট আইন ও ডিজিটাল সিকিউরিটি আইন অনুযায়ী ব্যবস্থা নেওয়া হবে।",
            ].map((item, index) => (
              <li key={index} className="d-flex mb-3">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 28,
                    height: 28,
                    fontSize: 14,
                    lineHeight: "28px",
                    textAlign: "center",
                    marginRight: 12,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <p className="mb-0 flex-grow-1" style={{ lineHeight: 1.6 }}>
                  <strong>{copyrightContent[index]} </strong>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ৩. পেমেন্ট নীতিমালা */}
        <section className="mb-5">
          <h2 className="pb-2 mb-3 border-bottom">৩. পেমেন্ট নীতিমালা</h2>
          <ul>
            <li className="mb-2">
              <strong>গ্রহণযোগ্য মাধ্যম:</strong> SSLCommerz অনলাইন পেমেন্ট
              গেটওয়ে ব্যবহার করা হয়।
            </li>
            <li>
              <strong>চূড়ান্ত সিদ্ধান্ত:</strong> পেমেন্ট সংক্রান্ত যেকোনো
              বিতর্কে Editors.Academy-এর সিদ্ধান্তই চূড়ান্ত।
            </li>
          </ul>
        </section>

        {/* ৪. সেবা প্রদান */}
        <section className="mb-5">
          <h2 className="pb-2 mb-3 border-bottom">৪. সেবা প্রদান</h2>
          <ul>
            <li className="mb-2">
              <strong>তাত্ক্ষণিক এক্সেস:</strong> পেমেন্ট সফল হতেই কোর্সের
              প্রবেশাধিকার চালু হবে।
            </li>
            <li>
              <strong>সময়সীমা:</strong> এনরোলমেন্টের পর দুই বছর আপনার
              ড্যাশবোর্ডে কোর্স মডিউল থাকবে।
            </li>
          </ul>
        </section>

        {/* ৫. টেকনিক্যাল সহায়তা */}
        <section className="mb-5">
          <h2 className="pb-2 mb-3 border-bottom">৫. টেকনিক্যাল সহায়তা</h2>
          <ul className="list-unstyled">
            {[
              "সাধারণ প্রশ্নের উত্তর ২৪ ঘণ্টার মধ্যে দেওয়া হবে। হার্ডওয়্যার সমস্যা আওতার বাইরে থাকতে পারে।",
              "সকাল ১০টা থেকে সন্ধ্যা ৬টা পর্যন্ত টিম অ্যাকটিভ থাকে।",
              "প্রধানত প্রাইভেট ডিসকর্ড চ্যানেলে সহায়তা করা হয়; প্রয়োজনে ভিডিও কল নেওয়া হতে পারে।",
            ].map((item, index) => (
              <li key={index} className="d-flex mb-3">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 28,
                    height: 28,
                    fontSize: 14,
                    lineHeight: "28px",
                    textAlign: "center",
                    marginRight: 12,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <p className="mb-0 flex-grow-1" style={{ lineHeight: 1.6 }}>
                  <strong>{technicalHelp[index]}</strong> {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ৬. আচরণবিধি */}
        <section className="mb-5">
          <h2 className="pb-2 mb-3 border-bottom">৬. আচরণবিধি</h2>
          <ul className="list-unstyled">
            {[
              "সম্মানজনক ভাষায় আলোচনা করুন; অসম্মানজনক মন্তব্য নিষিদ্ধ।",
              "গ্রুপে অন্য কোর্স/সেবা প্রচার, স্প্যামিং নিষিদ্ধ; লঙ্ঘনে মেম্বারশিপ বাতিল হতে পারে।",
            ].map((item, index) => (
              <li key={index} className="d-flex mb-3">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 28,
                    height: 28,
                    fontSize: 14,
                    lineHeight: "28px",
                    textAlign: "center",
                    marginRight: 12,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <p className="mb-0 flex-grow-1" style={{ lineHeight: 1.6 }}>
                  <strong>{behavior[index]} </strong> {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ৭. শর্তাবলী হালনাগাদ */}
        <section className="mb-5">
          <h2 className="pb-2 mb-3 border-bottom">৭. শর্তাবলী হালনাগাদ</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6 }}>
            Editors.Academy যে কোনো সময় এই শর্তাবলী আপডেট বা সংশোধন করার অধিকার
            সংরক্ষণ করে। পরিবর্তন সাইটে প্রকাশের সঙ্গে সঙ্গেই কার্যকর হবে।
          </p>
        </section>

        {/* ৮. যোগাযোগ */}
        <section className="mb-4">
          <h2 className="pb-2 mb-3 border-bottom">৮. যোগাযোগ</h2>
          <div className="p-3 border-start border-4 rounded bg-light border-primary">
            <p>
              প্রশ্ন বা উদ্বেগের জন্য ইমেইল করুন:{" "}
              <a href="mailto:support@editors.academy">
                support@editors.academy
              </a>
            </p>
          </div>
        </section>

        <p className="text-muted text-center mt-4">
          Editors.Academy-কে বেছে নেওয়ার জন্য ধন্যবাদ। আমরা আপনার শেখার সফলতায়
          অঙ্গীকারবদ্ধ।
        </p>
      </Card>
    </Container>
  );
};

export default TermsAndConditions;
