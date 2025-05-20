const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="w-full text-white bg-primary hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-[25px] text-sm px-4 py-2 text-center transition ease-in-out duration-150"
    >
      {title}
    </button>
  );
};

export default Button;
