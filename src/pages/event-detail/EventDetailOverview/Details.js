import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'

export const Details = ({ event_logo, eventName, address, date, time }) => {
    return (
        <>
            <Box>
                <Grid container>
                    <Grid item xs={4}>
                        <img src={event_logo} alt='' className='img-fluid' style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{
                            p: 3
                        }}>
                            <Stack dir='vertical' gap={0}>
                                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Event Name</Typography>
                                <Typography variant="h6" component="h6" sx={{ mb: 3, }}>{eventName}</Typography>
                            </Stack>
                            <Stack dir='vertical' gap={0}>
                                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Address</Typography>
                                <Typography variant="h6" component="h6" sx={{ mb: 3, }}>{address}</Typography>
                            </Stack>
                            <Stack dir='vertical' gap={0}>
                                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Date/Time</Typography>
                                <Typography variant="h6" component="h6" sx={{ mb: 3, }}>{date} / {time}</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
