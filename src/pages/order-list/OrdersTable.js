import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Pagination from 'themes/overrides/Pagination';
// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';
import { getOders } from 'networking/NetworkCall';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';


// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'eventName',
    align: 'left',
    disablePadding: false,
    label: 'Event Name',
  },
  {
    id: 'orderNumber',
    align: 'left',
    disablePadding: false,
    label: 'Order No.'
  },
  {
    id: 'customerName',
    align: 'left',
    disablePadding: true,
    label: 'Customer Name'
  },
  {
    id: 'customerMobileNo',
    align: 'left',
    disablePadding: true,
    label: 'Customer Mobile No.'
  },
  {
    id: 'artistName',
    align: 'left',
    disablePadding: true,
    label: 'Artist Name'
  },
  {
    id: 'EventDate',
    align: 'left',
    disablePadding: true,
    label: 'Event Date/Time'
  },
  {
    id: 'product',
    align: 'left',
    disablePadding: true,
    label: 'Product Name'
  },
  {
    id: 'status',
    align: 'left',
    disablePadding: false,
    label: 'Status'
  },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          // sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case "Pending":
      color = 'warning';
      title = 'Pending';
      break;
    case "Completed":
      color = 'success';
      title = 'Completed';
      break;
    case "Picked":
      color = 'success';
      title = 'Picked';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="end">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
  const [odersData, setOrdersData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getOders(currentPage);
      if (res.success) {
        setOrdersData(res.data?.data);
        // toast.success(res.msg);
        setTotalNumberOfPages(res.data?.totalNumberOfPages);
      } else { toast.error(res.msg) }
      setLoading(false);
    }
    getData();
  }, [currentPage]);

  return (
    <>
      <ToastContainer />
      {loading ? <Loader /> : <>
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
              <OrderTableHead />
              {odersData.length ? <TableBody>
                {odersData.map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      tabIndex={-1}
                      key={row.trackingNo}
                    >
                      <TableCell align="left">{row.event?.name}</TableCell>
                      <TableCell align="left">{row.order_number}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.mobile}</TableCell>
                      <TableCell align="left">{row.ArtistOrder?.artist?.name}</TableCell>
                      <TableCell align="right">{row.event?.date}/ {row.event?.time}</TableCell>
                      <TableCell align="left">{row.event?.product_type}</TableCell>
                      <TableCell align="left">
                        <OrderStatus status={row.ArtistOrder?.status} />
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
            {odersData.length > 0 && <Pagination count={totalNumberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
          </TableContainer>
        </Box>
      </>}

    </>
  );
}
