export const Button = ({ onClick, children }) => {
  return <button
    onClick={onClick}
    type="submit"
    className="p-3 text-white bg-pink-600 rounded min-w-[150px] my-6 text-lg"
  >
    {children}
  </button>;
};
