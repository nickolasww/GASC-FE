import React from 'react'
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
    type: string;
    placeholder: string;
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ type = "text", placeholder, className })   => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false); 

  const handleSearch = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setResults([]);
  setShowResults(false); 

  try{
    const response = await fetch("Masukkan API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if(!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    setResults(data.results);
    setShowResults(true); 
  } catch (error) {
  setError("An error occurred while searching. Please try again later.");
  }finally{
    setLoading(false);
  }
  };

  return (
    <div className='flex items-center relative mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/3'> 
      <form onSubmit={handleSearch} className="w-full"> 
             <input
               type={type}
               placeholder={placeholder}
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className={`w-full py-3 pl-4 pr-12 rounded-full border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 ${className}`}
             />

             <IoSearch
               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" 
             />
      </form>

      {loading && <p className='text-center mt-2'>Loading...</p> }
      {error && <p className='text-red-500 mt-2'>{error}</p>}
      {showResults && results.length > 0 && (
        <div className='absolute top-full left-0 w-full bg-white rounded-md shadow-md mt-2 z-10'> 
          <h3 className='px-4 py-2 font-semibold'>Search Result: </h3>
          <ul className='divide-y divide-gray-200'>
            {results.map((result, index) => (
              <li key={index} className='px-4 py-3'>
                <h4 className='font-semibold'>{result.title}</h4>
                <p className='text-gray-600 text-sm'>{result.summary}</p>
                <a href={result.url} className='text-blue-500 hover:underline text-sm'>Read More</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default SearchBar