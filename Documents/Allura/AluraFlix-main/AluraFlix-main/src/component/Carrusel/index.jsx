import React, { useEffect, useState } from 'react';
import { fetchData, videosUrl } from '../../servicios/api.js'
import VideoCard from "../VideoCard"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Carrusel = (props) => {

    const [video, setVideo] = useState([]);
    useEffect(() => {
        fetchData(videosUrl)
            .then((video) => setVideo(video))
            .then(console.log('%cVideos cargados con éxito', `color: ${props.borderColor}; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;`))
            .catch((error) => console.error('Error al cargar videos:', error));
    }, []);

    const items = video
        .filter((video) => video.categoria === props.categoriaCarrusel)
        .map((video) => (
            <div key={video.id}>
                <a href={video.linkVideo} target="_blank" rel="noreferrer" >
                    <VideoCard videoImg={video.linkImagen} borderColor={props.borderColor} />
                </a>
            </div>
        ));

    return (
        <Carousel responsive={responsive} infinite={false} swipeable={true} draggable={true} itemClass="carouselItem">
            {items.map((video) => (video))}
        </Carousel>
    );
};
export default Carrusel;