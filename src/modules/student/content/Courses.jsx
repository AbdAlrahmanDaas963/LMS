import React from "react";
import { Stack } from "@mui/material";
import CourseCard from "../../../components/CourseCard";

import data from "../../../data/data.json";

function Courses() {
  const cards = [
    {
      id: 0,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 1,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 2,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 3,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 4,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 5,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    // {
    //   id: 6,
    //   title: "عنوان البطاقة",
    //   desc: "شرح البطاقة",
    //   more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    // },
    // {
    //   id: 7,
    //   title: "عنوان البطاقة",
    //   desc: "شرح البطاقة",
    //   more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    // },
    // {
    //   id: 8,
    //   title: "عنوان البطاقة",
    //   desc: "شرح البطاقة",
    //   more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    // },
    // {
    //   id: 9,
    //   title: "عنوان البطاقة",
    //   desc: "شرح البطاقة",
    //   more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    // },
    // {
    //   id: 10,
    //   title: "عنوان البطاقة",
    //   desc: "شرح البطاقة",
    //   more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    // },
    // {
    //   id: 11,
    //   title: "عنوان البطاقة",
    //   desc: "شرح البطاقة",
    //   more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    // },
  ];
  return (
    <Stack>
      {data.courses.map((card, index) => (
        <CourseCard
          key={index}
          id={card.id}
          desc={card.description}
          more={card.description}
          title={card.title}
          courseDetails={card.courseDetails}
        />
      ))}
      {/* {cards.map((card, index) => (
        <CourseCard
          key={index}
          id={card.id}
          desc={card.desc}
          more={card.more}
          title={card.title}
        />
      ))} */}
    </Stack>
  );
}

export default Courses;
