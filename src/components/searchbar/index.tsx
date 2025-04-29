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

  const handleSearch = async (e: React.FormEvent) => {
  e.preventDefault(); 
  setLoading(true);
  setError("");
  setResults([]); 

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
  } catch (error) {
  setError("An error occurred while searching. Please try again later.");
  }finally{ 
    setLoading(false);
  }
  };

  return (
    <div className='flex items-center relative w-1/3 mx-auto'>
      <form onSubmit={handleSearch}>
             <input
               type={type}
               placeholder={placeholder}
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className={`w-full py-3 pl-4 pr-12 rounded-full border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 ${className}`}
             />
       
             <IoSearch
               className="absolute  text-gray-500 right-4 cursor-pointer"
             />
      </form> 

      {loading && <p className='text-center'>Loading...</p> }
      {error && <p className=''>{error}</p>}
      {results.length > 0 && ( 
        <div>
          <h3>Search Result: </h3>
          <ul> 
            {results.map((result, index) => ( 
              <li>
                <h3>{result.title}</h3>
                <p>{result.summary}</p>
                <a href={result.url} className=''>read More</a> 
              </li>
            ))}
          </ul>
        </div> 
      )}
    </div>
  )
} 
export default SearchBar
