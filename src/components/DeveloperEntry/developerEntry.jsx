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
} from '@mui/material'
import PropTypes from 'prop-types'
// import React, { useState } from 'react'

function Item(props) {
  const { sx, ...other } = props
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        width: 200,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
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

export default function DeveloperEntry({ developerList, removeItem }) {
  return (
    <>
      {developerList.map((developerInfo, index) => {
        const { developer, sprintCapacity, capacity } = developerInfo
        return (
          <>
            <Box
              key={index}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr) 5fr',
                p: 2,
                m: 4,
                justifyContent: 'space-evenly',
                bgcolor: 'background.white',
                borderRadius: 1,
              }}
            >
              <Item width={200}>{index + 1}</Item>
              <Item width={200}>{developer.toString()}</Item>
              <Item width={200}>{sprintCapacity}</Item>
              <Item width={200}>{capacity}</Item>
              <Button onClick={() => removeItem(index)}>Remove</Button>
            </Box>
          </>
        )
      })}
    </>
  )
}

DeveloperEntry.propTypes = {
  developerList: PropTypes.array,
  removeItem: PropTypes.func,
}
