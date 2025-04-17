import React from 'react'
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
    type: string;
    placeholder: string;
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({type,placeholder, className}) => {
  return (
    <div className='flex items-center relative w-1/3 mx-auto'>
             <input
               type="text"
               placeholder="Search for anything..."
               className="w-full py-3 pl-4 pr-12 rounded-full border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
             />
       
             <IoSearch
               className="absolute  text-gray-500 right-4"
             />
    </div>
  )
}

export default SearchBar
