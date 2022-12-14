import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  const { pathname } = useRouter()

  return (
    <header>
        <a href="https://www.continuousdb.com" target="_blank"><Image src="/logo.svg" alt="logo" height={28.2} width={200} className="logo" /></a>
        <div>Demo App</div>
        {/* <Link href="/" className={pathname === '/' ? 'is-active' : ''}>
            Home
        </Link> */}
        <style jsx>{`
            header {
                margin-bottom: 55px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                color: #000;
                position: relative;
            }
            a {
                font-size: 14px;
                margin-right: 15px;
                text-decoration: none;
                position: relative;
            }
            .is-active {
                text-decoration: underline;
            }
            img.logo {
                color: #000;
                marginRight: 25px;
            }
        `}</style>
    </header>
  )
}
