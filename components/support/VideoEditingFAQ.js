"use client";

import Link from "next/link";
import { Accordion, Container } from "react-bootstrap";

const VideoEditingFAQ = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">
        ভিডিও এডিটিং কোর্স - সাধারণ জিজ্ঞাসা (FAQ)
      </h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            ভিডিও এডিটিং শেখার জন্য কি ধরণের কম্পিউটার দরকার ?
          </Accordion.Header>
          <Accordion.Body>
            সমসাময়িক যেকোন ল্যাপটপ কিংবা ডেস্কটপ কম্পিউটারের মাধ্যমেই ভিডিও এডিট
            করা সম্ভব। তবে কিছু আডভান্সড কাজ আছে যেগুলো করার জন্য পাওয়ারফুল
            কম্পিউটারের দরকার হয়। শুরুর দিকে আপনি Mac mini M4 দিয়েও Smoothly 4K
            ভিডিও এডিট করতে পারবেন।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            ভিডিও এডিটিং শিখতে কতদিন সময় লাগে ?
          </Accordion.Header>
          <Accordion.Body>
            এটা নির্ভর করে আপনাকে যে শিখাচ্ছে তার শিখানোর দক্ষতা এবং আপনার গ্রহন
            করার ক্ষমতার উপর। একটা সফটওয়ারের কোন টুলের কাজ কি সেটা শিখতে ২ দিনের
            বেশি সময়ের দরকার নেই। কিন্তু সেই টুলটা কোথায় এবং কিভাবে কাজে লাগাতে
            হবে সেটা শিখতে সঠিক গাইডলাইন এবং অনুশীলন প্রয়োজন, যা আমাদের এই কোর্স
            থেকে পাবেন।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            ভিডিও এডিটিংএর জন্য কোন সফটওয়্যার বেস্ট ?
          </Accordion.Header>
          <Accordion.Body>
            যে যেই সফটওয়ারে দক্ষ তার কাছে সেটাই বেস্ট। তবে এক্সপার্টদের মতে
            এডোবি প্রিমিয়ার প্রো এবং ডাভিন্সি রিসোলভ প্রো হচ্ছে ভিডিও এডিটিং-এর
            বেস্ট সফটওয়ার। ছোট বড় ক্রিয়েটর থেকে শুরু করে হলিউড স্টুডিওতেও এই
            সফটওয়ার গুলো ব্যবহৃত হয়। মোবাইল ব্যাবহারকারীদের মদেহে ক্যাপ কাট বেশ
            জনপ্রিয় । আমাদের কোর্সে এডোবি প্রিমিয়ার প্রো বেসিক থেকে প্রোফেশনাল
            লেভেল পর্যন্ত শিখানো হবে।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            সফটওয়্যার ইনস্টল ও সেটআপে সহায়তা পারবো ?
          </Accordion.Header>
          <Accordion.Body>
            আমাদের সাপোর্ট কর্মীগণ এই বিষয়গুলোতে সার্বক্ষণিক সহায়তা করবেন।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>কোর্স কি কি বিষয় থাকবে ?</Accordion.Header>
          <Accordion.Body>
            প্রত্যেক কোর্সের মডিউল কোর্সে পেয়ে যাবেন।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>কোর্সটি কি লাইভ নাকি রেকর্ডেড ?</Accordion.Header>
          <Accordion.Body>
            বর্তমানে আমরা রেকর্ডেড ক্লাস করাচ্ছি লাইভ ক্লাস করতে এইখানে ক্লিক
            করুন।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            কোর্সটি কতদিন ড্যাশবোর্ডে কথাকবে ?
          </Accordion.Header>
          <Accordion.Body>
            কোর্সটি এনরোল করার দিন থেকে পরবর্তী ২ বছর কোর্সটি আপনার ড্যাশবোর্ডে
            থাকবে।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            কোর্সটি শেষ করে আমি কি কোনো সার্টিফিকেট পাবো ?
          </Accordion.Header>
          <Accordion.Body>
            হ্যা, কোর্সটি সম্পন্ন সার্টিফিকেট প্রদান করা হবে ।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>
            ভিডিও এডিটিং দিয়ে কি কি কাজ করা যাবে বা আয় করার সুযোগ কেমন ?
          </Accordion.Header>
          <Accordion.Body>
            এক কথায় বলতে গেলে ভিডিও কন্টেটের ডিমান্ড কোনদিন কমবে না। এডিটিং শিখে
            ইউটিউব/ফেসবুকের মতো প্লাটফর্মে কাজ করে যেমন ক্যরিয়ার গড়া যায়, তেমনি
            মার্কেটপ্লেসে কাজ করেও সফল হওয়া সম্ভব। একই ভাবে অনেক লোকাল
            কোম্পানি/কন্টেন্ট ক্রিয়েটদের টিমে কাজ করারও অসংখ্য সুযোগ রয়েছে।
            শিক্ষাথীদের দক্ষতার ভিত্তিতে বিভিন্ন এজিন্সি ও কোম্পানিতে চাকুরীর
            সুযোগ করে দেয়া হবে।
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>কবে থেকে কোর্স শুরু করতে পারবো ?</Accordion.Header>
          <Accordion.Body>
            আপনি আজ থেকেই এই কোর্স টি শুরু করতে পারবেন।{" "}
            <Link href={"/courses"}> এখানে ক্লিক</Link> করুন।
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default VideoEditingFAQ;
