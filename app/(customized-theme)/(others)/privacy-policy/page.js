"use client";
import { Card, Container } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg rounded-4 card">
        <h1 className="mb-2 fw-bold">Editors.Academy গোপনীয়তা নীতি</h1>
        <p className="text-muted mb-4">সর্বশেষ হালনাগড: ২৯ জুন, ২০২৫</p>

        {/* Section 1 */}
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-3 fw-semibold">
            <span className="text-primary">১.</span> তথ্য সংগ্রহের ধরন
          </h2>
          <ul className="ps-3">
            <li>
              <strong>১.১ ব্যক্তিগত তথ্য:</strong> নাম, ইমেইল ঠিকানা, ফোন নম্বর
              এবং লেনদেন বা পেমেন্ট সংক্রান্ত বিবরণ।
            </li>
            <li>
              <strong>১.২ প্রযুক্তিগত ও ব্যবহার বিষয়ক তথ্য:</strong> আইপি
              ঠিকানা, ব্রাউজার ও ডিভাইসের ধরন, এবং সাইটে ব্রাউজিং আচরণ।
            </li>
            <li>
              <strong>১.৩ কুকিজ ও ট্র্যাকিং টেকনোলজি:</strong> ব্যবহার
              পরিসংখ্যান সংগ্রহে কুকিজ এবং অনুরূপ প্রযুক্তি প্রয়োগ করা হয়।
              ব্রাউজারে কুকি নিয়ন্ত্রণ করতে পারেন।
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-3 fw-semibold">
            <span className="text-primary">২.</span> তথ্য ব্যবহারের উদ্দেশ্য
          </h2>
          <ul className="ps-3">
            <li>সেবাদান ও কোর্স ডেলিভারি নিশ্চিত করা।</li>
            <li>নিবন্ধন, আপডেট ও গুরুত্বপূর্ণ বিজ্ঞপ্তি প্রেরণ।</li>
            <li>গ্রাহক সহায়তা প্রদান।</li>
            <li>প্রয়োজনে প্রমোশনাল ইমেইল (আপনার সম্মতিতে) প্রেরণ।</li>
            <li>ওয়েবসাইট ও পরিষেবা উন্নয়নে সাহায্য।</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-3 fw-semibold">
            <span className="text-primary">৩.</span> তথ্য শেয়ারিং ও প্রকাশ
          </h2>
          <ul className="ps-3">
            <li>
              তৃতীয় পক্ষ (পেমেন্ট গেটওয়ে, ইমেইল সার্ভিস) এর সাথে শেয়ার করা হয়।
            </li>
            <li>
              আইনগত কর্তৃপক্ষ বা আমাদের অধিকার রক্ষায় প্রয়োজন হলে প্রকাশ করা হতে
              পারে।
            </li>
            <li>
              আপনার স্পষ্ট সম্মতিতে অন্য কোনো পক্ষের সাথে শেয়ার করা হতে পারে।
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-3 fw-semibold">
            <span className="text-primary">৪.</span> নিরাপত্তা ব্যবস্থা
          </h2>
          <p>
            আমরা তথ্যের নিরাপত্তা নিশ্চিত করতে প্রযুক্তিগত ও প্রশাসনিক ব্যবস্থা
            গ্রহণ করি। তবে ইন্টারনেটের নির্ভুলতা সম্পূর্ণভাবে অস্বীকার করা যায়
            না।
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-3 fw-semibold">
            <span className="text-primary">৫.</span> আপনার নিয়ন্ত্রণ
          </h2>
          <ul className="ps-3">
            <li>
              প্রমোশনাল ইমেইল থেকে <strong>Unsubscribe</strong> লিঙ্কের মাধ্যমে
              আউট হতে পারেন।
            </li>
            <li>
              তথ্য হালনাগাদ বা মুছে ফেলার আবেদন{" "}
              <a href="mailto:support@editors.academy">
                support@editors.academy
              </a>{" "}
              এ ইমেইল করুন।
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-3 fw-semibold">
            <span className="text-primary">৬.</span> শিশুদের গোপনীয়তা
          </h2>
          <p>
            আমাদের সেবা ১৩ বছরের নিচের শিশুদের জন্য নয়। এদের ব্যক্তিগত তথ্য আমরা
            সংগ্রহ করি না।
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-3 fw-semibold">
            <span className="text-primary">৭.</span> নীতি হালনাগাদ
          </h2>
          <p>
            আইনগত বা প্রযুক্তিগত কারণে আমরা এই নীতি সময় সময় আপডেট করব; প্রকাশের
            সাথে সাথেই কার্যকর হবে।
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-4">
          <h2 className="border-bottom pb-2 mb-3 fw-semibold">
            <span className="text-primary">৮.</span> যোগাযোগ
          </h2>
          <Card className="bg-white border-start border-4 border-primary p-3">
            <p className="mb-0">
              প্রশ্ন বা উদ্বেগের জন্য ইমেইল করুন:{" "}
              <a href="mailto:support@editors.academy">
                support@editors.academy
              </a>
            </p>
          </Card>
        </section>

        <p className="text-muted text-center mt-4">
          Editors.Academy ব্যবহার করে, আপনি এই নীতির শর্তাবলী মেনে চলতে সম্মত
          হচ্ছেন। ধন্যবাদ!
        </p>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;
