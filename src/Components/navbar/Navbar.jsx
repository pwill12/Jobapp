/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navs.css';
import { ArrowDownward, Close, Menu, Person } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { logout } from '../../redux/users';

const Navbar = () => {

  const dispatch = useDispatch()

  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!menu)
  }

  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout())
  }

  return (

    <>
      <nav className='navbar px'>
        <NavLink to="/" className='logos'>
          <h2 className='dev'>Devjobs</h2>
        </NavLink>
        <div className="signin">
          {
            user ?
              <>
                <NavLink to="/login" className='login'>
                  <Button variant='outlined'>Post a Job</Button>
                </NavLink>

                {/* <NavLink to="/profile" className='login'> */}
                <Person fontSize='large' onClick={showMenu} />
                {/* </NavLink> */}
              </>
              :
              <>
                <NavLink to="/employer" className='login'>
                  <Button variant='text'>For Employers</Button>
                </NavLink>
                <NavLink to="/login" className='login'>
                  <Button variant='outlined'>Login</Button>
                </NavLink>
              </>
          }
        </div>
        <div className='mobilemenu'>
          <div className='humberger' onClick={showMenu}>
            {user && <Link to='/profile' className='pro'><Person /></Link>}
            {menu ? <Close fontSize='medium' /> : <Menu fontSize='medium' color='' />}
          </div>
        </div>
      </nav>
      {menu &&
        <>
          {
            user ?
              <div className='mobcon'>
                <div className='profiless'>
                  <Person />
                  <p>{user?.username}</p>
                </div>
                <div className='divide'></div>
                <NavLink to='/' className='dot'><h5>jobs</h5></NavLink>
                <NavLink to='/profile' className='dot'><h5>profile</h5></NavLink>
                <NavLink to='/profile' className='dot'><h5>notification</h5></NavLink>
                <div className='divide'></div>

                <NavLink to='/login'><h5 onClick={handleLogout} className='dot'>logout</h5></NavLink>
                <NavLink to='/' className='dot'><h5>for employers</h5></NavLink>
                <NavLink to='/post' className='dot btns'><Button variant='outlined' size='small' fullWidth>Post a Job</Button></NavLink>
              </div>
              :
              <div className='mobcon desktop'>
                <NavLink to='/' className='dot'><h5>Discover</h5></NavLink>
                <NavLink to='/signup' className='dot'><h5>for job seekers</h5></NavLink>
                <NavLink to='/' className='dot'><h5>for employers</h5></NavLink>
                <NavLink to='/login' className='dot btns'><Button variant='outlined' size='small' fullWidth>login</Button></NavLink>
              </div>
          }
        </>
      }
    </>
  );
};

export default Navbar;
