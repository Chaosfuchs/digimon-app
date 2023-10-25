import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import {Divider, Toolbar, IconButton, Typography, InputBase, Drawer, List, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

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

function SearchAppBar(props) {

  const {search, setSearch} = props;
  const [state, setState] = React.useState(false);

  /**
     * Updates the value of the search field.
     */
  function updateSearchField(value) {
    setSearch(value);
}

function toggleDrawer(){
  setState(!state);
};

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
            Digimon API
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={(event) => { updateSearchField(event.target.value)}}
            />
          </Search>
        </Toolbar>
      </AppBar>
  );
}
export default SearchAppBar;