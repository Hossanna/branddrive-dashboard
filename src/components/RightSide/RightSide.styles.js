import { makeStyles } from "@material-ui/core/styles";


export const useStyle = makeStyles({
    pic: {
        width: '160%',
        height: 260,
        margin: '2%',
        borderRadius: 10,
        border: '1px dashed #80808047',
        backgroundImage: "url(/pic.png)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    profit: {
        width: '155%',
        height: 140,
        margin: '2%',
        padding: '2%',
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
        width: '155%',
        height: 205,
        margin: '2%',
        padding: '2%',
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
        marginBottom: '1%',
    },
    money: {
        fontSize: '.85em  !important',
        fontWeight: '600 !important',
    },
    text: {
        fontSize: '.85em !important',
    },
   

}); 