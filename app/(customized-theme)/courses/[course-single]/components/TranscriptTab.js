"use client";
// import node module libraries
import Link from "next/link";
import { Fragment } from "react";

// import data files
import { Transcripts } from "data/courses/CourseIndexData";

const TranscriptTab = () => {
  return (
    <Fragment>
      <h3 className="mb-3">
        Transcript from the &quot;Introduction&quot; Lesson
      </h3>
      {Transcripts.map((item, index) => (
        <div className="mb-4" key={index}>
          <h4>
            {item.title}{" "}
            <Link href="#" className="text-primary ms-2 h4">
              {item.duration}
            </Link>
          </h4>
          <div
            dangerouslySetInnerHTML={{
              __html: item.description,
            }}
          />
        </div>
      ))}
    </Fragment>
  );
};
export default TranscriptTab;
