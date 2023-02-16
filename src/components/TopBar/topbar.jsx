import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Stack,
    Menu,
    MenuItem
  } from '@mui/material'
  import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
  import { useState } from 'react'
  
  export default function MuiNavbar() {

    return (
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            SPRINT PLANNER
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }