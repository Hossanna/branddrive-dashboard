import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BoxSx() {
    return (
            <div>

                <Box className="flex-column"> 
                                <Box
                                sx={{
                                    width: 280,
                                    height: 300,
                                    margin: 2,
                                    borderRadius: 5,
                                    border: '1px dashed #80808047',
                                    backgroundImage: "url(/pic.png)",
                                    backgroundSize: 'cover'
                                }}
                                />

                                <Box
                                sx={{
                                    width: 250,
                                    height: 140,
                                    margin: 2,
                                    padding: 2,
                                    textAlign: 'left',
                                    color: '#1565c0',
                                    borderRadius: '2px',
                                    border: '1px dashed #80808047',
                                    backgroundColor: 'transparent',
                                    
                                }}>
                                    <Typography
                                    sx={{
                                        fontSize: '.85em',
                                        fontWeight: 600,
                                        marginBottom: 1, 
                                        }}>
                                            Profit & Loss
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '.85em',
                                            marginBottom: 1, 
                                            }}>
                                        Net Profit for <br></br> the last month
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '1.3em',
                                            fontWeight: 600, 
                                            marginBottom: 1, 
                                            }}>
                                        N2,000,000.00
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color:'orange',
                                            fontSize:'.7em',
                                            textDecoration: 'underline', 
                                            marginBottom: 2, 
                                            fontWeight: 600,
                                                
                                            }}>
                                        View More
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: 250,
                                        height: 205,
                                        margin: 2,
                                        padding: 2,
                                        textAlign: 'left',
                                        color: '#1565c0',
                                        borderRadius: '2px',
                                        border: '1px dashed #80808047',
                                        backgroundColor: 'transparent',
                                        
                                    }}>
                                    <Typography
                                    sx={{
                                        fontSize: '.85em',
                                        fontWeight: 600,
                                        marginBottom: 3, 
                                        }}>
                                            Expense Breakdown
                                    </Typography>
                                    
                                    <Typography
                                        sx={{
                                            fontSize: '1.3em',
                                            fontWeight: 600, 
                                            marginBottom: 1, 
                                            }}>
                                        N3,500,000.00
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color:'orange',
                                            fontSize:'.7em',
                                            textDecoration: 'underline', 
                                            fontWeight: 600,
                                            marginBottom: 3, 
                                                
                                            }}>
                                        View More
                                    </Typography>

                                    <Box className="flex-column">

                                        <Box className="flex"
                                        sx={{
                                            justifyContent: 'space-between',
                                            marginBottom: 1, 
                                        }}>
                                            <Typography
                                                sx={{
                                                    fontSize: '.85em',
                                                    fontWeight: 600,
                                                }}>
                                                    N2,000,000.00
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '.85em',
                                                }}>
                                                    Subcontracting
                                            </Typography>
                                        </Box>
                                        <Box className="flex"
                                        sx={{
                                            justifyContent: 'space-between',
                                            marginBottom: 1, 
                                        }}>
                                            <Typography
                                                sx={{
                                                    fontSize: '.85em',
                                                    fontWeight: 600,
                                                }}>
                                                    N1,000,000.00
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '.85em',
                                                }}>
                                                    Payroll
                                            </Typography>
                                        </Box>
                                        <Box className="flex"
                                        sx={{
                                            justifyContent: 'space-between',
                                            marginBottom: 1, 
                                        }}>
                                            <Typography
                                                sx={{
                                                    fontSize: '.85em',
                                                    fontWeight: 600,
                                                }}>
                                                    N500,000.00
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '.85em',
                                                }}>
                                                    Travel Expenses
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                </Box>
            </div>
        );
    }