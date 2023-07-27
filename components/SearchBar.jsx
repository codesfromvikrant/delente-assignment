"use client";
import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import SearchDialogs from "./SearchDialogs";

const SearchBar = () => {
  // State to track the search query and whether to display the search results dropdown
  const [search, setSearch] = useState("");
  const [displaydialog, setDisplayDialog] = useState(false);

  // Refs to handle click events outside the search dialog and the form
  const dialogRef = useRef(null);
  const formRef = useRef(null);

  // Effect to handle click events outside the search dialog
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target) &&
        !formRef.current.contains(event.target)
      ) {
        setDisplayDialog(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Render the search input and the search results dialog
  return (
    <div className="position-relative search-comp">
      <Form className="w-100">
        <Form.Control
          ref={formRef}
          type="text"
          value={search}
          onChange={(e) => {
            // Show the search dialog and update the search query
            setDisplayDialog(true);
            setSearch(e.target.value);
          }}
          onClick={() => setDisplayDialog(true)}
          placeholder="Search for Cars..."
          className="py-3"
        />
      </Form>
      {displaydialog && (
        <div ref={dialogRef}>
          <SearchDialogs search={search} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
