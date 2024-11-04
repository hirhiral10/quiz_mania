import { useState } from "react";
import { Button } from "./button";
import { Radio } from "./radio";

export const Entry = ({ onSubmit, error }) => {
  const [data, setData] = useState({});

  onsubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  console.log(error);
  return (
    <div className="flex justify-center p-6">
      <div>
        <div className="font-bold text-6xl m-6">
          Welcome to{" "}
          <span className="text-pink-700">
            <span className="font-normal">QUIZ</span>
            <span>Mania</span>
          </span>
        </div>
        <div className="bg-stone-200 p-2 text-start	mt-2 mx-8">
          Please read all the rules about this quiz before you start.
          <p className="text-pink-700 cursor-pointer">Quiz rules</p>
        </div>
        <form className="mx-8 text-start" onSubmit={onsubmit}>
          <div className="my-6">
            <label
              for="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setData({ ...data, user: e.target.value })}
              className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Full Name"
            />
            <span className="text-red-700 text-sm">{error?.user}</span>
          </div>
          <div>
            <Radio
              options={[
                { label: "Javascript", value: "js" },
                { label: "React JS", value: "react" },
              ]}
              name="language"
              onChange={(value) => setData({ ...data, language: value })}
            />
            <span className="text-red-700 text-sm">{error?.language}</span>
          </div>
          <Button>Start Quiz</Button>
        </form>
      </div>
    </div>
  );
};
