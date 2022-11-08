import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoritos } from "../src/components/Favoritos";

function HomePage() {
    const estilosDaHomePage = {
    };

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header banner={config.banner}/>
                <Timeline playlists={config.playlists}>
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
`;


function Header(props) {
    return (
        <StyledHeader>
            <div className="banner">
                <img src={`${props.banner}`} />
            </div>
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

function Timeline(propriedades) {
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
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
  // Statement
  // Retorno por expressão
  return (
      <StyledFavoritos>
          <section>
          <h2>RodTubes Favoritos</h2>
          {FavNames.map((FavName) => {
              const icone = propriedades.favs[FavName];
              return (
                  <div>
                      <div>
                      <a href={icone.url}>
                                      <img src={icone.thumb} />
                                      <span>
                                          {icone.title}
                                      </span>
                                  </a>
                      </div>
                  </div>
              )
          })}
          </section>
      </StyledFavoritos>
  )
}