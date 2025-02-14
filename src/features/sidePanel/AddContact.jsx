
import * as React from 'react';
import { FormParts } from "./FormParts";
import CloseIcon from '@mui/icons-material/Close';
import { Button, Drawer, IconButton } from '@mui/material';

export default function AddContactForm() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (open) => () => {
        setState({ right: open });
    };

    return (
        <div>
            <div className='addContact'>
                <Button onClick={toggleDrawer(true)} style={{
                    background: '#1C3959',
                    color: "#FFFFFF",
                    width: '150px',
                    height: '30px',
                    borderRadius: '5px',
                    opacity: 1,
                    boxSizing: 'border-box',
                    border: '1px solid #1C3959',
                    marginTop: '-10px'
                }}>add contact</Button >
            </div>
            <Drawer anchor="right" open={state.right}>
                <div style={{
                    position: 'relative',
                    width: '440px',
                    maxWidth: '100%',
                    height: '100vh',
                    padding: '20px',
                    paddingRight: '15px',
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                    overflowX: 'hidden'
                }}>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        style={{ position: 'absolute', top: '10px', right: '0', zIndex: 1000 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <FormParts />
                </div>
            </Drawer>
        </div>
    );
}
