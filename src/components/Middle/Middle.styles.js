import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    lagos: {
        width: 160,
        height: 25,
        margin: '2% 0% !important',
        backgroundColor: 'white',
    },
    lagosTyp:{
        textDecoration: 'underline',
        color: '#1565c0',
        fontWeight: 600,
    },
    hq:{
        width: 25,
        height: 20,
        margin: '2% 5% ',
        color: '#1565c0',
        fontWeight: 600,
        padding: '2px 8px 4px',
        textAlign: 'left',
        backgroundColor: 'orange',
                    
    },
    upgrade:{
        width: 120,
        height: 25,
        margin: '2%',
        marginLeft: '31%',
        padding: '5px 10px 4px',
        textAlign: 'left',
        color: '#1565c0',
        backgroundColor: '#dcdcdc6b',
    },
    upgradeTyp:{fontSize: '.9em !important',},
    ngn:{
        width: 150,
        height: 50,
        margin: '1%',
        color: '#1565c0',
        textAlign: 'center',
        paddingTop: '3%',
        paddingRight: '2%',
        borderRight: '3px solid #80808047',
        backgroundColor: 'white',
                    
    },
    usd:{
        width: 150,
        height: 50,
        margin: '1%',
        color: '#509bef',
        paddingTop: '3%',
        textAlign: 'center',
        backgroundColor: 'white',
                    
    },
    moneyBox:{
        width: 340,
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
        fontSize: '2em !important',
        fontWeight: '700 !important', 
        color: '#1565c0',
    },
    wallet:{
        color:'orange',
        fontSize:'.8em !important',
        textDecoration: 'underline', 
        marginBottom: '2% !important', 
        fontWeight: '600 !important',
    },
    fund:{
        width: 100,
        height: 18,
        textAlign: 'center',
        marginRight: '2%',
        padding: '3px 8px',
        color: 'white',
        border: '1px solid transparent',
        backgroundColor: '#1565c0',
    },
    typ:{
        fontSize: '.7em !important',
        padding: 0,
    },
    transfer:{
        width: 70,
        height: 18,
        textAlign: 'center',
        marginRight: '2%',
        padding: '3px 1px',
        color: '#1565c0',
        border: '1px dashed #80808047',
        backgroundColor: 'white',
    },
    airtime:{
        width: 100,
        height: 18,
        textAlign: 'center',
        // marginRight: '2%',
        padding: '3px 2px',
        color: '#1565c0',
        border: '1px dashed #80808047',
        backgroundColor: 'white',
        },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        height: 100,
        margin: '4%',
        textAlign: 'left',
        backgroundColor: 'white',
        color: '#1565c0',
    },
    bankNo:{
        fontSize: '1.4em !important',
        fontWeight: '600 !important',
    },
    revenue:{ 
        width: '36%',
        height: 50,
        margin: '1%',
        padding: '2%',
        textAlign: 'left',
        color: '#1565c0',
        borderRadius: '2px',
        border: '1px dashed #80808047',
        backgroundColor: 'transparent',
    },
    revenueTyp:{ 
        fontSize: '.8em !important',
    },
    revenueMoney:{ 
        fontSize: '1.3em !important',
        fontWeight: '600 !important',
    },
    chart:{
        width: '600px',
        height: 370,
        margin: '1%',
        borderRadius: '2px',
        border: '1px dashed #80808047',
        backgroundImage: "url(/Screenshot.png)",
        backgroundSize: 'contain',
    },
    branddrive:{
        display: 'flex',
        width: '47%',
        height: 50,
        margin: '1%',
        padding: '4% 2% 0%',
        borderRadius: '2px',
        textAlign: 'left',
        color: '#1565c0',
        fontSize: '.95em !important',
        border: '1px dashed #80808047',
        backgroundColor: 'transparent',
        },
    copyLink:{
        width: 70,
        height: 17,
        margin: '0% 2% 1% !important',
        fontSize: '.8em !important',
        color: 'white',  
        padding: '4px 8px',
        textAlign: 'left',
        backgroundColor: 'orange',
    },

});

