import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import categories from '../data/category';
import { useNavigate } from "react-router-dom";



export default function SwipeableTemporaryDrawer({ setCategory }) {
  let navigate = useNavigate();

  const [state, setState] = React.useState({
    bottom: false,
   
  });

    const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '100%',  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      id="menu-box"
    >
    <List>
    
      <ListItem>
        <ListItemText primary="Body Part" />
      </ListItem>
 
      <Divider />

    </List>
      <List>
        {categories.map((text, index) => (
          <ListItem button key={text} disablePadding onClick={ async(event)=> {navigate(`/${text}`); } } >
            <ListItemButton id='category'>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key={"bottom"}>
          <Button onClick={toggleDrawer("bottom", true)} id='menu-bt'>
              <MenuIcon/>
              </Button>
          <SwipeableDrawer
            anchor={"bottom"}
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
            onOpen={toggleDrawer("bottom", true)}
          >
            {list("bottom")}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
