"use client";
import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import SearchDialogs from "./SearchDialogs";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [displaydialog, setDisplayDialog] = useState(false);
  const dialogRef = useRef(null);
  const formRef = useRef(null);

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

  return (
    <div className="position-relative search-comp">
      <Form className="w-100">
        <Form.Control
          ref={formRef}
          type="text"
          value={search}
          onChange={(e) => {
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
