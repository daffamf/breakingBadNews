
import React from 'react';
import Header from './componenst/items/Header';
import CharacterGrid from './componenst/characters/CharacterGrid';
import Search from './componenst/items/Search';
import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'


const App = () =>  {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [query, setQuery] = useState('')


  useEffect(() => {
      const fetchItems = async () => {
          const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

          console.log(result.data)
          setItems(result.data)
          setIsLoading(false)
      }
      fetchItems( )
  }, [query ])

  return (
    <div className="container">
    <Header />
    <Search getQuery={(q)=> setQuery(q)}/>
    <CharacterGrid  isLoading={isLoading} items={items}/>
    </div> 
  );
}

export default App;
