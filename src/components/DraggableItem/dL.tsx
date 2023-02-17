// import { ListItem, ListItemAvatar, ListItemText, Avatar, Tooltip } from '@mui/material'
// import InboxIcon from '@mui/icons-material/Inbox'
// import React, { FC } from 'react'
// // import Draggable from 'react-draggable'
// import { Draggable } from 'react-beautiful-dnd'

// const DraggableListItem = ({ item, index }) => {
//   return (
//     <Draggable draggableId={item.id} index={index}>
//       {(provided, snapshot) => (
//         // <Tooltip title="Drag Me!">
//         <ListItem
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           sx={snapshot.isDragging ? { background: 'rgb(235,235,235)' } : ''}
//         >
//           <ListItemAvatar>
//             <Avatar>
//               <InboxIcon />
//             </Avatar>
//           </ListItemAvatar>
//           <ListItemText primary={item.primary} secondary={item.secondary} />
//         </ListItem>
//         // {/* </Tooltip> */}
//       )}
//     </Draggable>
//   )
// }

// export default DraggableListItem

// DraggableListItem.prototype = {
//   item: PropTypes.object.isRequired,
//   index: PropTypes.number.isRequired,
// }
