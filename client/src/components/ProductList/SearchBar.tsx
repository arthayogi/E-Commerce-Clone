export default function SearchBar() {
    return(
        <div className="flex flex-row pt-2 relative mx-auto text-gray-600 mt-10">
        <input
          className="border-2 border-gray-300 bg-white h-10 w-screen px-5 pr-16 mr-10 ml-10 mt-1 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <div className="mr-10">
          <button className="rounded-full btn bg-orange-500 text-white w-30 mr-5">
            Search
          </button>
        </div>
      </div>
    )
}