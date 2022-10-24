const DefaultButton = ({ title, onClick }) => {
  return (
    <button
      type="button"
      className="rounded-md border-2 border-gray-300 px-5 py-1 font-medium text-[18px] transition-colors duration-500 hover:bg-gray-100"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default DefaultButton;
