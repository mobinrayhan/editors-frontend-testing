// import node module libraries
import { createSlice } from '@reduxjs/toolkit'

// import data files
import {
	TeamMembers,
	TaskKanbanItems
} from 'data/dashboard/task-kanban/TaskKanbanData';

const initialState = {
  teamMembers: TeamMembers,
  taskList: TaskKanbanItems   
};

export const taskKanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {   
    addNewTask: (state, action) => {
      state.taskList = state.taskList.map((column) =>
					column.id === action.payload.columnno
						? { ...column, taskIds: [...column.taskIds, action.payload.taskIds] }
						: column
				)    
    },
    deleteTask: (state, action) => {
      state.taskList =  state.taskList.map((taskItem) => {
					return {
						...taskItem,
						taskIds: taskItem.taskIds.filter((item) => item.id !== action.payload)
					};
				})      
    },
    rearrangeTaskList: (state, action) => {
      state.taskList = action.payload      
    }
  },
})

export const { addNewTask, deleteTask, rearrangeTaskList } = taskKanbanSlice.actions

export default taskKanbanSlice.reducer