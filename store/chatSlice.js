// import node module libraries
import { createSlice } from '@reduxjs/toolkit'

// import data files
import { UsersList } from 'data/dashboard/chat/UsersData';
import MessagesData from 'data/dashboard/chat/MessagesData';
import ChatThreadsData from 'data/dashboard/chat/ChatThreadsData';
import ChatGroupsData from 'data/dashboard/chat/ChatGroupsData';

const initialState = {
    messages: MessagesData,
    threads: ChatThreadsData,
    users: UsersList,
    groups: ChatGroupsData,
    loggedInUserId: 21,
    activeThread:ChatThreadsData[0],    
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {    
    changeThread: (state, action) => {
      state.activeThread = action.payload
      state.threads = state.threads.map((thread) =>
					thread.id === action.payload.id ? { ...thread, read: true } : thread
			)
    }, 
    sendMessage: (state, action) => {
      state.messages = state.messages.map((message) =>
					message.id === action.payload.id
						? {
								...message,
								chatMessages: [...message.chatMessages, action.payload.newMessage]
						  }
						: message
				)
    }, 

  },
})

export const { changeThread, sendMessage} = chatSlice.actions

export default chatSlice.reducer