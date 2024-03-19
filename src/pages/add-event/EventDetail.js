import React from 'react'
import MainCard from 'components/MainCard'
import { Box, Typography } from '@mui/material'
import { Details } from './EventDetailOverview/Details'
import { DesignDetail } from './EventDetailOverview/DesignDetail'
import { ShirtSockProduct } from './EventDetailOverview/ShirtSockProduct'
import { CapProduct } from './EventDetailOverview/CapProduct'

export const EventDetail = () => {
    return (
        <>
            <Box>
                <Typography id="event-detail-title" variant="h5" component="h5" sx={{ mb: 2, }}>Event Details</Typography>
                <MainCard>
                  <Details/>
                  <DesignDetail/>
                  <ShirtSockProduct/>
                  <CapProduct/>
                </MainCard>
            </Box>
        </>
    )
}
