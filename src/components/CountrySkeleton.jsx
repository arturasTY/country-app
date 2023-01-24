import React from 'react'
import Skeleton from 'react-loading-skeleton'
import '../styles/_countrySkeleton.sass'

export const CountrySkeleton = ({countries}) => {
  return (
    Array(countries).fill(0).map((_, index) => (
        <div className="country-skeleton" key={index}>
            <div className="country-skeleton__img">
                <Skeleton circle width={100} height={100} />
            </div>
            <div className="country-skeleton__copy">
                <div className="country-skeleton__heading">
                    <Skeleton />
                </div>
                <Skeleton count={2} />
            </div>
        </div>
    ))
  )
}
