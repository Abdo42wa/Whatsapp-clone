import React from 'react'
import {Avatar,IconButton} from '@material-ui/core'
import { MoreVert, Chat, DonutLarge, SearchOutlined } from '@material-ui/icons';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar />
                <div className='sidebar-headerRight'>
                <IconButton >
                <DonutLarge />
                </IconButton>
                   <IconButton><Chat /></IconButton>
                   <IconButton><MoreVert /></IconButton>
                   
                   
                </div>
            </div>
            <div className='sidebar-search'>
            <div className='sidebar-searchContainer'>
                <SearchOutlined />
                <input placeholder="search or start new chat " type='text' />
            </div>
               
            </div>

            <div className='sidebar-chats'>
                
            </div>
        </div>
    )
}

export default Sidebar
