import React from "react";
import Logo from "../logo/logo";
import Search from "./search.png";
import AlbumCard from "../albumcard/albumCard";
const AlbumList = ({ onRouteChange, isSignedIn, searchChange }) => {
  return (
    <div>
      //Albumlist text and search
      <div className="flex dt pa3 pa4-ns" style={{ textAlign: "left" }}>
        <h2 className="f3 fw4 mv0" style={{ width: "100px" }}>
          Albums
        </h2>
        <input
          id="name"
          class="w-20 pd5"
          type="search"
          placeholder="Search Albums"
          aria-describedby="name-desc"
          style={{ float: "right" }}
          onChange={searchChange}
        />
        <img
          href="#"
          src={Search}
          alt="Search"
          style={{
            width: "30px",
            height: "30px",
            padding: "10px,10px,10px,10px"
          }}
        />
      </div>
      <article style={{ display: "inline" }}>
        <AlbumCard />
      </article>
    </div>
  );
};

export default AlbumList;
