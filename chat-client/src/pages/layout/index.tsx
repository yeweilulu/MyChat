import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.scss'
import MyMenu from '@/components/menu'
type Props = {}

const Layout = (props: Props) => {
    return (
        <div className='wrap'>
            <div className="layout">
                <MyMenu />
                <div><Outlet /></div>
            </div>
        </div>
    )
}

export default Layout