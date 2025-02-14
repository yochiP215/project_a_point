import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Popper from '@mui/material/Popper';
import { useDispatch } from 'react-redux';
import { addContact } from '../contact/contactSlice';
const contactType = [
    { label: 'Employee' },
    { label: 'Investor ' },
    { label: 'Contractor' },
    { label: 'Manager' },
];
const languages = [
    { label: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
    { label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
    { label: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
    { label: 'Português', flag: 'https://flagcdn.com/w40/pt.png' },
    { label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
    { label: '中文', flag: 'https://flagcdn.com/w40/cn.png' },
    { label: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
    { label: '한국어', flag: 'https://flagcdn.com/w40/kr.png' },
    { label: 'עברית', flag: 'https://flagcdn.com/w40/il.png' },
    { label: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
    { label: 'हिन्दी', flag: 'https://flagcdn.com/w40/in.png' },
    { label: 'Türkçe', flag: 'https://flagcdn.com/w40/tr.png' },
    { label: 'Nederlands', flag: 'https://flagcdn.com/w40/nl.png' },
    { label: 'Svenska', flag: 'https://flagcdn.com/w40/se.png' },
    { label: 'Polski', flag: 'https://flagcdn.com/w40/pl.png' },
];
const phoneAndEmail = [
    { label: 'Home' },
    { label: 'Work' },
    { label: 'private' },
];

export const FormParts = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        role: yup.string().required('Role is required'),
        contactType: yup.string().nullable().required('Contact Type is required'),
        preferredLanguage: yup.string().nullable().required('Preferred Language is required'),
        phone: yup.string().required('Phone is required').matches(/^[0-9]{1,}$/, 'Phone must be a number'),
        email: yup.string().email('Invalid email').required('Email is required')
    });
    let { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    let dispatch = useDispatch();
    const saveContact = (data) => {
        dispatch(addContact(data));
    }
    return (<>
        <form onSubmit={handleSubmit(saveContact)}>
            <Box sx={{ width: 377, p: 2 }} role="presentation">
                <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
                    <Avatar src="../assets/Avatar.svg" sx={{ width: 104, height: 104 }} />
                </Stack>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                            <label htmlFor="first-name" style={{ marginBottom: '8px', color: '#A3B5C9' }}>First Name</label>
                            <TextField
                                id="first-name"
                                variant="outlined"
                                fullWidth
                                sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                {...register('firstName')}
                            />
                        </Box>
                        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                            <label htmlFor="last-name" style={{ marginBottom: '8px', color: '#A3B5C9' }}>Last Name</label>
                            <TextField
                                id="last-name"
                                variant="outlined"
                                fullWidth
                                sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                {...register('lastName')}
                            />
                        </Box>
                        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                            <label htmlFor="role" style={{ marginBottom: '8px', color: '#A3B5C9' }}>Role</label>
                            <TextField
                                id="role"
                                variant="outlined"
                                fullWidth
                                sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                {...register('role')}
                            />
                        </Box>
                        {errors.role && <span style={{ color: 'red' }}>{errors.role.message}</span>}
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                            <label htmlFor="contact-type" style={{ marginBottom: '8px', color: '#A3B5C9' }}>contact-type</label>
                            <Autocomplete
                                id="contact-type"
                                disablePortal
                                options={contactType}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                        {...register('contactType')}
                                    />
                                )}
                            />
                        </Box>
                        {errors.contactType && <span style={{ color: 'red' }}>{errors.contactType.message}</span>}
                    </Grid>
                </Grid>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <h3>Contact Details</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                                    <label htmlFor="preferred-language" style={{ marginBottom: '8px', color: '#A3B5C9' }}>
                                        Preferred Language
                                    </label>
                                    <Autocomplete
                                        id="preferred-language"
                                        disablePortal
                                        options={languages}
                                        getOptionLabel={(option) => option.label}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                fullWidth
                                                sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                                {...register('preferredLanguage')}
                                            />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} key={option.label} style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={option.flag} alt={option.label} style={{ width: 20, marginRight: 10 }} />
                                                {option.label}
                                            </li>
                                        )}
                                        PopperComponent={(props) => <Popper {...props} placement="bottom-start" />}
                                    />
                                </Box>
                                {errors.preferredLanguage && <span style={{ color: 'red' }}>{errors.preferredLanguage.message}</span>}
                            </Grid>

                            <Grid item xs={12}>
                                <label htmlFor="phone" style={{ marginBottom: '8px', color: '#A3B5C9' }}>
                                    phone
                                </label>
                                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 1 }}>
                                    <TextField
                                        id="phone"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            background: '#F1F4F7',
                                            flex: 2,
                                            '& .MuiOutlinedInput-root': { height: 30, borderRadius: '4px 0 0 4px' },
                                        }}
                                        {...register('phone')}
                                    />
                                    <Autocomplete
                                        id="contact-method"
                                        disablePortal
                                        options={phoneAndEmail}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                fullWidth
                                                sx={{
                                                    background: '#F1F4F7',
                                                    flex: 1,
                                                    '& .MuiOutlinedInput-root': { height: 30, borderRadius: '0 4px 4px 0' },
                                                }}
                                            />
                                        )}
                                    />
                                </Box>
                                {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
                            </Grid>

                            <Grid item xs={12}>
                                <label htmlFor="email" style={{ marginBottom: '8px', color: '#A3B5C9' }}>
                                    Email
                                </label>
                                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 1 }}>
                                    <TextField
                                        id="email"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            background: '#F1F4F7',
                                            flex: 2,
                                            '& .MuiOutlinedInput-root': { height: 30, borderRadius: '4px 0 0 4px' },
                                        }}
                                        {...register('email')}
                                    />
                                    <Autocomplete
                                        id="contact-method"
                                        disablePortal
                                        options={phoneAndEmail}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                fullWidth
                                                sx={{
                                                    background: '#F1F4F7',
                                                    flex: 1,
                                                    '& .MuiOutlinedInput-root': { height: 30, borderRadius: '0 4px 4px 0' },
                                                }}
                                            />
                                        )}
                                    />
                                </Box>
                                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 1 }}>

                                    <TextField
                                        id="email"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            background: '#F1F4F7',
                                            flex: 2,
                                            '& .MuiOutlinedInput-root': { height: 30, borderRadius: '4px 0 0 4px' },
                                        }}
                                    />
                                    <Autocomplete
                                        id="contact-method"
                                        disablePortal
                                        options={phoneAndEmail}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                fullWidth
                                                sx={{
                                                    background: '#F1F4F7',
                                                    flex: 1,
                                                    '& .MuiOutlinedInput-root': { height: 30, borderRadius: '0 4px 4px 0' },
                                                }}
                                            />
                                        )}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <h3>mailling address</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                                    <label htmlFor="address" style={{ marginBottom: '8px', color: '#A3B5C9' }}>address</label>
                                    <TextField
                                        id="address"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                                    <label htmlFor="comment" style={{ marginBottom: '8px', color: '#A3B5C9' }}>comment</label>
                                    <TextField
                                        id="comment"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <h3>billing information</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                                    <label htmlFor="Name of invoice" style={{ marginBottom: '8px', color: '#A3B5C9' }}>Name of invoice</label>
                                    <TextField
                                        id="Name of invoice"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                                    <label htmlFor="Accounting ref" style={{ marginBottom: '8px', color: '#A3B5C9' }}>Accounting ref</label>
                                    <TextField
                                        id="Accounting ref"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                                    <label htmlFor="VAT number" style={{ marginBottom: '8px', color: '#A3B5C9' }}>VAT number</label>
                                    <TextField
                                        id="VAT number"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ background: '#F1F4F7', '& .MuiOutlinedInput-root': { height: 30 } }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

            </Box>
            <button type='submit' style={{
                background: '#1C3959', color: "#FFFFFF", width: '110px',
                height: '37px', borderRadius: '5px',
                opacity: 1, boxSizing: 'border-box',
                border: '1px solid #1C3959',
            }}>Save</button>


        </form >
    </>)
}