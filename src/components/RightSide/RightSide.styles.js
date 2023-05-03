import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    pic: {
        width: '140%',
        height: 270,
        margin: '10% 0',
        borderRadius: 10,
        border: '1px dashed #80808047',
        backgroundImage: "url(/pic.png)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    profit: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '120%',
        height: 140,
        margin: '0',
        padding: '10%',
        textAlign: 'left',
        color: '#1565c0',
        borderRadius: '2px',
        border: '1px dashed #80808047',
        backgroundColor: 'transparent',
    },
    profitTyp: {
        fontSize: '.85em !important',
        fontWeight: '600 !important',
        marginBottom: 1, 
    },
    netProfit: {
        fontSize: '.85em !important',
        marginBottom: '1%',
    },
    revenueMoney:{ 
        fontSize: '1.3em !important',
        fontWeight: '600 !important',
        marginBottom: '1%', 

    },
    viewMore: {
        color:'orange',
        fontSize:'.7em !important',
        textDecoration: 'underline', 
        fontWeight: '600 !important',
        marginBottom: '3%',
        
    },
    expense: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '120%',
        height: 205,
        marginTop: '10%',
        padding: '10%',
        textAlign: 'left',
        color: '#1565c0',
        borderRadius: '2px',
        border: '1px dashed #80808047',
        backgroundColor: 'transparent',
    },
    expenseTyp: {
        fontSize: '.85em !important',
        fontWeight: '600 !important',
        marginBottom: '3%', 
    },
    expenseMoney: {
        fontSize: '1.3em !important',
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
    money: {
        fontSize: '.85em  !important',
        fontWeight: '600 !important',
        display: 'flex',
        width: '65%',
    },
    dash: {
        marginLeft: '8% !important',
    },
    dashh: {
        marginLeft: '8% !important',
    },
    dashhh: {
        marginLeft: '16% !important',
    },
    text: {
        fontSize: '.8em !important',
        marginLeft: '2% !important',
        textAlign: 'right',
        width: '55%',

    },
   

}); 