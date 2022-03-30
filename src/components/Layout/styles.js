import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    appBar: {
        placeItems: 'center',
        position: 'fixed',
        color: '#000',
        backgroundColor: '#fff',
        boxShadow: 'none',

    },
    navbar: {
        padding: '0',
        width: '94.4%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navText: {
        color: '#7D7D7D',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        letterSpacing: '0.2rem'
    },
    rectangle: {
        position: 'fixed',
        width: '94.4%',
        border: '1px solid #E5E5E5',
        top: '10.2%',
        color: '#E5E5E5'
    }
}));