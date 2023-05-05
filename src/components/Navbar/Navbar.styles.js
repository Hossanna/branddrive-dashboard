import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    icons: {
        width: '2vw',
        height: '4vh',
        // margin: '15% auto',
        // borderRadius: '50%',
        // border: '1px solid #1565c0'
    },
    
    biggerBox: {
        width: '100%', 
        maxWidth: 150, 
        bgcolor: 'background.paper', 
        color: '#1565c0',
    },
    armstrong:{
        padding: '15% 5%',
        fontSize: '.8em !important',
        fontWeight: '600',
    },
    bigBox:{
        width: '100%', 
        fontSize: '.8em !important',
        textAlign: 'left',
        marginLeft: '15%'
    },
    smallBox:{
        width: '100%', 
        fontSize: '.75em !important',
        textAlign: 'left',
        marginLeft: '15%'
    },
    flex:{
        display: 'flex',
    },

    // box: {
    //     height: '70vh',
    //     width: '4vw',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     // justifyContent: 'space-between',
    // },

});