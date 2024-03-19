import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { createArtist } from "../../../networking/NetworkCall";
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom"
import {
    Button,
    Grid,
    Typography, Modal, Box, TextField, Stack, InputLabel, OutlinedInput, FormHelperText
    , IconButton,
    InputAdornment
} from '@mui/material';
import { PlusCircleOutlined } from '@ant-design/icons';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddArtist = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Destructuring formik object
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required'),
            name: Yup.string().max(200).required('Name is Required'),
        }),

        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
            const res = await createArtist(values);
            if (res.success) {
                toast.success(res.msg);
                // handleClose()
                navigate("/vendor/artist-list")
            } else {
                toast.error(res.msg);
            }
        }
    });

    return (
        <>
            <ToastContainer />
            <Button className="w-100" type="button" variant="contained" size="large" onClick={handleOpen} startIcon={<PlusCircleOutlined />}>Add Artist</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h2" component="h2">
                        Add Artist
                    </Typography>
                    <form onSubmit={handleSubmit}
                        noValidate
                        style={{
                            // overflow: 'scroll',
                            // scrollbarWidth: 'none'
                        }}
                    >
                        <div>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="name">Name</InputLabel>
                                        <OutlinedInput
                                            id="name"
                                            type="text"
                                            value={values.name}
                                            name="name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter name"
                                            fullWidth
                                            error={Boolean(touched.name && errors.name)}
                                        />
                                        {touched.name && errors.name && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.name}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="email-login">Email Address</InputLabel>
                                        <OutlinedInput
                                            id="email-login"
                                            type="email"
                                            value={values.email}
                                            name="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter email address"
                                            fullWidth
                                            error={Boolean(touched.email && errors.email)}
                                        />
                                        {touched.email && errors.email && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.email}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-login">Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            id="-password-login"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            name="password"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        size="large"
                                                    >
                                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            placeholder="Enter password"
                                        />
                                        {touched.password && errors.password && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.password}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                            </Grid>

                            <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting} sx={{
                                width: '100%',
                                mt: '5px',
                                background: '#0958d9!important'
                            }}>
                                Create Artist
                            </LoadingButton>
                        </div>

                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default AddArtist;
