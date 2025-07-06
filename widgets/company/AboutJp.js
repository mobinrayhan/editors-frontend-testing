"use client";

import { Button, Card, Container, Image } from "react-bootstrap";

export default function AboutJames() {
  return (
    <div className="bg-light text-dark py-5">
      <Container>
        <div className="text-center mb-5">
          <Image
            src="/james.jpeg"
            roundedCircle
            width={220}
            height={220}
            className="border border-4 border-primary mb-3"
            style={{ objectFit: "cover" }}
            alt="জেমস প্রিন্স"
          />
          <h1 className="text-primary">জেমস সম্পর্কে</h1>
        </div>

        <p>
          আমি <span className="text-primary fw-bold">জেমস প্রিন্স</span>, পেশায়
          ইলেকট্রনিক্স অ্যান্ড কমিউনিকেশন ইঞ্জিনিয়ার। ২০১৩ সালে বাংলাদেশের
          স্বনামধন্য টেলিভিশন চ্যানেল{" "}
          <span className="text-primary fw-bold">Channel 24</span>-এ স্যাটেলাইট
          কমিউনিকেশন ইঞ্জিনিয়ার হিসেবে আমার পেশাগত জীবন শুরু করি। এর আগে আমি
          একজন গ্রাফিক ডিজাইনার হিসেবে ফ্রিল্যান্স কাজ করতাম।
        </p>

        <p>
          ২০১৬ সালে আমি আরেকটি জনপ্রিয় টিভি চ্যানেল{" "}
          <span className="text-primary fw-bold">Jamuna TV</span>-তে স্যাটেলাইট
          ইঞ্জিনিয়ার হিসেবে যোগ দিই। কিন্তু ২০১৫ সালেই আমি বুঝে যাই —{" "}
          <span className="text-primary fw-bold">ভিডিও কনটেন্টই ভবিষ্যৎ</span>।
          তখন থেকেই আমি ইউটিউবে কনটেন্ট তৈরি শুরু করি এবং ভিডিও এডিটিং শেখা শুরু
          করি।
        </p>

        <p>
          বছরের পর বছর আমি আমার ফুল-টাইম চাকরি এবং কনটেন্ট ক্রিয়েশন—দুটা একসাথে
          চালিয়ে গেছি। অবশেষে{" "}
          <span className="text-primary fw-bold">২০২৩ সালে</span> আমি চাকরি
          ছেড়ে পুরোপুরি কনটেন্ট ও ভিডিও এডুকেশনে ফোকাস করি।
        </p>

        <p>
          বর্তমানে আমি পরিচালনা করছি দুটি ইউটিউব চ্যানেল — একটি বাংলায়, একটি
          ইংরেজিতে। আমার ইউটিউব চ্যানেলের মাধ্যমে আমি{" "}
          <span className="text-primary fw-bold">
            বাংলাদেশ ও বিশ্বের অর্ধ-মিলিয়নেরও বেশি মানুষকে
          </span>{" "}
          ভিডিও এডিটিং শিখিয়েছি।
        </p>

        <p>
          <span className="text-primary fw-bold">২০২২ সালে</span> আমি{" "}
          <span className="text-primary fw-bold">১০ মিনিট স্কুল</span>-এ যুক্ত
          হই "Premiere Pro দিয়ে ভিডিও এডিটিং" কোর্সের ইন্সট্রাক্টর হিসেবে।
          সেখানে বর্তমানে আমার ৫০০০+ শিক্ষার্থী রয়েছে।
        </p>

        <p>
          এখন আমি তৈরি করেছি আমার নিজস্ব ভিডিও লার্নিং প্ল্যাটফর্ম —{" "}
          <span className="text-primary fw-bold">Editors Academy</span>। এখানে
          প্রতিটি কোর্স আমি নিজেই তৈরি ও পরিচালনা করি। শেখানোর স্টাইল, কোর্স
          কনটেন্ট—সবকিছুতেই আমার পূর্ণ নিয়ন্ত্রণ রয়েছে।
        </p>

        <Card className="card-body text-light mt-5 text-center p-4 rounded">
          <Card.Body>
            <Card.Title className="text-primary">তাহলে আর দেরি কেন?</Card.Title>
            <Card.Text className="text-dark">
              আজই Editors Academy-তে যুক্ত হন, এবং শিখুন ভিডিও এডিটিং একজন
              অভিজ্ঞ প্রশিক্ষকের কাছ থেকে।
            </Card.Text>
            <Button variant="primary" href="/courses">
              কোর্স দেখুন
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
