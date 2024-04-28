interface InputComponentProps {
  lableText: string;
}
function InputComponent({ lableText }: InputComponentProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={lableText}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {lableText}
      </label>
      <input
        required
        type="text"
        id="last_name"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </div>
  );
}

export default InputComponent;
