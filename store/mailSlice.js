// import node module libraries
import { createSlice } from '@reduxjs/toolkit'

// import data files
import MailsData from 'data/dashboard/mail/MailsData';

const initialState = {
  mails: MailsData,
  search : "",
  filters: ['None', 'All', 'Read', 'Unread', 'Starred', 'Unstarred'],
  activeFilter: 'None',
  checked:0    
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {    
    setStarred: (state, action) => {
      const mailIndex = state.mails.findIndex(
        (email) => email.id === action.payload && email
      );
      state.mails[mailIndex].star = !state.mails[mailIndex].star;
    },
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }, 
    setCheck: (state, action) => {
      const mailIndex = state.mails.findIndex(
        (email) => email.id === action.payload && email
      );
      state.mails[mailIndex].is_checked =
        !state.mails[mailIndex].is_checked;
    },
    
    setAllCheck: (state, action) => {
      const allCompleted = state.mails.every((email) => email.is_checked);
      state.mails = state.mails.map((email) => ({
        ...email,
        is_checked: !allCompleted,
      }));
    },  
    setAllUncheck: (state, action) => {
      const allCompleted = state.mails.every((email) => email.is_checked);
      state.mails = state.mails.map((email) => ({
        ...email,
        is_checked: false,
      }));
    }, 
  },
})

export const { setStarred, setFilter, setSearch, setCheck, setAllCheck, setAllUncheck } = mailSlice.actions

export default mailSlice.reducer