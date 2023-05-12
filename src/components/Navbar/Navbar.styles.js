import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    icons: {
        width: '2vw',
        height: '2vh',
        padding: '6% 5%',

    },
    payment: {
        width: '1.4vw',
        height: '2vh',
        padding: '6% 5%',

    },
    
    biggerBox: {
        // width: '100%', 
        width: 150, 
        bgcolor: 'background.paper', 
        color: '#011B60',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        marginLeft: '4vw',
    },
    armstrong:{
        padding: '10% 2%',
        fontSize: '.8em !important',
        fontWeight: '600',
    },
    bigBox:{
        width: '100%', 
        fontSize: '.6em !important',
        textAlign: 'left',
        marginLeft: '0',
        padding: '7%',
        color: '#808080ad',
    },
    smallBox:{
        width: '100%', 
        fontSize: '.7em !important',
        textAlign: 'left',
        marginLeft: '0',
        padding: '4% 0',
    },
    dashboard:{
        width: '100%', 
        fontSize: '.7em !important',
        textAlign: 'left',
        marginLeft: '0',
        padding: '4% 0',
        fontWeight: 600,
        marginTop: '3%',
    },
    flex:{
        display: 'flex',
        '&:hover': {
            backgroundColor: '#dcdcdc6b',
            cursor: 'pointer',
            opacity: [0.9, 0.8, 0.7],
                      },
    },


});