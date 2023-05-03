import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyle } from './RightSide.styles'


export default function RightSide() {
    const classes = useStyle();
    return (
            <Box>

                <Box className="flex-column"> 
                                <Box className={classes.pic} />

                                <Box className={classes.profit}>
                                    <Typography className={classes.profitTyp}>
                                            Profit & Loss
                                    </Typography>
                                    <Typography className={classes.netProfit}>
                                        Net Profit for <br></br> the last month
                                    </Typography>
                                    <Typography className={classes.revenueMoney}>
                                        N2,000,000.00
                                    </Typography>
                                    <Typography className={classes.viewMore}>
                                        View More
                                    </Typography>
                                </Box>

                                <Box className={classes.expense}>
                                    <Typography className={classes.expenseTyp}>
                                            Expense Breakdown
                                    </Typography>
                                    
                                    <Typography className={classes.expenseMoney}>
                                        N3,500,000.00
                                    </Typography>

                                    <Typography className={classes.viewMore}>
                                        View More
                                    </Typography>

                                    <Box className="flex-column">

                                        <Box className={classes.flex}>
                                            <Typography className={classes.money}>
                                                    N2,000,000.00
                                            <Typography className={classes.dash}>------</Typography>
                                            </Typography>
                                            <Typography className={classes.text}>
                                                    Subcontracting
                                            </Typography>
                                        </Box>
                                        <Box className={classes.flex}>
                                            <Typography className={classes.money}>
                                                    N1,000,000.00
                                            <Typography className={classes.dashh}>------</Typography>
                                            </Typography>
                                            <Typography className={classes.text}>
                                                    Payroll
                                            </Typography>
                                        </Box>
                                        <Box className={classes.flexx}>
                                            <Typography className={classes.money}>
                                                    N500,000.00
                                            <Typography className={classes.dashhh}>------</Typography>
                                            </Typography>
                                            <Typography className={classes.text}>
                                                    Travel Expenses
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                </Box>
            </Box>
        );
    }