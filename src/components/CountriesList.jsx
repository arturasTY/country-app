import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Country } from './Country'
import '../styles/_countriesList.sass'
import useFetch from '../hooks/useFetch'
import {url} from '../api/api'
import 'react-loading-skeleton/dist/skeleton.css'
import { CountrySkeleton } from './CountrySkeleton'

export const CountriesList = () => {
  const {data, loading} = useFetch(url);
  const [select, setSelect] = useState('')
  const [input, setInput] = useState('')
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  const [filteredData, setFilteredData] = useState([]);

  const handleSelectRegion = (e) => {
    setSelect(e.target.value)
  }

  const handleSearchCountries = (e) => {
    setInput(e.target.value)
  }

  const handleSortOrder = (e) => {
    let sortedData

    if(e.target.value === "descending") {
        sortedData = [...data].sort((a, b) => {
            return b.name.common.localeCompare(a.name.common);
          });
    }
    if(e.target.value === "ascending") {
        sortedData = [...data].sort((a, b) => {
            return a.name.common.localeCompare(b.name.common);
          });
    }
    setFilteredData(sortedData)
  }

  const handleClearInput = () => {
    setInput('')
  }
  
  useEffect(() => {
    const result = [...data].filter(
        item => (!input || item.name.common.toLowerCase().includes(input.toLowerCase())) &&
        (!select || item.region === select)
    );
    setFilteredData(result);
    }, [data, input, select]);
  return (
    <section className="countries-s">
        <div className="countries">
            <div className="countries__search">
                <div className="countries__input">
                    <input type="text" name="search" id="search" placeholder="Search by country name" aria-label="Search by country name" value={input} onChange={handleSearchCountries} />
                    {input ? <span className="countries__clear-input" onClick={handleClearInput} aria-label="Clear search field"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="18" height="18"
                            viewBox="0 0 48 48">
                            <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
                            </svg></span> : null}
                </div>
                <div className="countries__select-inputs">
                    <div className="countries__sort-order">
                        <select name="sort-order" id="sort-order" aria-label="Filter by region" onChange={handleSortOrder}>
                            <option value="ascending">A to Z</option>
                            <option value="descending">Z to A</option>
                        </select>
                    </div>
                    <div className="countries__select">
                        <select name="region-filter" id="region-filter" onChange={handleSelectRegion}>
                            <option value="">All</option>
                            {regions.map((region) => (
                                <option value={region} key={region}>{region}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="countries__list">
                {loading && <CountrySkeleton countries={30} />}
                {filteredData?.length ? (
                    filteredData.map(({name, cca3, region, capital, population, flags}) => (
                        <Link to={`/country/${cca3.toLowerCase()}`} key={name.official}>
                            <Country name={name} region={region} capital={capital} population={population} flags={flags} />
                        </Link>
                    ))
                ) : (
                    <article className="countries__item countries__item--not-found">
                        <div className="countries__copy">
                            <h2>Not Found</h2>
                        </div>
                    </article>
                )}
            </div>
        </div>
    </section>
  )
}
