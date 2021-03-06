import React, {useEffect, useCallback} from 'react'
import Link from '../utils/ActiveLink'
import unfetch from "isomorphic-unfetch"
import mainTheme from '../styles/katTheme'
import {useSelector, useDispatch} from "react-redux"
import {withRedux} from "../lib/redux"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Nav = () => {
  const dispatch = useDispatch()
  const getNavItems = useCallback(
    (navItems) => dispatch({
      type: 'GET_NAV_ITEMS',
      data: navItems
    })
  )
  const navItems = useSelector(state => state.navItems)
  useEffect(() => {
    async function getNavigationItems() {
      const initialLinks = [{
        slug: '',
        url: '/',
        title: 'Home',
        type: 'initial'
      }]
      const navItemsRes = await fetch('https://katcms.homesliceweb.com/wp-json/menus/v1/menus/main-navigation')
      const navItemsData = await navItemsRes.json()

      getNavItems(initialLinks.concat(navItemsData.items))
    }

    getNavigationItems()
  }, [])

  if (navItems === null) {
    return <nav>
      <ul>
        <li>.</li>
      </ul>
      <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background: ${mainTheme.brand};
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: black;
        text-decoration: none;
      }
    `}</style>
    </nav>
  }

  const links = navItems.map(navItem => {
      let navItemInfo
      if (navItem.type === 'custom') {
        navItemInfo = {
          key: navItem.slug,
          href: navItem.url,
          label: navItem.title,
          type: navItem.type
        }
      } else {
        navItemInfo = {
          key: navItem.slug,
          href: '/' + navItem.slug,
          label: navItem.title,
          type: navItem.type
        }
      }
      return (
        navItemInfo
      )
    }
  )

  return (
    <nav>
      <MaxWidthWrapper>
        <ul>
          {links.map(({key, href, label, type}) => {
              if (type === 'custom') {
                return (
                  <li key={key}>
                    <a href={href}>{label}</a>
                  </li>
                )
              } else {
                return (
                  <li key={key}>
                    <Link activeClassName=" active-link" href={href}>
                      <a>{label}</a>
                    </Link>
                  </li>
                )
              }
            }
          )}
        </ul>
      </MaxWidthWrapper>
      <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background: ${ mainTheme.brand };
        display: none;
      }
      @media all and (min-width: ${ mainTheme.menuBreakPoint }){
        nav{
        display: block;
        }
      }
      ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        font-weight: bold;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
      }
      a:hover, a:focus {
        border-bottom: black solid 2px;
      }
      .active-link {
        border-bottom: black solid 2px;
      }
    `}</style>
    </nav>
  )
}

export default withRedux(Nav)
