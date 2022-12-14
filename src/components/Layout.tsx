import React from 'react'

export const Layout = ({ children }: any) => {
  return (
    <main>
      {children}
      <footer>Powered by <a href="https://www.continuousdb.com" target="_blank">ContinuousDB</a></footer>
      <style jsx global>{`
        * {
          font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
            'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
            monospace, serif;
        }
        html, body  {
            min-height: 100%
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
        a {
          color: #2563eb;
        }
        p {≥≤
          font-size: 14px;
          line-height: 24px;
        }
        main {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            min-height: 100%
        }
        article {
          margin: 0 auto;
          max-width: 650px;
        }
        button {
          cursor: pointer;
          align-items: center;
          background-color: #2563eb;
          border: 0;
          color: white;
          display: flex;
          padding: 5px 7px;
          transition: background-color 0.3s;
        }
        button:active {
          background-color: #1b9db7;
        }
        button:disabled {
          background-color: #b5bebf;
        }
        button:focus {
          outline: none;
        }
        footer {
            margin-top: auto;
            color: #ccc !important;
            font-size: 0.8rem;
        }
      `}</style>
    </main>
  )
}
