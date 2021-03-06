import React from 'react'
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import Nav from "./Nav"

const SocialContainer = () => {
  return (
    <div className='social-container'>
      <Link href="/">
        <a>
          <img alt='KAT 98.7' src='/img/logo.png'/>
        </a>
      </Link>
      <div className='social-icons'>
        <a href='https://www.facebook.com/katcountry987/'>
          <img alt='facebook' src='/img/icons/facebook.png'/>
        </a>
        <a href='https://www.instagram.com/katcountry987/'>
          <img alt='instagram' src='/img/icons/instagram.png'/>
        </a>
        <a href='https://twitter.com/Katradio'>
          <img alt='twitter' src='/img/icons/twitter.png'/>
        </a>
      </div>
      <style jsx>{`
      .social-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      .social-icons{
        display: flex;
        align-items: center;
      }
      .social-icons a{
        margin-right: 5px;
      }
    `}</style>
    </div>
  )
}

const Header = ({navItems}) => {
  return (
    <div className='main-header'>
      <MaxWidthWrapper>
        <SocialContainer/>
      </MaxWidthWrapper>
      <Nav navItems={navItems}/>
      <style jsx>
        {`
        .main-header {
          background: url("/img/concert.png");
          padding: 15px 0;
        }
      `}
      </style>
      <style jsx global>
        {`
                /* http://meyerweb.com/eric/tools/css/reset/ 
           v2.0 | 20110126
           License: none (public domain)
        */
        
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol, ul {
          list-style: none;
        }
        blockquote, q {
          quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        img {
          display: block;
          max-width: 100%;
        }
        body {
          line-height: 1.4;
        }
      `}
      </style>
    </div>
  )
}

export default Header