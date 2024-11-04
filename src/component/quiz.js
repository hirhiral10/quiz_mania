import { useEffect, useState } from "react";
import { getData } from "../quetions";
import { Radio } from "./radio";

export const Quiz = ({ data }) => {
  const questions = getData(data.language);
  const total = questions?.questions?.length;
  const [count, setCount] = useState(1);
  const [timer, setTimer] = useState(10);
  const [sum, setSum] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const question = questions?.questions?.[count];

  useEffect(() => {
    const int = setInterval(() => {
      setTimer((time) => {
        if (time == 1) {
          return handleNext();
        } else {
          return time - 1;
        }
      });
    }, 1000);
    return () => clearInterval(int);
  }, []);

  function handleNext() {
    setCorrect(false);
    setCount((count) => {
      if (count !== total - 1) {
        return count + 1;
      } else {
        setCompleted(true);
        return count + 1;
      }
    });
    return 10;
  }

  const handleChange = (value) => {
    console.log(value, correct, question.correctAnswer, sum);
    if (correct) {
      setSum(sum - 1);
    } else {
      if (value === question.correctAnswer) {
        setSum(sum + 1);
        setCorrect(true);
      }
    }
  };

  return (
    <div>
      {completed ? (
        <div>
          {sum > total / 2 ? <div>Greate Job</div> : <div>Your Score</div>}
        </div>
      ) : (
        <div className="mx-auto max-w-md">
          <div className="p-4 flex justify-between">
            <span>
              <span className="text-pink-700">{count}</span>/{total}
            </span>
            <span>{timer}</span>
          </div>
          <div>
            <p className="mb-4">
              {count}. {question?.question}
            </p>
            <Radio
              fullWidth
              name={question.id}
              options={question?.options?.map((option) => ({
                label: option,
                value: option[0],
              }))}
              onChange={(value) => handleChange(value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
