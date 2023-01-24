import React from 'react'
import '../styles/_country.sass'

export const Country = ({name, region, capital, flags}) => {
  return (
    <article className="countries__item">
        <div className="countries__img">
            <img src={flags.png} alt={name.common} />
        </div>
        <div className="countries__copy">
            <h4 className="countries__heading">{name.common}</h4>
            <p className="countries__text"><strong>Capital:</strong> {!capital ? '-' : capital}</p>
            <p className="countries__text"><strong>Region:</strong> {region}</p>
        </div>
    </article>
  )
}
