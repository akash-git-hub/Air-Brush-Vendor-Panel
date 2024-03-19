import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link} from 'react-router-dom';
import ActiveInactive from 'components/@extended/ActiveInactive';
import Pagination from 'themes/overrides/Pagination';
import { getEvents, updateEventStatus } from "../../networking/NetworkCall"
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Stack } from '@mui/material';
import Loader from 'components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeOutlined} from '@ant-design/icons';

// ==============================|| EVENT TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'eventName',
        align: 'left',
        disablePadding: false,
        label: 'Event Name'
    },
    {
        id: 'productName',
        align: 'left',
        disablePadding: true,
        label: 'Product Name'
    },
    {
        id: 'address',
        align: 'left',
        disablePadding: false,
        label: 'Address'
    },
    {
        id: 'dateTime',
        align: 'left',
        disablePadding: false,
        label: 'Date/Time'
    },
    {
        id: 'activeInactive',
        align: 'left',
        disablePadding: false,
        label: 'Enable/Disable'
    },
];

// ==============================|| EVENT TABLE - HEADER ||============================== //

function EventTableHead() {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

// ==============================|| EVENT TABLE ||============================== //

export default function EventTable() {
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const res = await getEvents(currentPage);
            if (res.success) {
                setEventData(res.data?.data);
                // toast.success(res.msg);
                setTotalNumberOfPages(res.data?.totalNumberOfPages);
            } else { toast.error(res.msg) }
            setLoading(false);
        }
        getData();
    }, [currentPage]);



    const handleButtonClick = async (id) => {
        const eventId = id;
        let status = ""; // updateble status
        const prevState = [...eventData];
        const updatableData = prevState.map((e) => {
            const event = { ...e }
            if (e.id === id) {
                if (e.status === "Active") {
                    event.status = "Inactive";
                    status = "Inactive"
                } else {
                    event.status = "Active"
                    status = "Active"
                }
            }
            return event;
        })
        setEventData(updatableData)
        // call api to update status here

        const data = { status }

        const res = await updateEventStatus(eventId, data);

        if (res.success) {
            toast.success(res.msg)
        } else {
            setEventData(prevState)
            toast.error(res.msg);
        }
    };

    return (
        <>
            <ToastContainer />
            {loading ? <Loader /> : <Box>
                <TableContainer
                    sx={{
                        width: '100%',
                        overflowX: 'auto',
                        position: 'relative',
                        display: 'block',
                        maxWidth: '100%',
                        '& td, & th': { whiteSpace: 'nowrap' }
                    }}
                >
                    <Table
                        aria-labelledby="tableTitle"
                        sx={{
                            '& .MuiTableCell-root:first-of-type': {
                                pl: 2
                            },
                            '& .MuiTableCell-root:last-of-type': {
                                pr: 3
                            }
                        }}
                    >
                        <EventTableHead />
                        {eventData.length ? <TableBody>
                            {eventData.map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        tabIndex={-1}
                                        key={index}
                                    >
                                        {/* <TableCell align="left">
                                            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/0ef7ec186619481.Y3JvcCw2MTc2LDQ4MzEsMCwxNjgx.jpg" className='img-fluid eventimg' alt="" style={{
                                                width: '100%',
                                                maxWidth: '50px',
                                                maxHeight: '50px'
                                            }} />
                                        </TableCell> */}
                                        <TableCell align="left">{row.name}</TableCell>
                                        {/* <TableCell align="left">{row.vendorName}</TableCell> */}
                                        <TableCell align="left">{row.productCategories.join(" / ")}</TableCell>
                                        <TableCell align="left">{row.address}</TableCell>
                                        <TableCell align="left">{row.date}/ {row.time}</TableCell>
                                        <TableCell align="left">
                                            <Stack direction="row" style={{
                                                justifyContent:'space-between',
                                                alignItems:'center'
                                            }}>
                                                <ActiveInactive id={row.id} isActive={row.status === "Active" ? true : false} handleButtonClick={handleButtonClick} />
                                                <Link to="/vendor/event-detail">
                                                <EyeOutlined style={{
                                                    fontSize:'1.5vw'
                                                }}/>
                                                </Link>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody> : <TableBody>
                            <TableRow tabIndex={-1}>
                                <TableCell
                                    colSpan={headCells.length}
                                    sx={{
                                        textAlign: 'center',
                                        width: '100%',
                                        borderBottom: '0px solid #000'
                                    }}
                                >
                                    <Typography variant="h2">
                                        Data Not Found
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>}

                    </Table>
                    {eventData.length > 0 && <Pagination count={totalNumberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                </TableContainer>
            </Box>}
        </>

    );
}
