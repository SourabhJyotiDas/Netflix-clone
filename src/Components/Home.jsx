import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import { Link } from "react-router-dom";
const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";


function Row({ title, arr }) {
    return (
        <div className=" text-center text-2xl  ">
            <h2 className="my-5"> {title}</h2>
            <div className='flex space-x-5  w-auto overflow-x-auto '>
                {arr.map((item, index) => (
                    <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
                ))}
            </div>
        </div>
    )
}


function Card({ img }) {
    return (
        <div className='h-[40vh] flex justify-center items-center card'>
            <div className="h-[35vh] w-[50vw] md:w-[20vw] lg:w-[15vw] xl:h-[40vh]">
                <img className="h-[100%] w-[100%]" src={img} alt="cover" />
            </div>
        </div>
    )
}

const Home = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const fetchUpcoming = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setUpcomingMovies(results);
        };
        const fetchNowPlaying = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
            setNowPlayingMovies(results);
        };
        const fetchPopular = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
            console.log(results);

            setPopularMovies(results);
        };
        const fetchTopRated = async () => {
            const {
                data: { results },
            } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
            setTopRatedMovies(results);
        };
        const getAllGenre = async () => {
            const {
                data: { genres },
            } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
            setGenre(genres);
            console.log(genres);
        };

        getAllGenre();
        fetchUpcoming();
        fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
    }, []);

    return (
        <section className="home px-2 bg-black text-white ">

        {/* FOR MOBILE ONLY */}
            <div
                className="banner text-center h-[70vh]  bg-cover bg-no-repeat flex flex-col space-y-5 justify-center items-center md:hidden"
                style={{
                    backgroundImage: popularMovies[0]
                        ? `url(${`${imgUrl}/${popularMovies[0].poster_path
                        }`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularMovies[0] && <h1 className="text-3xl font-semibold">{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p className="text-xs">{popularMovies[0].overview}</p>}

                <div className="flex flex-col justify-center items-center">
                    <button className="flex items-center "><BiPlay /> Play  </button>
                    <button className="flex items-center bg-white p-2 rounded-md text-black">My List <AiOutlinePlus /> </button>
                </div>
            </div>
            {/*  For TABLET AND PC */}
            <div
                className="banner  h-[100vh]  bg-cover bg-center bg-no-repeat  flex-col space-y-5 justify-center items-center text-center hidden md:flex"
                style={{
                    backgroundImage: popularMovies[0]
                        ? `url(${`${imgUrl}/${popularMovies[0].backdrop_path
                        }`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularMovies[0] && <h1 className="text-3xl font-semibold">{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p className="text-xs w-[60%]">{popularMovies[0].overview}</p>}

                <div className="flex flex-col justify-center items-center">
                    <button className="flex items-center "><BiPlay /> Play  </button>
                    <button className="flex items-center bg-white p-2 rounded-md text-black">My List <AiOutlinePlus /> </button>
                </div>
            </div>

            <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Now Playing"} arr={nowPlayingMovies} />
            <Row title={"Popular"} arr={popularMovies} />
            <Row title={"Top Rated"} arr={topRatedMovies} />

            <div className="genreBox flex overflow-x-auto space-x-5 py-5">
                {genre.map((item) => (
                    <Link className="card bg-white rounded-md text-black px-3 flex justify-center items-center" key={item.id} to={`/`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Home;
