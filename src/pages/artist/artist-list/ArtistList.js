// project import
import MainCard from 'components/MainCard';
import ArtistTable from './ArtistTable';
import AddArtist from '../add-artist/AddArtist';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { getArtists } from 'networking/NetworkCall';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';
import { useLocation } from "react-router-dom"

// ==============================|| SAMPLE PAGE ||============================== //

const ArtisList = () => {

    const [artists, setArtists] = useState([]);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState();
    const [currentPage, setCurrentPage] = useState(1);


    const [loading, setLoading] = useState(true)

    const getData = async () => {
        setLoading(true);
        const res = await getArtists(currentPage);
        if (res.success) {
            setArtists(res.data?.data);
            setTotalNumberOfPages(res.data?.totalNumberOfPages);
            setLoading(false);
        }
        setLoading(false);
    };


    useEffect(() => { getData() }, [currentPage]);
    return (
        <>
            <ToastContainer />
            {loading ? <Loader /> : <Box style={{
                position: 'relative'
            }}>
                <style jsx>{`
            .ArtistModal {
                position: absolute;
                right: 0;
                top: -5vw;
            }
        `}</style>

                {/* Pass refresh state and setter function to AddArtist component */}
                <AddArtist btnClass={"ArtistModal"} getData={getData} />
                <MainCard>
                    <ArtistTable artists={artists} totalNumberOfPages={totalNumberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </MainCard>
            </Box>
            }
        </>
    )

};

export default ArtisList;
