import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    icons: {
        width: '2vw',
        height: '4vh',
        margin: '15% auto',
        // marginBottom: '50% !important',
        borderRadius: '50%',
        border: '1px solid #1565c0'
    },
    
    bigBox: {
        backgroundColor: '#dcdcdc6b'
    },

    box: {
        height: '70vh',
        width: '4vw',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
    },

});