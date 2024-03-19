import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getArtists } from "../../../networking/NetworkCall"

// material-ui
import { Grid, Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Pagination from 'themes/overrides/Pagination';
import Loader from 'components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddArtist from '../add-artist/AddArtist';


// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'artistUniqueId',
        align: 'left',
        disablePadding: false,
        label: 'Artist Id',
    },
    {
        id: 'artistName',
        align: 'left',
        disablePadding: false,
        label: 'Artist Name',
    },
    {
        id: 'Email',
        align: 'left',
        disablePadding: false,
        label: 'Email Address.'
    },
    {
        id: 'password',
        align: 'left',
        disablePadding: false,
        label: 'Password'
    },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function ArtistTableHead({ order, orderBy }) {
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

ArtistTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};


// ==============================|| Vendor TABLE ||============================== //

export default function ArtistTable({ totalNumberOfPages, artists, currentPage, setCurrentPage }) {


    return (<>
        <Box>
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
                    <ArtistTableHead />
                    {artists.length ? <TableBody>
                        {artists.map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    tabIndex={-1}
                                    key={index}
                                >
                                    {/* <TableCell align="left">
                                        <img src={row.organization_logo} className='img-fluid eventimg' alt="" style={{
                                            width: '100%',
                                            maxWidth: '50px',
                                            maxHeight: '50px'
                                        }} />
                                    </TableCell> */}
                                    <TableCell align="left">{row.unique_id}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.email}
                                        </Link>
                                    </TableCell>
                                    {/* <TableCell align="left">{row.mobile}</TableCell> */}
                                    <TableCell align="left">{row.password}</TableCell>
                                    {/* <TableCell align="right">
                                        {row.organization_name}
                                    </TableCell> */}
                                </TableRow>
                            );
                        })}
                    </TableBody> :
                        <TableBody>
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
                        </TableBody>
                    }
                </Table>
                {artists.length > 0 && <Pagination count={totalNumberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            </TableContainer>
        </Box>
    </>
    );
}
