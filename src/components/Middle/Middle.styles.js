import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    middle: {
        maxWidth: '50vw',
        width: '100%',
        padding: '2%',
        paddingRight: 0,
        marginLeft: '18vw',
    },
    lagos: {
        width: 160,
        height: 25,
        margin: '2% 0% !important',
        backgroundColor: 'white',

    },
    lagosTyp:{
        textDecoration: 'underline',
        color: '#011B60',
        fontWeight: 600,
        fontSize: '.8em !important',
        '&:hover': {
            cursor: 'pointer',
            },
    },
    hq:{
        width: 15,
        height: 15,
        margin: '2%',
        color: '#011B60',
        fontWeight: 600,
        padding: '2px 8px',
        textAlign: 'left',
        backgroundColor: 'orange',
        fontSize: '.8em !important',

                    
    },
    upgrade:{
        width: 100,
        height: 20,
        margin: '2%',
        marginLeft: '35%',
        marginRight: '0',
        padding: '5px 10px 4px',
        textAlign: 'left',
        color: '#011B60',
        backgroundColor: '#dcdcdc6b',
    },
    upgradeTyp:{
        fontSize: '.8em !important',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    ngn:{
        width: 150,
        height: 45,
        margin: '1%',
        color: '#011B60',
        textAlign: 'center',
        paddingTop: '3%',
        paddingRight: '2%',
        borderRight: '3px solid #80808047',
        backgroundColor: 'white',
                    
    },
    usd:{
        width: 150,
        height: 45,
        margin: '1%',
        color: '#0847bc',
        paddingTop: '3%',
        textAlign: 'center',
        backgroundColor: 'white',
                    
    },
    moneyBox:{
        width: '55%',
        height: 120,
        margin: '1%',
        padding: '1% 2%',
        textAlign: 'left',
        borderTop: '3px solid #80808047',
        backgroundColor: '#dcdcdc6b',
        '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
                  },
    },
    money:{
        fontSize: '1.8em !important',
        fontWeight: '700 !important', 
        color: '#011B60',
    },
    wallet:{
        color:'orange',
        fontSize:'.6em !important',
        textDecoration: 'underline', 
        marginBottom: '2% !important', 
        fontWeight: '600 !important',
        '&:hover': {
            cursor: 'pointer',
            },
    },
    fund:{
        width: 100,
        height: 18,
        textAlign: 'center',
        marginRight: '2%',
        padding: '2px 6px',
        color: 'white',
        border: '1px solid transparent',
        backgroundColor: '#011B60',
        '&:hover': {
            cursor: 'pointer',
            },
    },
    typ:{
        fontSize: '.65em !important',
        padding: 0,
    },
    transfer:{
        width: 70,
        height: 18,
        textAlign: 'center',
        marginRight: '2%',
        padding: '2px 1px',
        color: '#011B60',
        border: '1px dashed #80808047',
        backgroundColor: 'white',
        '&:hover': {
            cursor: 'pointer',
            },
    },
    airtime:{
        width: 100,
        height: 18,
        textAlign: 'center',
        // marginRight: '2%',
        padding: 2,
        color: '#011B60',
        border: '1px dashed #80808047',
        backgroundColor: 'white',
        },
        '&:hover': {
            cursor: 'pointer',
            },
    
    fundFlex:{
        display: 'flex',
        marginTop: '5%',
    },

    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
        width: '265px',
        height: 100,
        margin: '6% 4%',
        marginRight: '0',
        textAlign: 'left',
        backgroundColor: 'white',
        color: '#011B60',
    },
    flex:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    bankNo:{
        fontSize: '1.2em !important',
        fontWeight: '600 !important',
    },
    revenue:{ 
        width: '40%',
        height: 48,
        margin: '1%',
        padding: '2%',
        textAlign: 'left',
        color: '#011B60',
        borderRadius: '2px',
        border: '1px dashed #80808047',
        backgroundColor: 'transparent',
    },
    revenueTyp:{ 
        fontSize: '.7em !important',
    },
    revenueMoney:{ 
        fontSize: '1.2em !important',
        fontWeight: '600 !important',
    },
    chart:{
        width: '99%',
        height: 300,
        margin: '1%',
        borderRadius: '2px',
        border: '1px dashed #80808047',
        // backgroundImage: "url(/Screenshot.png)",
        // backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat'
    },
    branddrive:{
        display: 'flex',
        width: '50%',
        height: 48,
        margin: '1%',
        marginRight: 0,
        padding: '4% 2% 0%',
        borderRadius: '2px',
        textAlign: 'left',
        color: '#011B60',
        fontSize: '.95em !important',
        border: '1px dashed #80808047',
        backgroundColor: 'transparent',
        '&:hover': {
            cursor: 'pointer',
            },
        },
    copyLink:{
        width: 70,
        height: 15,
        margin: '0% 2% 1% !important',
        fontSize: '.7em !important',
        color: 'white',  
        padding: '4px 8px',
        textAlign: 'left',
        backgroundColor: 'orange',
        '&:hover': {
            cursor: 'pointer',
            },
    },

});

