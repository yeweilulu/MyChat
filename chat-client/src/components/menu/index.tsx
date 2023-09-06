import React from 'react'
import './index.scss'

import {
    UpCircleOutlined
} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';


const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4234464_w8p5vsga7t.js',
});
type Props = {}

const MyMenu = (props: Props) => {
    const click = () => {
        console.log(123)
    }//at.alicdn.com/t/c/font_4234464_wh81oj907rh.css
    return (
        <div className='menu'>
            <header>
                <img src="https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/67593/38/26851/252494/6458b014F6953f47f/fa0882b21ba95e73.jpg.avif" alt="" />
            </header>
            <main>
                <div onClick={click} className='box'>
                    <IconFont type="icon-yonghu" className='icon' />
                </div>

                <div onClick={click}>
                    <IconFont type="icon-xiaoxi" className='icon' />
                </div>
                <div onClick={click}>
                    <IconFont type="icon-shoucang" className='icon' />
                </div>


            </main>
            <footer></footer>


        </div>
    )
}

export default MyMenu