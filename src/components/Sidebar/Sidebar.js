import { upperLogo } from './constants'
import { lowerLogo } from './constants'
import { Box } from '@mui/material'
import { useStyle } from './Sidebar.styles'
import Navbar from '../Navbar/Navbar';



const Sidebar = () => {
  const classes = useStyle();

  return (
    <Box className={classes.biggerBox}>
          <Box className={classes.bigBox}>
            <Box className={classes.box}>
            {upperLogo.map(item => (
                <img className={classes.icons} src={item?.icon} alt={item?.name} />
            ))}
            </Box>
            <Box className={classes.boxx}>
            {lowerLogo.map(item => (
                <img className={classes.icons} src={item?.icon} alt={item?.name} />
            ))}
            </Box>
          </Box>
          
          <Navbar />
    </Box> 
  )
}
export default Sidebar
