'use client'

// import node module libraries
import { useSelector, useDispatch } from 'react-redux'

// import task actions from Redux chatSlice
import { rearrangeTaskList } from 'store/taskKanbanSlice';

const useTaskKanban = () => {

	const taskList = useSelector((state) => state.kanban.taskList)
	const dispatch = useDispatch()  
   
	const handleDragEnd = (result) => {
	
		const { destination, source } = result;

		// If user is trying to drop element outside availalble columns areas
		if (!destination) {
			console.log(
				'You can drop item in one of available destinations or columns'
			);
			return;
		}

		// If user is trying to drop element in the same column area with the same current location or position
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			console.log('Source and destination column and index(location) are same');
			return;
		}

		const start = taskList[source.droppableId];
		const finish = taskList[destination.droppableId];

		if (start === finish) {
			// If user is dropping in the same column
			const newTaskIds = Array.from(start.taskIds);
			const swapTask = newTaskIds[source.index];
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, swapTask);
			
			let newColumnsState = taskList.map((item) => {
				let newData = {...item};
				if (item.id === start.id) {
				  newData.taskIds = newTaskIds;
				}
				return newData;
			});
			dispatch(rearrangeTaskList(newColumnsState))			
		} else {
			// If user is dropping in another column
			const startTaskIds = Array.from(start.taskIds);
			const [item] = startTaskIds.splice(source.index, 1);
			const finishTaskIds = Array.from(finish.taskIds);
			finishTaskIds.splice(destination.index, 0, item);
			let newColumnsState = taskList.map((item) => {
				let newData = {...item};
				if (item.id === start.id) {
				  newData.taskIds = startTaskIds;
				}else if (item.id === finish.id) {
					newData.taskIds = finishTaskIds;
				} 
				return newData;
			});
			dispatch(rearrangeTaskList(newColumnsState))			
		}
	};

	return {
		handleDragEnd
	};
};

export default useTaskKanban;
