import { IoMdSearch } from "react-icons/io";
const SearchBar = () => {
  function SearchClick(){
    alert("SearchBox is Active")
  }
  return (
    <div className='flex justify-center'>
      <input className="w-48 p-2 text-lg border transition-all duration-300 ease-in-out focus:w-96 focus:outline-none" type="search" placeholder='Search your Required' />
      <h1 className="text-4xl absolute" onClick={SearchClick}>{<IoMdSearch className="relative"/>}</h1>
    </div>
  )
}

export default SearchBar
