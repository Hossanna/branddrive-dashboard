import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyle } from './Middle.styles'
import Chart from '../Chart/Chart'


export default function Middle() {
  const classes = useStyle();
  return (
    <Box className={classes.middle}>
        
        <Box className="flex">
            <Box className={classes.lagos}>
                <Typography className={classes.lagosTyp}>
                    Lagos Mainland HQ
                </Typography>
            </Box>

            <Box className={classes.hq}>
                <Typography className={classes.upgradeTyp}>HQ</Typography>
            </Box>

            <Box className={classes.upgrade}>
                <Typography className={classes.upgradeTyp}>
                    Upgrade Plan
                </Typography>
            </Box>

        </Box>


        <Box className="flex"> 
                <Box className={classes.ngn}>
                    <Typography className={classes.upgradeTyp}>NGN WALLET</Typography>
                </Box>
                <Box className={classes.usd}>
                    <Typography className={classes.upgradeTyp}>USD WALLET</Typography>
                </Box>
        </Box>


        <Box className="flex">
            <Box className={classes.moneyBox}>
                <Typography className={classes.money}>
                    N17,325,500.00
                </Typography>
                <Typography className={classes.wallet}>
                    Manage Wallet
                </Typography>

                    <Box className={classes.fundFlex}> 
                        <Box className={classes.fund}>
                            <Typography className={classes.typ}>
                                Fund Account
                            </Typography>
                        </Box>
                        
                        <Box className={classes.transfer}>
                            <Typography className={classes.typ}>
                                Transfer
                            </Typography>
                        </Box>

                        <Box className={classes.transfer}>
                            <Typography className={classes.typ}>
                                Withdraw
                            </Typography>
                        </Box>

                        <Box className={classes.airtime}>
                            <Typography className={classes.typ}>
                                Airtime & Data
                            </Typography>
                        </Box>
                        
                    </Box>
            </Box>



            <Box className={classes.flexColumn}>
                    <Typography className={classes.upgradeTyp}>
                        Your Wallet & Bank Account
                    </Typography>
                    <Typography className={classes.bankNo}>
                        0123456789
                    </Typography>
                    <Typography className={classes.upgradeTyp}>
                        Sterling Bank Plc
                    </Typography>
            </Box>

        </Box>

        <Box className="flex">
        <Box className={classes.lagos}>
            <Typography className={classes.lagosTyp}>
                Lagos Mainland HQ
            </Typography>
        </Box>

            <Box className={classes.hq}>
                <Typography className={classes.upgradeTyp}>HQ</Typography>
            </Box>

            <Box className={classes.upgrade}>
                <Typography className={classes.upgradeTyp}>
                    Last 30 days
                </Typography>
            </Box>

        </Box>

        

        <Box className={classes.flex}> 
                <Box className={classes.revenue}>
                    <Typography className={classes.revenueTyp}>
                            Revenue Goal
                    </Typography>
                    <Typography className={classes.revenueMoney}>
                        N20,000,000.00
                    </Typography>
                </Box>
                
                <Box className={classes.branddrive}>
                    <Typography className={classes.upgradeTyp}>
                        branddrive.co/shop/mybusiness
                    </Typography> 

                    <Typography className={classes.copyLink}>
                        Copy link
                    </Typography>
                </Box>
        </Box>


        <Box className={classes.chart}>
            <Chart />
        </Box>
        
    </Box>
  );
}