import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (inputValue.length >= 4) {
        router.push(`/search?q=${inputValue}`);
      } else {
        alert("Search keyword minimum 4 character");
      }
    }
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        type="text"
        placeholder="Search here..."
        className="border-[3px] border-neutral-800 mb-14 px-5 py-2 font-bold text-neutral-800 w-full outline-none"
      />
    </>
  );
};

export default SearchBar;
