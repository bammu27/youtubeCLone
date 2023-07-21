import {Link} from 'react-router-dom'
import { Stack } from '@mui/material'
import { logo} from '../utils/constants';
import { SearchBar } from './SearchBar'

export const Navbar = () => 
 (
    <Stack 
    direction='row' 
    alignItems='center'
    sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}} 
    p={2}>

  <Link to='/'style={{display:"flex",alignItems:'center'}} >
    <img src= {logo} alt='logo' height={45} />

  </Link>
  <SearchBar/>
  </Stack>
  )

