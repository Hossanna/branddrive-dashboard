import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useStyle } from './Navbar.styles'
import { Typography } from '@material-ui/core';
import { firstLogo } from './constants'
import { secondLogo } from './constants'
import { thirdLogo } from './constants'
import { fourthLogo } from './constants'


export default function BasicList() {
  const classes = useStyle();

  return (
    <Box className={classes.biggerBox}>
        <Box>
            <Box>
              <Typography className={classes.armstrong}>Armstrong Enterprise</Typography>
            </Box>
            <Divider />
            <Box className={classes.flex}>
              {firstLogo.map(item => (
                <img className={classes.icons} src={item?.one} alt={item?.one} />
              ))}
              <Typography className={classes.smallBox}>Dashboard</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Customers</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Wallet & Card</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Online Shop</Typography>
            </Box>
        </Box>

        <Box>
            <Box>
              <Typography className={classes.bigBox}>BUSINESS & SALES</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Orders</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Invoicing</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Point of Sale</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Products and Services</Typography>
            </Box>
        </Box>

        <Box>
            <Box>
              <Typography className={classes.bigBox}>INSIGHT & GROWTH</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Analysis</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Accounting</Typography>
            </Box>
            
        </Box>
          
          
        <Box>
            <Box>
              <Typography className={classes.bigBox}>MORE</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Payment Pages</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Bills & Utilities</Typography>
            </Box>
            <Box className={classes.flex}>
              <Typography className={classes.smallBox}>Inbox</Typography>
            </Box>
            
        </Box>
    </Box>
          
  );
}