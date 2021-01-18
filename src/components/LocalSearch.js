import React from 'react'

const LocalSearch = ({keyword,setKeyword}) => {
    const handleSearchChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
      };
    return (
        <div className="mt-5">
            <input type="search" 
            value={keyword} 
            className="form-control"
            onChange={handleSearchChange}
            placeholder="Search..." 
            />
        </div>
    )
}

export default LocalSearch
