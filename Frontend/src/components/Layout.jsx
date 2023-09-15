import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';

export default function Layout({ title, children }) {

  const [query, setQuery] = useState('');

  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ToastContainer position="bottom-center" limit={1} /> */}

      <div className="flex min-h-screen flex-col justify-between bg-gray-100">
        <header>
          <nav className="flex h-12 items-center px-5 py-10 justify-between bg-white">
            <Link href="/" className="px-10 text-lg font-bold">
              <img
              src='/Images/logo.png'
              alt='logo'
              className='h-10 w-45'
               />
            </Link>
            <form
              onSubmit={submitHandler}
              className="mx-auto w-1/3  hidden  justify-center md:flex"
            >
                <div className='border border-r-0 border-gray-300 rounded-l-full shadow-md px-5 py-1 text-sm font-bold text-primary'>Explore</div>
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="w-[100%] border  border-gray-300 shadow-md p-1 text-sm text-black  focus:ring-0"
                // placeholder="Search products"
              />
              <button
                className="border border-l-0 border-gray-300 rounded-r-full shadow-md p-1 px-2 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                <img
                src='/Images/Icons/searchicon.png'
                alt='searchicon'
                className="h-4 w-5"/>
              </button>
            </form>
            <div className="flex items-center z-10">
              {/* <Link href="/cart" className="p-2"> */}
                Cartsssssss
                {/* {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )} */}
              {/* </Link> */}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
        {/* <footer className="flex h-10 justify-center items-center shadow-inner text-primary">
          <p>Copyright © 2022 Amazona</p>
        </footer> */}
      </div>
    </>
  );
}