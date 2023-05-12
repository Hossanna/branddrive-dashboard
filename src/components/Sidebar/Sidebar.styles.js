import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    icons: {
        width: '2vw',
        height: '4vh',
        margin: '15% auto',
        borderRadius: '50%',
        border: '1px solid transparent',
        // #1565c0'
    },
    
    biggerBox: {
        position: 'fixed',
        overflow: 'hidden',
        display: 'flex',
    },

    bigBox: {
        backgroundColor: '#dcdcdc6b',
        position: 'fixed',
        overflow: 'hidden',
    },

    box: {
        height: '70vh',
        width: '4vw',
        display: 'flex',
        flexDirection: 'column',
    },
    boxx: {
        height: '30vh',
        width: '4vw',
        display: 'flex',
        flexDirection: 'column',
    },

});