import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useStyle } from './Navbar.styles'
import { Typography } from '@material-ui/core';



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
              <img className={classes.icons} src="/icons/DashboardIcon.svg" alt="Dashboard" />
              <Typography className={classes.dashboard}>Dashboard</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Customers Icon.svg" alt="Customers" />
              <Typography className={classes.smallBox}>Customers</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/DashboardIcon.svg" alt="Dashboard" />
              <Typography className={classes.smallBox}>Wallet & Card</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Online Shop Icon.svg" alt="Online Shop" />
              <Typography className={classes.smallBox}>Online Shop</Typography>
            </Box>
        </Box>

        <Box>
            <Box>
              <Typography className={classes.bigBox}>BUSINESS & SALES</Typography>
            </Box>
            <Box className={classes.flex}>
            <img className={classes.icons} src="/icons/View orders Icon.svg" alt="Orders" />
              <Typography className={classes.smallBox}>Orders</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Invoicing  Icon.svg" alt="Invoicing" />
              <Typography className={classes.smallBox}>Invoicing</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Point of Sale Icon.svg" alt="POS" />
              <Typography className={classes.smallBox}>Point of Sale</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Products _ Services Icon.svg" alt="ProductsServices" />
              <Typography className={classes.smallBox}>Products and Services</Typography>
            </Box>
        </Box>

        <Box>
            <Box>
              <Typography className={classes.bigBox}>INSIGHT & GROWTH</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Analytics Icon.svg" alt="Analytics" />
              <Typography className={classes.smallBox}>Analysis</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Accocunting Icon.svg" alt="Accocunting" />
              <Typography className={classes.smallBox}>Accounting</Typography>
            </Box>
            
        </Box>
          
          
        <Box>
            <Box>
              <Typography className={classes.bigBox}>MORE</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Payment Pages Icon.svg" alt="Payment" />
              <Typography className={classes.smallBox}>Payment Pages</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/DashboardIcon.svg" alt="Dashboard" />
              <Typography className={classes.smallBox}>Bills & Utilities</Typography>
            </Box>
            <Box className={classes.flex}>
              <img className={classes.icons} src="/icons/Expenses Icon.svg" alt="Expenses" />
              <Typography className={classes.smallBox}>Expenses</Typography>
            </Box>
            
        </Box>
    </Box>
          
  );
}