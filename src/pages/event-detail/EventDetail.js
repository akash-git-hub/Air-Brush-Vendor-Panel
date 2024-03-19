import React, { useState, useEffect } from 'react'
import MainCard from 'components/MainCard'
import { Box, Typography } from '@mui/material'
import { Details } from './EventDetailOverview/Details'
import { DesignDetail } from './EventDetailOverview/DesignDetail'
import { TshirtSockProduct } from './EventDetailOverview/TshirtSockProduct'
import { CapProduct } from './EventDetailOverview/CapProduct'
import { eventDetail } from 'networking/NetworkCall'
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader'

export const EventDetail = () => {
    const [loading, setLoading] = useState(false);
    const [eventData, setEventData] = useState({});
    const location = useLocation();
    const eventId = location.state?.eventId;


    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const res = await eventDetail(eventId);
            if (res.success) {
                setEventData(res.data);
                // toast.success(res.msg)
            } else { toast.error(res.msg) }
            setLoading(false);
        }
        getData();
    }, []);

    return (
        <>
            <ToastContainer />
            {loading ? <Loader /> : <>
                <Box>
                    <Typography id="event-detail-title" variant="h5" component="h5" sx={{ mb: 2, }}>Event Details</Typography>
                    <MainCard>
                        <Details event_logo={eventData.event_logo} eventName={eventData.name} date={eventData.date} time={eventData.time} address={eventData.address} />
                        {eventData.bg_designs && eventData.bg_designs.map((d) => {
                            return (<DesignDetail bgimage={d.Location} colorsArray={d.colors} />)
                        })}
                        {eventData.products && eventData.products.map((p) => {
                            if (p.product_type == "cap") {
                                return (<CapProduct productImage={p.Location} productQuantity={p.quantity} colorsArray={p.colors} />)
                            } else {
                                return (<TshirtSockProduct productImage={p.Location} productQuantity={p.quantity} sizesArray={p.sizes} product_type={p.product_type} />)
                            }
                        })}
                    </MainCard>
                </Box>
            </>}
        </>
    )
}
