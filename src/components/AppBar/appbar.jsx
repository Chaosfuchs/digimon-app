import React, { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import {Divider, Toolbar, IconButton, Typography, InputBase, Drawer, List, Box, ListItemButton, ListItemIcon, ListItemText, ListItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import { Home, Loyalty } from '@mui/icons-material';
import { AccountBox } from '@mui/icons-material';
import { SearchContext } from '../../context/searchContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

const StyledListItemText = styled(ListItemText)(({theme}) => ({
  color: alpha(theme.palette.common.white, 1.0)
}))

function SearchAppBar() {

  // eslint-disable-next-line react/prop-types
  //const {search, setSearch} = props;
  const [state, setState] = React.useState(false);

  const {search, updateSearch} = useContext(SearchContext);

  // Array of Pages
  const pages = [
    {
      name: "Home",
      linkTo: "/",
      icon: <Home/>
    },
    {
      name: "Profile",
      linkTo: "profile",
      icon: <AccountBox/>
    },
    {
      name: "Favorites",
      linkTo: "favorites",
      icon: <Loyalty/>
    },
  ]

  /**
     * Updates the value of the search field.
     */
  function updateSearchField(event) {
    updateSearch(event.target.value)
}

function toggleDrawer(){
  setState(!state);
}

const list = (
  <Box sx={{width: '300px', backgroundColor: '#343aeb', height: '100%'}}>
    <List>
      <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant='body1' color={'white'}>
          Welcome to this little Application
        </Typography>
      </div>
    </List>
    <Divider style={{backgroundColor: 'white'}}/>
    <List>
      {pages.map((page, index) => {
        return (
          <>
            <Link to={page.linkTo} key={index} style={{display: "flex", flexDirection: "row", alignItems: "center", textDecoration: "none"}}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <div style={{color: "white", paddingTop: "0.4rem"}}>{page.icon}</div>
                  </ListItemIcon>
                  <StyledListItemText primary={page.name} primaryTypographyProps={{fontSize: "1.2rem"}}/>
                </ListItemButton>
              </ListItem>
            </Link>
          </>
        )
      })}
    </List>
  </Box>
)

  return (
      <AppBar position="static" style={{backgroundColor: '#343aeb', position: 'fixed', top: 0}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer}
            style={{width: '300px'}}
          >
            {list}
          </Drawer>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            <Link to="/" style={{textDecoration: "none", color: "white"}}> Digimon API</Link>
            </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={(event) => updateSearchField(event)}
            />
          </Search>
        </Toolbar>
      </AppBar>
  );
}

export default SearchAppBar;

