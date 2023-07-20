"use client"
import React from 'react'
import { AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai'
import { LuLayoutDashboard } from 'react-icons/lu'
import { MdAttachMoney } from 'react-icons/md'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'

export default function OrganizerNavigation() {
  return (
    <Sidebar className='col-span-1 min-h-[calc(100vh-292px)] h-fit-content'
        collapsed={false}
        breakPoint="md"
        backgroundColor='#248232'
        width='275px' 
    >
        <Menu
            menuItemStyles={{
                button: {
                    color: '#FCFFFC',
                    backgroundColor: '#2BA84A',
                    '&:hover': {
                        backgroundColor: '#FCFFFC',
                        color: '#248232'
                    }
                }
            }}
        >
            <MenuItem icon={<LuLayoutDashboard />} href='/organizer' >Dashboard</MenuItem>
            <MenuItem icon={<AiOutlinePlus />} href='/organizer/create' >Veranstaltung anlegen</MenuItem>
            <MenuItem icon={<MdAttachMoney />} >Auszahlungen</MenuItem>
            <MenuItem icon={<AiOutlineSetting />} href='/organizer/settings' >Einstellungen</MenuItem>
        </Menu>
    </Sidebar>
  )
}
