import React from "react";

function Search(props) {
  return (
    <div className ="row">
    <div className ="col">
      <form>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Search by employee Name" aria-describedby="emailHelp"></input>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Search;