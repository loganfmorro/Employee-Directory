import React from "react";

function Navigation({ onSearch, searchTerm, handleSortByName, handleSortByDept }) { 
    return (
        <div className="md:flex justify-between my-6">
            <div className="md:mb-0 mb-4">
                <button onClick={handleSortByName} className="NameButton">Name</button>
                <button onClick={handleSortByDept} className="DeptButton">Dept</button>
            </div>
            <form>
                <input
                    value={searchTerm} 
                    onChange={onSearch} 
                    className="shadow pl-5 rounded w-full py-1"
                    type="text"
                    placeholder="search employee"/>
            </form>
        </div>
    )
}

export default Navigation;