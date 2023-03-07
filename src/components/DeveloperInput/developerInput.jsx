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
  Input,
  //   createTheme,
  //   responsiveFontSizes,
  //   Grid,
} from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import DeveloperEntry from '../DeveloperEntry/developerEntry'
import './developerInput.css'

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

export default function DeveloperInput({ developerList, setDeveloperList, deleteCheck }) {
  // const [developerList, setDeveloperList] = useState(data)
  const [id, setId] = useState(developerList[developerList.length - 1].id + 1)
  const [developer, setDeveloper] = useState('')
  const [sprintCapacity, setSprintCapacity] = useState(null)
  const [capacity, setCapacity] = useState(null)

  const removeItem = (id) => {
    let newDeveloperList = developerList.filter((developer) => developer.id !== id)
    setDeveloperList(newDeveloperList)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id && developer && capacity && sprintCapacity) {
      // const newId = { id }
      // console.log(id, developer, sprintCapacity, capacity)
      const newDeveloper = { id, developer, sprintCapacity, capacity }
      setDeveloperList((developerList) => {
        return [...developerList, newDeveloper]
      })
      //   setId(developerList.length)
      setId(id + 1)
      setDeveloper('')
      //   console.log(developerList)
    }
  }
  // on drag change the position of the developer

  return (
    <div className='dev-container'>
      <div>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 2fr) 1fr',
            p: '0 1',
            m: '0 3',
            justifyContent: 'space-around',
            textAlign: 'center',
            bgcolor: 'background.white',
            borderRadius: 1,
          }}
        >
          <Item width={150}>Id</Item>
          <Item width={150}>Developers</Item>
          <Item width={150}>Sprint Capacity</Item>
          <Item width={150}>Capacity</Item>
        </Box>
        <div className='dev-list'>
          {developerList.length === 0 ? (
            <h1>No Developers</h1>
          ) : (
            developerList.map((developerInfo) => {
              //   console.log(index)
              return (
                <DeveloperEntry
                  key={developerInfo.id}
                  developerInfo={developerInfo}
                  removeItem={removeItem}
                  deleteCheck={deleteCheck}
                />
              )
            })
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: '0 2',
            m: '0 4',
            justifyContent: 'space-between',
            bgcolor: 'background.white',
            borderRadius: 1,
          }}
        >
          <Item>
            <Input
              placeholder='Id'
              type='number'
              name='id'
              // defaultValue={id}
              value={id}
              // onChange={(e) => setDeveloper(e.target.value)}
            />
          </Item>
          <Item>
            <Input
              placeholder='Developer Name'
              type='text'
              name='developer'
              defaultValue='Disabled'
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
          </Item>
          <Item>
            <Input
              placeholder='Sprint Capacity'
              type='number'
              name='sprintCapacity'
              value={sprintCapacity}
              onChange={(e) => setSprintCapacity(e.target.value)}
            />
          </Item>
          <Item>
            <Input
              placeholder='capacity'
              type='number'
              name='capacity'
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Item>
        </Box>

        <Button variant='contained' style={{ margin: '0 auto', display: 'flex' }} type='submit'>
          Add Developer
        </Button>
      </form>
    </div>
  )
}

DeveloperInput.propTypes = {
  developerList: PropTypes.array,
  setDeveloperList: PropTypes.func,
  deleteCheck: PropTypes.func,
}
