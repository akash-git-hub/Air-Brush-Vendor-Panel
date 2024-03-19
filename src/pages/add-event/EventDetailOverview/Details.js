import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'

export const Details = () => {
    return (
        <>
            <Box>
                <Grid container>
                    <Grid item xs={4}>
                        <img src='https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=' alt='' className='img-fluid' style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{
                            p:3
                        }}>
                            <Stack dir='vertical' gap={0}>
                                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Event Name</Typography>
                                <Typography variant="h6" component="h6" sx={{ mb: 3, }}>Fun Fair</Typography>
                            </Stack>
                            <Stack dir='vertical' gap={0}>
                                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Address</Typography>
                                <Typography variant="h6" component="h6" sx={{ mb: 3, }}>64 , Tulsi Nagar</Typography>
                            </Stack>
                            <Stack dir='vertical' gap={0}>
                                <Typography variant="h5" component="h5" sx={{ mb: 0, }}>Date/Time</Typography>
                                <Typography variant="h6" component="h6" sx={{ mb: 3, }}>18/04/2024 / 10:00</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
