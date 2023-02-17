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

const data = [
  { id: 0, developer: 'xyz', sprintCapacity: 8, capacity: 14 },
  { id: 1, developer: 'uvw', sprintCapacity: 8, capacity: 42 },
  { id: 2, developer: 'pqr', sprintCapacity: 8, capacity: 34 },
  { id: 3, developer: 'yut', sprintCapacity: 8, capacity: 54 },
]

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

export default function DeveloperInput() {
  const [developerList, setDeveloperList] = useState(data)
  //   const [id, setId] = useState(0)
  const [developer, setDeveloper] = useState('')
  const [sprintCapacity, setSprintCapacity] = useState(0)
  const [capacity, setCapacity] = useState(0)

  const removeItem = (id) => {
    let newDeveloperList = developerList.filter((developer) => developer.id !== id)
    setDeveloperList(newDeveloperList)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (developer && capacity && sprintCapacity) {
      //   const newId = developerList.length
      const newDeveloper = { developer, sprintCapacity, capacity }
      setDeveloperList((developerList) => {
        return [...developerList, newDeveloper]
      })
      //   setId(developerList.length)
      setDeveloper('')
      console.log(developerList)
    }
  }
  return (
    <>
      <div>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr) 5fr',
            p: 2,
            m: 4,
            justifyContent: 'space-around',
            bgcolor: 'background.white',
            borderRadius: 1,
          }}
        >
          <Item width={150}>Id</Item>
          <Item width={150}>Developers</Item>
          <Item width={150}>Sprint Capacity</Item>
          <Item width={150}>Capacity</Item>
        </Box>
        {/* {developerList.map((developerInfo) => {
                    const { id, developer, sprintCapacity, capacity } = developerInfo;
                    return (
                        <>
                        <Box key={id} sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            p: 2,
                            m: 4,
                            justifyContent: 'space-evenly',
                            bgcolor: 'background.white',
                            borderRadius: 1,
                        }} >
                            <Item width={200}>{id}</Item>
                            <Item width={200}>{developer.toString()}</Item>
                            <Item width={200}>{sprintCapacity}</Item>
                            <Item width={200}>{capacity}</Item>
                            <Button  onClick={() => removeItem(id)}>Remove</Button>
                         </Box>
                        </>
                    );
                })} */}
        <DeveloperEntry developerList={developerList} removeItem={removeItem} />
      </div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 2,
            m: 4,
            justifyContent: 'space-evenly',
            bgcolor: 'background.white',
            borderRadius: 1,
          }}
        >
          {/* <Item>
            <Input
              placeholder='id'
              type='text'
              name='id'
              value={developerList.length}
              onChange={(e) => setId(developerList.length)}
            />
          </Item> */}
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
              type='text'
              name='sprintCapacity'
              value={sprintCapacity}
              onChange={(e) => setSprintCapacity(e.target.value)}
            />
          </Item>
          <Item>
            <Input
              placeholder='capacity'
              type='text'
              name='capacity'
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Item>
        </Box>
        <Button variant='contained' style={{ margin: '0 auto', display: 'flex' }} type='submit'>
          Add Story
        </Button>
      </form>
    </>
  )
}
