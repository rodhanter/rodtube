import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoritos } from "../src/components/Favoritos";
import { videoService } from "../src/services/videoService";

function HomePage() {
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});     // config.playlists

    React.useEffect(() => {
        console.log("useEffect");
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                // Forma imutavel
                const novasPlaylists = {};
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];
                });

                setPlaylists(novasPlaylists);
            });
    }, []);

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header banner={config.banner} />
                <Timeline searchValue={valorDoFiltro} playlists={playlists}>
                    Conteúdo
                </Timeline>
                <Favs favs={config.favoritos}>
                    Conteúdo
                </Favs>
            </div>
        </>
    );
}

export default HomePage

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel2};

    .banner img {
        width: 100%;
        height: 230px;
        object-fit: cover;
    }
    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .user-info p {
      color: #666666;
    }
`;
const StyledBanner = styled.div`
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

function Header(props) {
    return (
        <StyledHeader>
            <StyledBanner bg={config.banner} />
            <section className="user-info">
                <a href={`https://github.com/${config.github}`} target="_blank"><img src={`https://github.com/${config.github}.png`} /></a>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({ searchValue, ...propriedades }) {
    const playlistNames = Object.keys(propriedades.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favs(propriedades) {
    const FavNames = Object.keys(propriedades.favs);
    return (
        <StyledFavoritos>
            <section>
                <h2>RodTubes Favoritos</h2>
                {FavNames.map((FavName) => {
                    const icone = propriedades.favs[FavName];
                    return (
                        <div key={icone.title}>
                            <a key={icone.url} href={icone.url}>
                                <img src={icone.thumb} />
                                <span>
                                    {icone.title}
                                </span>
                            </a>
                        </div>
                    )
                })}
            </section>
        </StyledFavoritos>
    )
}