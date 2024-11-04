const data = {
  categories: [
    {
      id: "js",
      name: "JavaScript Basics",
      questions: [
        {
          id: "q1",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q3",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q4",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q5",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q6",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "react",
      name: "React JS",
      questions: [
        {
          id: "q1",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q3",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q4",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q5",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q6",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
      ],
    },
  ],
};

export const getData = (id) =>
  data.categories.filter((cat) => cat.id === id)?.[0];
