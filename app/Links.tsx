'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';
import classes from './layout.module.scss';

export default function Links() {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={clsx(pathname == '/userregistration' && classes.active)}
        href="userregistration"
      >
        USER REGISTRATION
      </Link>
      <Link className={clsx(pathname == '/todos' && classes.active)} href="todos">
        TODOS
      </Link>
    </>
  );
}
