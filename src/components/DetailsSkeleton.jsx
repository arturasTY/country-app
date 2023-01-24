import React from 'react'
import Skeleton from 'react-loading-skeleton'
import '../styles/_countrySkeleton.sass'

export const DetailsSkeleton = ({countries}) => {
  return (
    Array(countries).fill(0).map((item, index) => (
    <div className="country-skeleton" key={index}>
        <div className="country-skeleton__img">
            <Skeleton circle width={100} height={100} />
        </div>
        <div className="country-skeleton__copy">
            <div className="country-skeleton__col-1">
                <Skeleton count={4} />
            </div>
            <div className="country-skeleton__col-2">
                <Skeleton count={4} />
            </div>
            <Skeleton />
        </div>
    </div>
    ))
  )
}
