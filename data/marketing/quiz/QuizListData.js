// import node module libraries
import { v4 as uuid } from 'uuid';

export const QuizListData = [
    {
      id: uuid(),
        title: "Javascript Basic Quiz",
        image: '/images/course/course-javascript.jpg',
        duration : "30 Minutes",     
        questions: 15
      },
      {
        id: uuid(),
        title: "React Basic Quiz",
        image: '/images/course/course-react.jpg',
        duration : "18 Minutes",        
        questions: 20
      },
      {
        id: uuid(),
        title: "CSS Beginner Quiz",
        image: '/images/course/course-css.jpg',
        duration : "15 Minutes",       
        questions: 18
      },
      {
        id: uuid(),
        title: "Vue.js Basic Quiz",
        image: '/images/course/course-vue.jpg',
        duration : "35 Minutes",      
        questions: 26
      },
      {
        id: uuid(),
        title: "HTML 5 Basic Quiz",
        image: '/images/course/course-html.jpg',
        duration : "30 Minutes",        
        questions: 15
      }
];

export default QuizListData;
