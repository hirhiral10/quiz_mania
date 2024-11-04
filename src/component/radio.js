export const Radio = ({ options, onChange, fullWidth,name }) => {
  return (
    <div className={`flex flex-col ${!fullWidth && "md:md:flex-row"} gap-3`}>
      {options.map((option) => {
        return (
          <div
            className={`flex w-full ${
              !fullWidth && "md:w-6/12"
            } items-center ps-4 border border-gray-200 rounded dark:border-gray-700`}
          >
            <input
              id={option.value}
              type="radio"
              value=""
              name={name}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange(option.value);
                }
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-radio-1"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};
