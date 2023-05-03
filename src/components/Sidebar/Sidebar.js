import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', color: '#1565c0', }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Armstrong Enterprise" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img alt="" src="./images/DashboardIcon.svg"/>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <DraftsIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Wallets & Cards" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Online Shop" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="BUSINESS & SALES" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <DraftsIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Invoicing" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Point of Sale" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Products & Services" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="INSIGHT & GROWTH" />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Analysis" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Accounting" />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="MORE" />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Payment Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Bills & Utilities" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      
      <nav aria-label="secondary mailbox folders">
        
      </nav>
    </Box>
  );
}