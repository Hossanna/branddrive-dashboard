import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function BoxSx() {
  return (
    <div>
        
        <Box className="flex">
            <Box 
            sx={{
                width: 160,
                height: 25,
                margin: 1,
                backgroundColor: 'white',
                
            }}>
                <Typography
                    sx={{
                    textDecoration: 'underline',
                    color: '#1565c0',
                    fontWeight: 600,

                    }}>
                    Lagos Mainland HQ
                </Typography>
            </Box>

            <Box 
                sx={{
                    width: 25,
                    height: 20,
                    margin: 1,
                    color: '#1565c0',
                    fontWeight: 600,
                    padding: '2px 8px 3px',
                    textAlign: 'left',
                    backgroundColor: 'orange',
                    
                }}>
                <Typography>HQ</Typography>
            </Box>

            <Box 
                sx={{
                    width: 100,
                    height: 25,
                    margin: 1,
                    marginLeft: 32,
                    padding: '5px 10px 4px',
                    textAlign: 'center',
                    color: '#1565c0',
                    backgroundColor: '#dcdcdc6b',
                   
                }}>
                <Typography
                sx={{
                    fontSize: '.9em',

                }}>
                    Upgrade Plan</Typography>
            </Box>

        </Box>


        <Box className="flex"> 
                <Box
                sx={{
                    width: 150,
                    height: 50,
                    margin: 1,
                    color: '#1565c0',
                    textAlign: 'center',
                    paddingTop: 2,
                    paddingRight: 2,
                    borderRight: '3px solid #80808047',
                    backgroundColor: 'white',
                    
                }}>
                <Typography>NGN WALLET</Typography>
                </Box>
                <Box
                sx={{
                    width: 150,
                    height: 50,
                    margin: 1,
                    color: '#509bef',
                    paddingTop: 2,
                    textAlign: 'center',
                    backgroundColor: 'white',
                    
                }}>
                    <Typography>USD WALLET</Typography>
                </Box>
        </Box>


        <Box className="flex">
            <Box
                sx={{
                    width: 340,
                    height: 120,
                    margin: 1,
                    padding: '1% 2%',
                    textAlign: 'left',
                    borderTop: '3px solid #80808047',
                    backgroundColor: '#dcdcdc6b',
                    '&:hover': {
                    backgroundColor: 'aliceblue',
                    opacity: [0.9, 0.8, 0.7],
                    },
                }}>
                            <Typography
                            sx={{
                                fontSize: '2em',
                                fontWeight: 700, 
                                color: '#1565c0',
                            }}>
                                N17,325,500.00
                            </Typography>
                            <Typography
                            sx={{
                                color:'orange',
                                fontSize:'.7em',
                                textDecoration: 'underline', 
                                marginBottom: 2, 
                                fontWeight: 600,
                                
                            }}>Manage Wallet
                            </Typography>

                    <Box className="flex"> 
                        <Box
                        sx={{
                            width: 100,
                            height: 18,
                            textAlign: 'center',
                            marginRight: 1,
                            padding: '4px 8px',
                            color: 'white',
                            border: '1px solid transparent',
                            backgroundColor: '#1565c0',
                            
                        }}>
                            <Typography
                            sx={{
                                fontSize: '.7em',
                                padding: 0,
                                
                            }}>
                                Fund Account
                            </Typography>
                        </Box>
                        
                        <Box
                        sx={{
                            width: 70,
                            height: 18,
                            textAlign: 'center',
                            marginRight: 1,
                            padding: '4px 1px',
                            color: '#1565c0',
                            border: '1px dashed #80808047',
                            backgroundColor: 'white',
                            
                        }}>
                            <Typography
                            sx={{
                                fontSize: '.7em',
                                padding: 0,
                                
                            }}>
                                Transfer
                            </Typography>
                        </Box>

                        <Box
                        sx={{
                            width: 80,
                            height: 18,
                            textAlign: 'center',
                            marginRight: 1,
                            padding: '4px 2px',
                            color: '#1565c0',
                            border: '1px dashed #80808047',
                            backgroundColor: 'white',
                            
                        }}>
                            <Typography
                            sx={{
                                fontSize: '.7em',
                                padding: 0,
                                
                            }}>
                                Withdraw
                            </Typography>
                        </Box>

                        <Box
                        sx={{
                            width: 100,
                            height: 18,
                            textAlign: 'center',
                            marginRight: 1,
                            padding: '4px 2px',
                            color: '#1565c0',
                            border: '1px dashed #80808047',
                            backgroundColor: 'white',
                            
                        }}>
                            <Typography
                            sx={{
                                fontSize: '.7em',
                                padding: 0,
                                
                            }}>
                                Airtime & Data
                            </Typography>
                        </Box>
                        
                    </Box>
            </Box>

            <Box className="flex-column"
                sx={{
                    width: 200,
                    height: 100,
                    margin: 4,
                    textAlign: 'left',
                    backgroundColor: 'white',
                    color: '#1565c0',
                }}>
                    <Typography
                        sx={{
                             fontSize: '0.9em'

                        }}>
                        Your Wallet & Bank Account
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: '1.4em',
                        fontWeight: 600, 
                    }}>
                        0123456789
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.9em'

                        }}>
                        Sterling Bank Plc
                    </Typography>

            </Box>

        </Box>

        <Box className="flex">
            <Box 
            sx={{
                width: 160,
                height: 25,
                margin: 1,
                backgroundColor: 'white',
                
            }}>
                <Typography
                    sx={{
                    textDecoration: 'underline',
                    color: '#1565c0',
                    fontWeight: 600,

                    }}>
                    Lagos Mainland HQ
                </Typography>
            </Box>

            <Box 
                sx={{
                    width: 25,
                    height: 20,
                    margin: 1,
                    color: '#1565c0',
                    fontWeight: 600,
                    padding: '2px 8px 3px',
                    textAlign: 'left',
                    backgroundColor: 'orange',
                    
                }}>
                <Typography>HQ</Typography>
            </Box>

            <Box 
                sx={{
                    width: 100,
                    height: 25,
                    margin: 1,
                    marginLeft: 32,
                    padding: '5px 10px 4px',
                    textAlign: 'center',
                    color: '#1565c0',
                    backgroundColor: '#dcdcdc6b',
                   
                }}>
                <Typography
                sx={{
                    fontSize: '.9em',

                }}>
                    Last 30 days</Typography>
            </Box>

        </Box>

        

        <Box className="flex"> 
                <Box
                sx={{
                    width: 220,
                    height: 50,
                    margin: 1,
                    padding: 2,
                    textAlign: 'left',
                    color: '#1565c0',
                    borderRadius: 'px',
                    border: '1px dashed #80808047',
                    backgroundColor: 'transparent',
                    
                }}>
                    <Typography
                    sx={{
                        fontSize: '.85em',}}>
                            Revenue Goal
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: '1.3em',
                        fontWeight: 600, 
                    }}>
                        N20,000,000.00
                    </Typography>
                </Box>
                
                <Box className="flex"
                sx={{
                    width: 320,
                    height: 50,
                    margin: 1,
                    padding: '28px 5px 4px 15px ',
                    borderRadius: '2px',
                    textAlign: 'left',
                    color: '#1565c0',
                    border: '1px dashed #80808047',
                    backgroundColor: 'transparent',
                    
                }}>
                    <Typography
                    sx={{
                        fontSize: '.9em',}}>
                            branddrive.co/shop/mybusiness
                    </Typography> 

                    <Box
                        sx={{
                            width: 75,
                            height: 20,
                            margin: '-5px 7px 10px',
                            fontSize: '.8em',
                            color: 'white',  
                            padding: '5px 10px',
                            textAlign: 'left',
                            backgroundColor: 'orange',
                            }}>
                                Copy link
                    </Box>
                </Box>
        </Box>


        <Box
        sx={{
            width: 610,
            height: 350,
            margin: 1,
            borderRadius: '2px',
            border: '1px dashed #80808047',
            backgroundImage: "url(/Screenshot.png)",
            backgroundSize: 'contain'
        }}>
        </Box>
        
    </div>
  );
}