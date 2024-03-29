import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    RightSide:{
        maxWidth: '20vw',
        width: '70%',
        padding: '2%',
    },
    logo:{
        width: '15vw',
        height: '6vh',
        float: 'right',
        marginright: '-50% !important',
    },
    pic: {
        width: '130%',
        height: 250,
        margin: '10% 0',
        borderRadius: 10,
        border: '1px solid transparent',
        backgroundImage: "url(/pic.png)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    profit: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        color: '#011B60', 
    },
    profitTyp: {
        fontSize: '.8em !important',
        fontWeight: '600 !important',
        marginBottom: 1, 
    },
    netProfit: {
        fontSize: '.7em !important',
        marginBottom: '1%',
    },
    revenueMoney:{ 
        fontSize: '1.1em !important',
        fontWeight: '600 !important',
        marginBottom: '1%', 

    },
    viewMore: {
        color:'orange',
        fontSize:'.6em !important',
        textDecoration: 'underline', 
        fontWeight: '600 !important',
        marginBottom: '3%',
        '&:hover': {
            cursor: 'pointer',
            },
        
    },
    expenseSmall: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    expenseSmaller: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 105,
        marginRight: 15,
    },
    expense: {
        display: 'flex',
        flexDirection: 'column',
        color: '#011B60',
        width: '110%',
        height: 205,
        marginTop: '10%',
        padding: '8%',
        textAlign: 'left',   
        borderRadius: '2px',
        border: '1px dashed #80808047',
        backgroundColor: 'transparent',
    },
    expenseTyp: {
        fontSize: '.8em !important',
        fontWeight: '600 !important',
        marginBottom: '3%', 
    },
    expenseMoney: {
        fontSize: '1.2em !important',
        fontWeight: '600 !important', 
        marginBottom: '1%', 
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5%',
    },
    flexx: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    flexxx: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '110%',
        height: 140,
        margin: '0',
        padding: '8%',
        borderRadius: '2px',
        border: '1px dashed #80808047',
        backgroundColor: 'transparent',
    },
    money: {
        fontSize: '.8em  !important',
        fontWeight: '600 !important',
        display: 'flex',
        width: '65%',
    },
    dash: {
        marginLeft: '7% !important',
    },
    dashh: {
        marginLeft: '7% !important',
    },
    dashhh: {
        marginLeft: '15% !important',
    },
    text: {
        fontSize: '.7em !important',
        marginLeft: '2% !important',
        textAlign: 'right',
        width: '55%',

    },
   

}); 