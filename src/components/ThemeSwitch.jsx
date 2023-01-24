import React from 'react'
import '../styles/_themeToggle.sass'

export const ThemeSwitch = ({handleThemeSwitch}) => {
  return (
        <div className="theme-toggle">
          <label className="toggle">
            <input type="checkbox" className="toggle__input" checked={localStorage.getItem('theme') === 'light' ? true : false} onChange={handleThemeSwitch} />
            <span className="toggle__slider">
                <span className="toggle__icon toggle__icon--on">
                <svg width="17" height="18" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.6" d="M15.7784 14.092C13.9975 14.8371 11.9949 14.8411 10.2112 14.1031C8.42736 13.3651 7.00849 11.9455 6.26669 10.1566C5.52488 8.36778 5.5209 6.35619 6.25562 4.56439C6.99035 2.7726 8.40359 1.34736 10.1844 0.60223V0.60223C10.4474 0.475882 10.4207 0.135018 10.1322 0.0912969C8.60008 -0.1409 7.02724 0.0711922 5.60216 0.711822C4.50177 1.15537 3.50037 1.81468 2.65643 2.65125C1.8125 3.48782 1.14294 4.4849 0.686847 5.58426C0.230755 6.68362 -0.00273027 7.86324 2.40878e-05 9.05424C0.00277844 10.2452 0.241717 11.4238 0.702889 12.521C1.16406 13.6182 1.83823 14.6121 2.68602 15.4448C3.53382 16.2774 4.53825 16.932 5.64068 17.3704C6.74311 17.8088 7.92145 18.0222 9.10689 17.9982C10.2923 17.9741 11.4611 17.7131 12.545 17.2303C13.984 16.651 15.2262 15.6842 16.1415 14.4471C16.2939 14.241 16.0064 13.9748 15.7784 14.092V14.092Z" fill="currentColor"></path>
            </svg>
                </span>
                <span className="toggle__icon toggle__icon--off">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M13 8.99999C13 11.2091 11.2091 13 8.99999 13C6.79085 13 4.99999 11.2091 4.99999 8.99999C4.99999 6.79085 6.79085 4.99999 8.99999 4.99999C11.2091 4.99999 13 6.79085 13 8.99999Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7929 5.29288C12.4024 4.90236 12.4024 4.26919 12.7929 3.87867L14.2071 2.46446C14.5976 2.07393 15.2308 2.07393 15.6213 2.46446C16.0118 2.85498 16.0118 3.48814 15.6213 3.87867L14.2071 5.29288C13.8166 5.68341 13.1834 5.68341 12.7929 5.29288Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.20711 5.29288C5.59763 4.90236 5.59763 4.26919 5.20711 3.87867L3.79289 2.46446C3.40237 2.07393 2.7692 2.07393 2.37868 2.46446C1.98816 2.85498 1.98816 3.48814 2.37868 3.87867L3.79289 5.29288C4.18342 5.68341 4.81658 5.68341 5.20711 5.29288Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M9 0C9.55229 0 10 0.447715 10 1V3C10 3.55228 9.55229 4 9 4C8.44772 4 8 3.55228 8 3V1C8 0.447715 8.44772 0 9 0Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7929 12.7071C12.4024 13.0976 12.4024 13.7308 12.7929 14.1213L14.2071 15.5355C14.5976 15.9261 15.2308 15.9261 15.6213 15.5355C16.0118 15.145 16.0118 14.5119 15.6213 14.1213L14.2071 12.7071C13.8166 12.3166 13.1834 12.3166 12.7929 12.7071Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.20711 12.7071C5.59763 13.0976 5.59763 13.7308 5.20711 14.1213L3.79289 15.5355C3.40237 15.9261 2.7692 15.9261 2.37868 15.5355C1.98816 15.145 1.98816 14.5119 2.37868 14.1213L3.79289 12.7071C4.18342 12.3166 4.81658 12.3166 5.20711 12.7071Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M9 18C9.55229 18 10 17.5523 10 17V15C10 14.4477 9.55229 14 9 14C8.44772 14 8 14.4477 8 15V17C8 17.5523 8.44772 18 9 18Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M14 9C14 8.44771 14.4477 8 15 8H17C17.5523 8 18 8.44771 18 9C18 9.55228 17.5523 10 17 10H15C14.4477 10 14 9.55228 14 9Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 9C0 8.44771 0.447715 8 1 8H3C3.55228 8 4 8.44771 4 9C4 9.55228 3.55228 10 3 10H1C0.447715 10 0 9.55228 0 9Z" fill="currentColor"></path>
            </g>
            </svg>
                </span>
            </span>
          </label>
        </div>
  )
}
