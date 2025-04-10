import { FaEyeSlash } from "react-icons/fa";

const Input = ({ label, name, type, isRequired }) => {
  return (
    <div className="flex flex-col gap-2 bg-white">
      <label
        htmlFor={name}
        className="font-dm/[140%] text-sm md:text-base flex gap-1">
        {label}
        <span className="text-danger">{isRequired ? "*" : ""}</span>
      </label>
      <div className="border border-border-card rounded-md px-2.5 py-1 flex items-center gap-2">
        {type === "tel" && (
          <div className="flex items-center">
            <img src="./src/assets/indonesia.png" alt="ID" className="size-5" />
            <select name="country-code" id="country-code" className="flex-1 px-2 border-none outline-none">
              <option value="+62">+62</option>
              <option value="+26">+26</option>
            </select>
          </div>
        )}
        <input
          type={type}
          name={name}
          required
          className="w-full p-1 outline-none "
        />
        {type === "password" && (
          <FaEyeSlash className="text-text-secondary text-2xl cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Input;
