"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navegation() {
  const [height, setHeight] = useState(0);
  const [navmobile, setNavmobile] = useState(false);

  useEffect(() => {
    const currentlyHeight = window.innerHeight;
    setHeight(currentlyHeight);
  }, []);

  const hscreen = `${height}px`;

  const handleNavMovile = () => {
    setNavmobile(!navmobile);
  };

  return (
    <header className="relative">
      <div className="w-full flex justify-end items-center p-5 absolute z-10 lg:hidden">
        {!navmobile ? (
          <div onClick={handleNavMovile} className="cursor-pointer">
            <svg
              width="31"
              height="17"
              viewBox="0 0 31 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.414062"
                y="0.737244"
                width="30"
                height="2"
                rx="1"
                fill="white"
              />
              <rect
                x="0.414062"
                y="7.74603"
                width="30"
                height="2"
                rx="1"
                fill="white"
              />
              <rect
                x="0.414062"
                y="14.755"
                width="22"
                height="2"
                rx="1"
                fill="white"
              />
            </svg>
          </div>
        ) : null}
      </div>

      {navmobile ? (
        <nav
          className="lg:hidden bg-[#1D1D1D]  z-20 fixed w-full"
          style={{ height: hscreen }}
        >
          <div className="flex flex-col justify-between w-full h-full">
            <div className="w-full flex justify-end items-center p-5">
              <div onClick={handleNavMovile} className="cursor-pointer">
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2.32837"
                    width="30"
                    height="2"
                    rx="1"
                    transform="rotate(45 2.32837 0)"
                    fill="white"
                  />
                  <rect
                    x="0.914062"
                    y="21.2132"
                    width="30"
                    height="2"
                    rx="1"
                    transform="rotate(-45 0.914062 21.2132)"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <ul className="uppercase text-2xl font-bold flex flex-col items-center justify-center gap-10">
              <Link href="#">
                <li>info</li>
              </Link>

              <Link href="#">
                <li>shedule</li>
              </Link>

              <Link href="#">
                <li>contact</li>
              </Link>
            </ul>

            <div className="flex justify-center gap-5 p-5">
              <svg
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2108 6.99884C14.9514 6.99884 14.5424 7.01309 13.2623 7.07135C11.9846 7.12985 11.1125 7.33213 10.3494 7.62891C9.56011 7.93544 8.89054 8.34549 8.22346 9.01281C7.55589 9.67988 7.14585 10.3495 6.83831 11.1385C6.54078 11.9019 6.33826 12.7742 6.28075 14.0514C6.2235 15.3315 6.2085 15.7408 6.2085 19.0001C6.2085 22.2595 6.223 22.6673 6.281 23.9474C6.33976 25.2251 6.54203 26.0972 6.83856 26.8602C7.14535 27.6496 7.55539 28.3191 8.22271 28.9862C8.88954 29.6538 9.55911 30.0648 10.3479 30.3714C11.1115 30.6682 11.9839 30.8704 13.2613 30.9289C14.5414 30.9872 14.9502 31.0014 18.2093 31.0014C21.4689 31.0014 21.8767 30.9872 23.1568 30.9289C24.4345 30.8704 25.3076 30.6682 26.0711 30.3714C26.8602 30.0648 27.5288 29.6538 28.1956 28.9862C28.8632 28.3191 29.2732 27.6496 29.5808 26.8605C29.8758 26.0972 30.0783 25.2248 30.1383 23.9477C30.1958 22.6675 30.2108 22.2595 30.2108 19.0001C30.2108 15.7408 30.1958 15.3317 30.1383 14.0516C30.0783 12.774 29.8758 11.9019 29.5808 11.1388C29.2732 10.3495 28.8632 9.67988 28.1956 9.01281C27.5281 8.34524 26.8605 7.93519 26.0704 7.62891C25.3053 7.33213 24.4327 7.12985 23.1551 7.07135C21.8749 7.01309 21.4674 6.99884 18.207 6.99884H18.2108ZM17.1342 9.16157C17.4537 9.16107 17.8103 9.16157 18.2108 9.16157C21.4151 9.16157 21.7949 9.17308 23.0603 9.23058C24.2304 9.28409 24.8655 9.47961 25.2886 9.64388C25.8486 9.8614 26.2479 10.1214 26.6677 10.5415C27.0878 10.9615 27.3478 11.3616 27.5658 11.9216C27.7301 12.3442 27.9258 12.9792 27.9791 14.1494C28.0366 15.4145 28.0491 15.7945 28.0491 18.9974C28.0491 22.2002 28.0366 22.5803 27.9791 23.8454C27.9256 25.0155 27.7301 25.6506 27.5658 26.0732C27.3483 26.6332 27.0878 27.032 26.6677 27.4518C26.2477 27.8718 25.8489 28.1319 25.2886 28.3494C24.866 28.5144 24.2304 28.7094 23.0603 28.7629C21.7952 28.8205 21.4151 28.833 18.2108 28.833C15.0062 28.833 14.6264 28.8205 13.3613 28.7629C12.1911 28.7089 11.5561 28.5134 11.1328 28.3492C10.5727 28.1316 10.1727 27.8716 9.75263 27.4516C9.33258 27.0315 9.07256 26.6325 8.85453 26.0722C8.69026 25.6496 8.49449 25.0145 8.44124 23.8444C8.38373 22.5793 8.37223 22.1992 8.37223 18.9944C8.37223 15.7895 8.38373 15.4115 8.44124 14.1464C8.49474 12.9762 8.69026 12.3412 8.85453 11.9181C9.07206 11.3581 9.33258 10.958 9.75263 10.538C10.1727 10.1179 10.5727 9.8579 11.1328 9.63988C11.5558 9.47486 12.1911 9.27984 13.3613 9.22608C14.4684 9.17608 14.8974 9.16107 17.1342 9.15857V9.16157ZM24.617 11.1543C23.8219 11.1543 23.1768 11.7986 23.1768 12.5939C23.1768 13.389 23.8219 14.0341 24.617 14.0341C25.4121 14.0341 26.0571 13.389 26.0571 12.5939C26.0571 11.7989 25.4121 11.1538 24.617 11.1538V11.1543ZM18.2108 12.837C14.8072 12.837 12.0476 15.5965 12.0476 19.0001C12.0476 22.4038 14.8072 25.1621 18.2108 25.1621C21.6144 25.1621 24.373 22.4038 24.373 19.0001C24.373 15.5965 21.6142 12.837 18.2105 12.837H18.2108ZM18.2108 14.9997C20.42 14.9997 22.2112 16.7907 22.2112 19.0001C22.2112 21.2094 20.42 23.0006 18.2108 23.0006C16.0013 23.0006 14.2104 21.2094 14.2104 19.0001C14.2104 16.7907 16.0013 14.9997 18.2108 14.9997V14.9997Z"
                  fill="white"
                />
              </svg>
              <svg
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.05273 26.7489C8.73248 26.8997 11.0758 26.2732 13.3611 24.6144C11.0526 24.2199 9.45172 23.1643 8.58168 20.9834C9.25451 20.8905 9.84615 21.0646 10.5422 20.7861C8.26846 19.7885 6.79518 18.292 6.73717 15.7051C7.45641 15.7631 8.00165 16.2387 8.86009 16.1691C6.77198 14.1274 6.13394 11.9001 7.44481 9.19712C9.62573 11.7029 12.1779 13.4081 15.2984 14.2086C15.4725 14.255 15.6348 14.3014 15.8089 14.3362C16.6093 14.5218 17.5606 14.9162 18.0478 14.8582C18.883 14.7538 18.0478 13.791 18.2566 12.5381C18.9178 8.64029 23.2101 6.86539 26.3886 9.15071C27.3167 9.82355 28.0475 9.81195 28.964 9.40593C29.4396 9.19712 29.9268 8.98831 30.4953 8.74469C30.3677 9.85835 29.5092 10.4732 28.8248 11.2968C29.602 11.4708 30.2284 11.2504 30.9477 11.0184C30.7041 11.8189 30.1008 12.2713 29.5556 12.7121C28.9872 13.1645 28.7668 13.6402 28.7436 14.3826C28.3955 25.6236 15.6233 34.3125 6.88799 27.3985C6.04114 26.7257 6.86478 27.3985 6.05273 26.7489Z"
                  fill="white"
                />
              </svg>
              <svg
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7903 7.46014C12.3781 7.46014 7.17993 12.6583 7.17993 19.0705C7.17993 25.4828 12.3781 30.6809 18.7903 30.6809C25.2026 30.6809 30.4007 25.4828 30.4007 19.0705C30.4007 12.6583 25.2026 7.46014 18.7903 7.46014ZM23.8433 24.31C23.6957 24.5626 23.43 24.7034 23.1571 24.7035C23.021 24.7035 22.8832 24.6685 22.7572 24.5949C20.6708 23.3756 18.2605 23.1796 16.6055 23.2299C14.7722 23.2857 13.4278 23.6476 13.4145 23.6513C12.9919 23.7667 12.5551 23.5181 12.4392 23.0955C12.3233 22.673 12.5712 22.2366 12.9935 22.1202C13.0541 22.1035 14.5009 21.7106 16.5127 21.6442C17.6977 21.6051 18.8385 21.6877 19.9029 21.8896C21.2512 22.1454 22.481 22.5943 23.5584 23.224C23.937 23.4452 24.0645 23.9315 23.8433 24.31ZM25.3194 21.2444C25.1445 21.5436 24.8298 21.7104 24.5065 21.7105C24.3454 21.7105 24.1821 21.669 24.0329 21.5818C21.5615 20.1375 18.7064 19.9055 16.746 19.965C14.5744 20.0311 12.9819 20.4598 12.9661 20.4642C12.4657 20.6007 11.9482 20.3064 11.8109 19.8058C11.6737 19.3053 11.9672 18.7884 12.4676 18.6505C12.5393 18.6308 14.253 18.1653 16.636 18.0867C18.0398 18.0404 19.3911 18.1382 20.6519 18.3774C22.249 18.6804 23.7057 19.2121 24.9819 19.9579C25.4304 20.22 25.5815 20.796 25.3194 21.2444ZM26.2267 18.457C26.029 18.457 25.8288 18.4061 25.6458 18.2992C19.7703 14.8655 12.1487 16.9068 12.0724 16.9279C11.4581 17.0971 10.8231 16.7364 10.6539 16.1221C10.4847 15.5079 10.8454 14.8728 11.4597 14.7036C11.5477 14.6794 13.6497 14.1084 16.5727 14.012C18.2947 13.9554 19.9521 14.0753 21.4987 14.3686C23.4576 14.7402 25.2445 15.3925 26.8099 16.3073C27.3599 16.6287 27.5452 17.3352 27.2238 17.8853C27.0093 18.2523 26.6233 18.457 26.2267 18.457Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </nav>
      ) : null}

      <nav className="hidden lg:flex lg:justify-between lg:items-center lg:p-10 lg:absolute lg:w-full lg:z-50">
        <ul className="uppercase text-sm font-bold flex gap-5">
          <Link href="#">
            <li>info</li>
          </Link>

          <Link href="#">
            <li>shedule</li>
          </Link>

          <Link href="#">
            <li>contact</li>
          </Link>
        </ul>

        <div className="flex gap-5">
          <svg
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M18.2108 6.99884C14.9514 6.99884 14.5424 7.01309 13.2623 7.07135C11.9846 7.12985 11.1125 7.33213 10.3494 7.62891C9.56011 7.93544 8.89054 8.34549 8.22346 9.01281C7.55589 9.67988 7.14585 10.3495 6.83831 11.1385C6.54078 11.9019 6.33826 12.7742 6.28075 14.0514C6.2235 15.3315 6.2085 15.7408 6.2085 19.0001C6.2085 22.2595 6.223 22.6673 6.281 23.9474C6.33976 25.2251 6.54203 26.0972 6.83856 26.8602C7.14535 27.6496 7.55539 28.3191 8.22271 28.9862C8.88954 29.6538 9.55911 30.0648 10.3479 30.3714C11.1115 30.6682 11.9839 30.8704 13.2613 30.9289C14.5414 30.9872 14.9502 31.0014 18.2093 31.0014C21.4689 31.0014 21.8767 30.9872 23.1568 30.9289C24.4345 30.8704 25.3076 30.6682 26.0711 30.3714C26.8602 30.0648 27.5288 29.6538 28.1956 28.9862C28.8632 28.3191 29.2732 27.6496 29.5808 26.8605C29.8758 26.0972 30.0783 25.2248 30.1383 23.9477C30.1958 22.6675 30.2108 22.2595 30.2108 19.0001C30.2108 15.7408 30.1958 15.3317 30.1383 14.0516C30.0783 12.774 29.8758 11.9019 29.5808 11.1388C29.2732 10.3495 28.8632 9.67988 28.1956 9.01281C27.5281 8.34524 26.8605 7.93519 26.0704 7.62891C25.3053 7.33213 24.4327 7.12985 23.1551 7.07135C21.8749 7.01309 21.4674 6.99884 18.207 6.99884H18.2108ZM17.1342 9.16157C17.4537 9.16107 17.8103 9.16157 18.2108 9.16157C21.4151 9.16157 21.7949 9.17308 23.0603 9.23058C24.2304 9.28409 24.8655 9.47961 25.2886 9.64388C25.8486 9.8614 26.2479 10.1214 26.6677 10.5415C27.0878 10.9615 27.3478 11.3616 27.5658 11.9216C27.7301 12.3442 27.9258 12.9792 27.9791 14.1494C28.0366 15.4145 28.0491 15.7945 28.0491 18.9974C28.0491 22.2002 28.0366 22.5803 27.9791 23.8454C27.9256 25.0155 27.7301 25.6506 27.5658 26.0732C27.3483 26.6332 27.0878 27.032 26.6677 27.4518C26.2477 27.8718 25.8489 28.1319 25.2886 28.3494C24.866 28.5144 24.2304 28.7094 23.0603 28.7629C21.7952 28.8205 21.4151 28.833 18.2108 28.833C15.0062 28.833 14.6264 28.8205 13.3613 28.7629C12.1911 28.7089 11.5561 28.5134 11.1328 28.3492C10.5727 28.1316 10.1727 27.8716 9.75263 27.4516C9.33258 27.0315 9.07256 26.6325 8.85453 26.0722C8.69026 25.6496 8.49449 25.0145 8.44124 23.8444C8.38373 22.5793 8.37223 22.1992 8.37223 18.9944C8.37223 15.7895 8.38373 15.4115 8.44124 14.1464C8.49474 12.9762 8.69026 12.3412 8.85453 11.9181C9.07206 11.3581 9.33258 10.958 9.75263 10.538C10.1727 10.1179 10.5727 9.8579 11.1328 9.63988C11.5558 9.47486 12.1911 9.27984 13.3613 9.22608C14.4684 9.17608 14.8974 9.16107 17.1342 9.15857V9.16157ZM24.617 11.1543C23.8219 11.1543 23.1768 11.7986 23.1768 12.5939C23.1768 13.389 23.8219 14.0341 24.617 14.0341C25.4121 14.0341 26.0571 13.389 26.0571 12.5939C26.0571 11.7989 25.4121 11.1538 24.617 11.1538V11.1543ZM18.2108 12.837C14.8072 12.837 12.0476 15.5965 12.0476 19.0001C12.0476 22.4038 14.8072 25.1621 18.2108 25.1621C21.6144 25.1621 24.373 22.4038 24.373 19.0001C24.373 15.5965 21.6142 12.837 18.2105 12.837H18.2108ZM18.2108 14.9997C20.42 14.9997 22.2112 16.7907 22.2112 19.0001C22.2112 21.2094 20.42 23.0006 18.2108 23.0006C16.0013 23.0006 14.2104 21.2094 14.2104 19.0001C14.2104 16.7907 16.0013 14.9997 18.2108 14.9997V14.9997Z"
              fill="white"
            />
          </svg>
          <svg
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M6.05273 26.7489C8.73248 26.8997 11.0758 26.2732 13.3611 24.6144C11.0526 24.2199 9.45172 23.1643 8.58168 20.9834C9.25451 20.8905 9.84615 21.0646 10.5422 20.7861C8.26846 19.7885 6.79518 18.292 6.73717 15.7051C7.45641 15.7631 8.00165 16.2387 8.86009 16.1691C6.77198 14.1274 6.13394 11.9001 7.44481 9.19712C9.62573 11.7029 12.1779 13.4081 15.2984 14.2086C15.4725 14.255 15.6348 14.3014 15.8089 14.3362C16.6093 14.5218 17.5606 14.9162 18.0478 14.8582C18.883 14.7538 18.0478 13.791 18.2566 12.5381C18.9178 8.64029 23.2101 6.86539 26.3886 9.15071C27.3167 9.82355 28.0475 9.81195 28.964 9.40593C29.4396 9.19712 29.9268 8.98831 30.4953 8.74469C30.3677 9.85835 29.5092 10.4732 28.8248 11.2968C29.602 11.4708 30.2284 11.2504 30.9477 11.0184C30.7041 11.8189 30.1008 12.2713 29.5556 12.7121C28.9872 13.1645 28.7668 13.6402 28.7436 14.3826C28.3955 25.6236 15.6233 34.3125 6.88799 27.3985C6.04114 26.7257 6.86478 27.3985 6.05273 26.7489Z"
              fill="white"
            />
          </svg>
          <svg
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M18.7903 7.46014C12.3781 7.46014 7.17993 12.6583 7.17993 19.0705C7.17993 25.4828 12.3781 30.6809 18.7903 30.6809C25.2026 30.6809 30.4007 25.4828 30.4007 19.0705C30.4007 12.6583 25.2026 7.46014 18.7903 7.46014ZM23.8433 24.31C23.6957 24.5626 23.43 24.7034 23.1571 24.7035C23.021 24.7035 22.8832 24.6685 22.7572 24.5949C20.6708 23.3756 18.2605 23.1796 16.6055 23.2299C14.7722 23.2857 13.4278 23.6476 13.4145 23.6513C12.9919 23.7667 12.5551 23.5181 12.4392 23.0955C12.3233 22.673 12.5712 22.2366 12.9935 22.1202C13.0541 22.1035 14.5009 21.7106 16.5127 21.6442C17.6977 21.6051 18.8385 21.6877 19.9029 21.8896C21.2512 22.1454 22.481 22.5943 23.5584 23.224C23.937 23.4452 24.0645 23.9315 23.8433 24.31ZM25.3194 21.2444C25.1445 21.5436 24.8298 21.7104 24.5065 21.7105C24.3454 21.7105 24.1821 21.669 24.0329 21.5818C21.5615 20.1375 18.7064 19.9055 16.746 19.965C14.5744 20.0311 12.9819 20.4598 12.9661 20.4642C12.4657 20.6007 11.9482 20.3064 11.8109 19.8058C11.6737 19.3053 11.9672 18.7884 12.4676 18.6505C12.5393 18.6308 14.253 18.1653 16.636 18.0867C18.0398 18.0404 19.3911 18.1382 20.6519 18.3774C22.249 18.6804 23.7057 19.2121 24.9819 19.9579C25.4304 20.22 25.5815 20.796 25.3194 21.2444ZM26.2267 18.457C26.029 18.457 25.8288 18.4061 25.6458 18.2992C19.7703 14.8655 12.1487 16.9068 12.0724 16.9279C11.4581 17.0971 10.8231 16.7364 10.6539 16.1221C10.4847 15.5079 10.8454 14.8728 11.4597 14.7036C11.5477 14.6794 13.6497 14.1084 16.5727 14.012C18.2947 13.9554 19.9521 14.0753 21.4987 14.3686C23.4576 14.7402 25.2445 15.3925 26.8099 16.3073C27.3599 16.6287 27.5452 17.3352 27.2238 17.8853C27.0093 18.2523 26.6233 18.457 26.2267 18.457Z"
              fill="white"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}