import React from 'react'
import useFetch from '../hooks/useFetch'
import {nameUrl} from '../api/api'
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../styles/_details.sass'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import { DetailsSkeleton } from './DetailsSkeleton';

export const Details = () => {
  const {countryname} = useParams()
  const {data, loading} = useFetch(`${nameUrl}/${countryname}`);
  const empty = {}
  
  return (
    <section className="details-s">
      <div className="details">
      <Link to="/" className="details__back-btn" aria-label="Close"><IoArrowBackCircleOutline /> <span>Back</span></Link>
        {!loading ? data.map((country) => (
          <div className="details__block" key={country.name.common}>
            <div className="details__img">
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div className="details__copy">
              <div className="details__wrapper">
                <div className="details__copy--left">
                  <p className="details__prop"><small className="details__title">Name</small> {country.name.common}</p>
                  <p className="details__prop"><small className="details__title">Capital</small> {country.capital}</p>
                  <p className="details__prop"><small className="details__title">Population</small> {country.population.toLocaleString()}</p>
                  <p className="details__prop"><small className="details__title">Top Level Domain</small> {country.tld}</p>
                </div>
                <div className="details__copy--right">
                  <div className="details__standalone">
                    <p><small className="details__title">Languages</small></p>
                    <ul>
                      {Object.values(country.languages ?? {empty}).map((lang) => (
                        <li key={lang}>{!country.languages ? '—' : lang}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="details__standalone">
                    <p><small className="details__title">Currency</small></p>
                    <ul>
                    {Object.values(country.currencies ?? {empty}).map((currency) => (
                        <li key={currency.name}>{!country.currencies ? '—' : currency.name}&nbsp;{currency.symbol}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="details__standalone">
                    <p><small className="details__title">Time Zone</small></p>
                    <ul>
                    {country.timezones.map((timezone) => (
                      <li key={timezone}>{timezone}</li>
                    ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="details__copy--bottom">
                <p><small className="details__title">Borders the following countries</small></p>
                <ul className="details__lists">
                  {country.borders ? country.borders.map((countryCode) => (
                    <li key={countryCode}><Link to={`/country/${countryCode.toLowerCase()}`}>{countryCode}</Link></li>
                  )) : '—'}
                </ul>
              </div>
            </div>
          </div>
        )) : (
          <DetailsSkeleton />
        )}
      </div>
    </section>
  )
}
