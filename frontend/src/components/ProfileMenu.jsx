import React from 'react'
import {Avatar, Menu} from '@mantine/core'
import userPic from '../assets/testimonials/user1.png'
const ProfileMenu = ({user, logout}) => {
  return (
    <Menu>
        <Menu.Target>
            <Avatar className='cursor-pointer' src={user?.picture} alt="userImg" radius={'xl'}/>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item>
                Favourites
            </Menu.Item>
            <Menu.Item>
                Bookings
            </Menu.Item>
            <Menu.Label>Go back</Menu.Label>
            <Menu.Item
            color = "red"
            onClick={()=>{
                localStorage.clear()
                logout()
            }}
            >
                Logout
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu
