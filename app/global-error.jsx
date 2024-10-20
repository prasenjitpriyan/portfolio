'use server'

import React from 'react'

const GlobalError = () => {
  return (
    <div class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
      <div class="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p class="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
          500
        </p>
        <p class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
          Server Error
        </p>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
          Whoops, something went wrong on our servers.
        </p>
      </div>
      <div class="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full text-blue-600"
          data-name="Layer 1"
          viewBox="0 0 1119.609 699"
        >
          <circle cx="292.609" cy="213" r="213" fill="#f2f2f2"></circle>
          <path
            fill="#2f2e41"
            d="M0 51.142c0 77.498 48.618 140.209 108.7 140.209"
          ></path>
          <path
            fill="currentColor"
            d="M108.7 191.35c0-78.368 54.256-141.783 121.304-141.783M39.384 58.168c0 73.614 31.003 133.183 69.317 133.183"
          ></path>
          <path
            fill="#2f2e41"
            d="M108.7 191.35c0-100.137 62.711-181.167 140.209-181.167"
          ></path>
          <path
            fill="#a8a8a8"
            d="M85.833 192.339s15.415-.475 20.061-3.783 23.713-7.258 24.866-1.953 23.167 26.388 5.762 26.529-40.439-2.711-45.076-5.536-5.613-15.257-5.613-15.257z"
          ></path>
          <path
            d="M136.833 211.285c-17.404.14-40.44-2.711-45.076-5.536-3.531-2.15-4.939-9.869-5.41-13.43-.325.014-.514.02-.514.02s.976 12.433 5.613 15.257 27.672 5.676 45.077 5.536c5.023-.04 6.759-1.828 6.663-4.476-.698 1.6-2.614 2.599-6.353 2.629z"
            opacity="0.2"
          ></path>
          <ellipse
            cx="198.609"
            cy="424.5"
            fill="#3f3d56"
            rx="187"
            ry="25.44"
          ></ellipse>
          <ellipse
            cx="198.609"
            cy="424.5"
            opacity="0.1"
            rx="157"
            ry="21.359"
          ></ellipse>
          <ellipse
            cx="836.609"
            cy="660.5"
            fill="#3f3d56"
            rx="283"
            ry="38.5"
          ></ellipse>
          <ellipse
            cx="310.609"
            cy="645.5"
            fill="#3f3d56"
            rx="170"
            ry="23.127"
          ></ellipse>
          <path
            fill="none"
            stroke="#2f2e41"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M462.61 626c90 23 263-30 282-90M309.61 259s130-36 138 80-107 149-17 172M184.011 537.283s39.073-10.82 41.477 24.045-32.16 44.783-5.11 51.695"
          ></path>
          <path
            fill="#2f2e41"
            d="M778.705 563.24l-7.878 50.295s-38.782 20.603-11.513 21.209 155.733 0 155.733 0 24.845 0-14.543-21.815l-7.878-52.719z"
          ></path>
          <path
            d="M753.828 634.198c6.193-5.51 17-11.252 17-11.252l7.877-50.295 113.921.107 7.878 49.582c9.185 5.087 14.875 8.987 18.203 11.978 5.06-1.154 10.588-5.443-18.203-21.389l-7.878-52.719-113.921 3.03-7.878 50.295s-32.588 17.315-16.999 20.663z"
            opacity="0.1"
          ></path>
          <rect
            width="513.253"
            height="357.52"
            x="578.433"
            y="212.689"
            fill="#2f2e41"
            rx="18.046"
          ></rect>
          <path
            fill="#3f3d56"
            d="M595.703 231.777H1074.416V499.614H595.703z"
          ></path>
          <circle cx="835.059" cy="223.293" r="3.03" fill="#f2f2f2"></circle>
          <path
            fill="#2f2e41"
            d="M1091.686 520.822v31.34a18.043 18.043 0 01-18.046 18.046H596.48a18.043 18.043 0 01-18.046-18.045v-31.34z"
          ></path>
          <path
            fill="#2f2e41"
            d="M968.978 667.466L968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 651.452 645.651 962.312 645.651 968.978 667.466z"
          ></path>
          <path
            fill="#2f2e41"
            d="M1094.437 661.534c-.594 2.539-2.836 5.217-7.902 7.75-18.179 9.09-55.143-2.424-55.143-2.424s-28.48-4.848-28.48-17.573a22.725 22.725 0 012.497-1.485c7.643-4.043 32.984-14.02 77.917.423a18.74 18.74 0 018.541 5.597c1.821 2.132 3.249 4.835 2.57 7.712z"
          ></path>
          <path
            d="M1094.437 661.534c-22.25 8.526-42.084 9.162-62.439-4.975-10.265-7.127-19.59-8.89-26.59-8.757 7.644-4.043 32.985-14.02 77.918.423a18.74 18.74 0 018.541 5.597c1.821 2.132 3.249 4.835 2.57 7.712z"
            opacity="0.1"
          ></path>
          <ellipse
            cx="1066.538"
            cy="654.135"
            fill="#f2f2f2"
            rx="7.878"
            ry="2.424"
          ></ellipse>
          <circle cx="835.059" cy="545.667" r="11.513" fill="#f2f2f2"></circle>
          <path
            d="M968.978 667.466L968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 968.978 667.466z"
            opacity="0.1"
          ></path>
          <path fill="#2f2e41" d="M108.609 159H316.609V401H108.609z"></path>
          <path fill="#3f3d56" d="M87.609 135H337.609V221H87.609z"></path>
          <path fill="#3f3d56" d="M87.609 237H337.609V323H87.609z"></path>
          <path fill="#3f3d56" d="M87.609 339H337.609V425H87.609z"></path>
          <path
            fill="currentColor"
            d="M271.609 150H287.609V166H271.609z"
            opacity="0.4"
          ></path>
          <path
            fill="currentColor"
            d="M294.609 150H310.609V166H294.609z"
            opacity="0.8"
          ></path>
          <path
            fill="currentColor"
            d="M317.609 150H333.609V166H317.609z"
          ></path>
          <path
            fill="currentColor"
            d="M271.609 251H287.609V267H271.609z"
            opacity="0.4"
          ></path>
          <path
            fill="currentColor"
            d="M294.609 251H310.609V267H294.609z"
            opacity="0.8"
          ></path>
          <path
            fill="currentColor"
            d="M317.609 251H333.609V267H317.609z"
          ></path>
          <path
            fill="currentColor"
            d="M271.609 352H287.609V368H271.609z"
            opacity="0.4"
          ></path>
          <path
            fill="currentColor"
            d="M294.609 352H310.609V368H294.609z"
            opacity="0.8"
          ></path>
          <path
            fill="currentColor"
            d="M317.609 352H333.609V368H317.609z"
          ></path>
          <circle cx="316.609" cy="538" r="79" fill="#2f2e41"></circle>
          <path fill="#2f2e41" d="M280.609 600H304.609V643H280.609z"></path>
          <path fill="#2f2e41" d="M328.609 600H352.609V643H328.609z"></path>
          <ellipse
            cx="300.609"
            cy="643.5"
            fill="#2f2e41"
            rx="20"
            ry="7.5"
          ></ellipse>
          <ellipse
            cx="348.609"
            cy="642.5"
            fill="#2f2e41"
            rx="20"
            ry="7.5"
          ></ellipse>
          <circle cx="318.609" cy="518" r="27" fill="#fff"></circle>
          <circle cx="318.609" cy="518" r="9" fill="#3f3d56"></circle>
          <path
            fill="currentColor"
            d="M239.976 464.532c-6.378-28.567 14.012-57.434 45.544-64.474s62.266 10.41 68.644 38.977-14.518 39.104-46.05 46.145-61.759 7.92-68.138-20.648z"
          ></path>
          <ellipse
            cx="417.215"
            cy="611.344"
            fill="#2f2e41"
            rx="39.5"
            ry="12.4"
            transform="rotate(-23.171 156.408 637.654)"
          ></ellipse>
          <ellipse
            cx="269.215"
            cy="664.344"
            fill="#2f2e41"
            rx="39.5"
            ry="12.4"
            transform="rotate(-23.171 8.408 690.654)"
          ></ellipse>
          <path
            fill="#fff"
            d="M362.61 561c0 7.732-19.91 23-42 23s-43-14.268-43-22 20.908-6 43-6 42-2.732 42 5z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default GlobalError
