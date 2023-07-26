"use client"
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [productCars, setProductCars] = useState();

  const api = "https://64c036e40d8e251fd11201bc.mockapi.io/api/v1/";

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(`${api}cars`);
        setProductCars(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Context.Provider value={{ productCars }}>
      {children}
    </Context.Provider>
  )
};
