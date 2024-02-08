// import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Toolbar from '@mui/material/Toolbar'
import { NAV_LIST } from './constants'
import './navbar.css'

export const Navbar = () => {

  return (
    <AppBar component='nav'>
      <Toolbar id='navbar'>
        <Link id='nav-title' href='#welcome-section'>
          Bryson Palmer
        </Link>

        <List id='nav-list'>
          {NAV_LIST.map(({ title, href }) => (
            <ListItem key={href} className='list-item'>
              <Link className='li-link' href={href}>
                {title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>

      <div id='nav-menu'>
        <label className='menu-icon'>
          <input type='checkbox' />
        </label>
        <aside className='sidebar'>
          <List>
            {NAV_LIST.map(({ title, href }) => (
              <ListItem key={href} disablePadding>
                <Link href={href}>
                  {title}
                </Link>
              </ListItem>
            ))}
          </List>
        </aside>
      </div>
    </AppBar>
  )
}
