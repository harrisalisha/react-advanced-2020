import { useState, useEffect } from 'react';

//custom hooks nmust use 'use' like useFetch
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  //const getProducts = async () => {
    const getProducts = useCallback(async () => {  
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);//useCallback and set second parameter [url]

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  
  return { loading, products};
  // add in second parametProduct, this will not create infinite loop bcause see up we use callback
};
//useEffect(() => {
//    getProducts();
//  }, [url, getProducts]);// this will create infinite loop