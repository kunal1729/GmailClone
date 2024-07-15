"use client"
import React, { useEffect } from 'react'
import MailList from '../MailList'
import Pagination from './Pagination'
import { Tooltip } from '@mui/material'
import { useState } from 'react'
import MailByCategory from './MailByCategory'
import Footer from './Footer'

const Mails = ({type}) => {

  const [selectAll, setSelectAll] = useState(false) 
  const [isSelected, setIsSelected] = useState(false)
  const [selectedIds, setSelectedIds] = useState([]);
  const [inbox, setInbox] = useState(MailList.Inbox);
  const [starred, setStarred] = useState(MailList.Starred);
  const [snoozed, setSnoozed] = useState(MailList.Snoozed);
  const [sent, setSent] = useState(MailList.Sent);
  const [drafts, setDrafts] = useState(MailList.Drafts);
  const [spam, setSpam] = useState(MailList.Spam);
  const [archived, setArchived] = useState(MailList.Archived);
//   const [isStarred, setisStarred] = useState(second)
  
  const [trash, setTrash] = useState(MailList.Trash)
  const [refresh, setRefresh] = useState(false)
  const handleRefresh = () =>
  {
    setRefresh((prev) => !prev);
  }
  
  const emailCategories = [
    { category : 'Inbox' },
    { category : 'Starred' },
    { category : 'Snoozed' },
    { category : 'Sent' },
    { category: 'Drafts' },
    { category: 'Spam' },
    { category: 'Archived' },
    { category: 'Trash' }
  ];

  const categoryMap = {
    Inbox: setInbox,
    Starred: setStarred,
    Snoozed: setSnoozed,
    Sent: setSnoozed,
    Drafts: setDrafts,
    Spam: setSpam,
    Archived: setArchived,
    Trash: setTrash
  };
  const categoryMap2 = {
    Inbox: inbox,
    Starred: starred,
    Snoozed: snoozed,
    Sent: sent,
    Drafts: drafts,
    Spam: spam,
    Archived: archived,
    Trash: trash
  };

  const moveToTrash = () => {

    
    if(selectedIds === null)
    {
        return;
    }
    setTrash((prev) => {
        return(
        [...prev, ...selectedIds])
    })
    const newFilteredArray = (categoryMap2[type]).filter(item1 => 
        !selectedIds.some(item2 => item1.id === item2.id)
    );

    setInbox(newFilteredArray)
  };


  const moveToSpam = (filteredArray) => {

    if(selectedIds === null)
    {
        return;
    }
    setSpam((prev) => {
        return(
        [...prev, ...selectedIds])
    })
    const newFilteredArray = (categoryMap2[type]).filter(item1 => 
        !selectedIds.some(item2 => item1.id === item2.id)
    );
    setInbox(newFilteredArray)
  };


  const moveToSnooze = () => {

    if(selectedIds === null)
    {
        return;
    }
    setSnoozed((prev) => {
        if(!prev)
        {
            return;
        }
        return(
        [...prev, ...selectedIds])
    })
    const newFilteredArray = (categoryMap2[type]).filter(item1 => 
        !selectedIds.some(item2 => item1.id === item2.id)
    );
    setInbox(newFilteredArray)

  };

  const moveToArchive = () => {

    if(selectedIds === null)
    {
        return;
    }
    setArchived((prev) => {
        return(
        [...prev, ...selectedIds])
    })
    const newFilteredArray = (categoryMap2[type]).filter(item1 => 
        !selectedIds.some(item2 => item1.id === item2.id)
    )
    setInbox(newFilteredArray)
  };


  const handleSelectAll = (e) =>
  {
    setSelectAll(e.target.checked)
    setIsSelected(e.target.checked)
  }

  return (
    <div className='w-full ml-2 mb-2 border-2 shadow-lg rounded-xl bg-white  mr-4'>
        <div className='flex p-4 justify-between items-center rounded-t-xl '>
            <div className='font-bold hidden space-x-4 pl-2 flex items-center'>
                <Tooltip title = 'Select All'>
                    <input onChange={handleSelectAll} type='checkbox'/>
                </Tooltip>
                <button onClick={handleRefresh} className={`"hidden" ${refresh ? "p-2 bg-slate-300 rounded-full" : ""}`}>
                    <Tooltip title = 'Refresh'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                    </Tooltip>
                </button>
            </div>
            {selectedIds.length  ? (
            <div className='flex items-center space-x-3'>
                <button onClick={moveToSpam}>
                    <Tooltip title = 'Report Spam'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-octagon-alert"><path d="M12 16h.01"/><path d="M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/></svg>
                    </Tooltip>
                </button>
                <button onClick={moveToArchive}>
                    <Tooltip title = 'Archive'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-archive"><circle cx="15" cy="19" r="2"/><path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"/><path d="M15 11v-1"/><path d="M15 17v-2"/></svg>
                    </Tooltip>
                </button>
                <button onClick={moveToTrash}>
                    <Tooltip title = 'Delete'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>  
                    </Tooltip>
                </button>
                <button onClick={moveToSnooze}>
                    <Tooltip title = 'Snooze'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-4 "><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </Tooltip>
                </button>
            </div>) 
            : null}
            <Pagination/>
        </div>
        <div className=' border-2 p-2 h-[80%] justify-between items-center '>
            {emailCategories.map((categoryData, index) => {
                return(
                <MailByCategory
                    type = {type}
                    key={index}
                    category={categoryData.category}
                    emails={
                        categoryData.category === 'Inbox' ? inbox :
                        categoryData.category === 'Starred' ? starred :
                        categoryData.category === 'Snoozed' ? snoozed :
                        categoryData.category === 'Sent' ? sent :
                        categoryData.category === 'Drafts' ? drafts :
                        categoryData.category === 'Spam' ? spam :
                        categoryData.category === 'Archived' ? archived :
                        trash
                    }
                    selectAll = {selectAll}
                    setIsSelected={setIsSelected}
                    setSelectedIds = {setSelectedIds}
                    selectedIds = {selectedIds}
                    setStarred={setStarred}
                    inbox={inbox}
                    starred={starred}
            />)})}
        </div>
        <Footer/>
    </div>
  )
}

export default Mails
