import { MobileMenu } from '..';
import styles from './Header.module.scss';
import { useState } from 'react';

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles.burger} onClick={() => setOpenMobileMenu(true)}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2836_15555)">
            <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
            <path
              d="M3.97461 5.9751H19.9746"
              stroke="#dcdcdc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.97461 11.9751H19.9746"
              stroke="#dcdcdc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.97461 17.9751H19.9746"
              stroke="#dcdcdc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2836_15555">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {openMobileMenu && <MobileMenu setOpen={setOpenMobileMenu} />}
    </header>
  );
};
