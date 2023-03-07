import {
  //   AppBar,
  //   Toolbar,
  //   IconButton,
  //   Typography,
  Button,
  //   Stack,
  //   Menu,
  //   MenuItem,
  Box,
  //   Input,
  //   createTheme,
  //   responsiveFontSizes,
  //   Grid,
  Fab,
  Tooltip,
  IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import PropTypes from 'prop-types'
import React from 'react'
import './developerEntry.css'

function Item(props) {
  const { sx, ...other } = props
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        width: 150,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
        textAlign: 'center',
      }}
      {...other}
    />
  )
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
}

export default function DeveloperEntry({ key, developerInfo, removeItem, deleteCheck }) {
  const { id, developer, sprintCapacity, capacity } = developerInfo
  return (
    <div className='list-item' key={key}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 2fr) 1fr',
          p: 1,
          m: 2,
          justifyContent: 'space-between',
          bgcolor: 'background.white',
          borderRadius: 1,
          gap: '0 2rem',
          width: '70vw',
        }}
      >
        <Item width={200}>{id}</Item>
        <Item width={200}>{developer.toString()}</Item>
        <Item width={200}>{sprintCapacity}</Item>
        <Item width={200}>{capacity}</Item>
        {/* <Button onClick={() => removeItem(index)}>==</Button> */}
        {deleteCheck(id) ? (
          <Tooltip title='Delete'>
            <IconButton color='primary' onClick={() => removeItem(id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title='Remove or Edit Developer Id in the Stories Input form'>
            <IconButton disableTouchRipple disableFocusRipple>
              <DeleteIcon style={{ color: 'red' }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </div>
  )
}

DeveloperEntry.propTypes = {
  key: PropTypes.number,
  index: PropTypes.number,
  developerInfo: PropTypes.object,
  removeItem: PropTypes.func,
  deleteCheck: PropTypes.bool,
}
