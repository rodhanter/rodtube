import React from 'react'
import config from '../../config.json'
import { useRouter } from 'next/router'
import Menu from "../../src/components/Menu";
import { Header } from '..';
import styled from "styled-components";


const SLink = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel2};
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColorLevel2};
    text-align: center;
    a:link {
    color: ${({ theme }) => theme.textColorBase};
    }
    a:visited {
    color: ${({ theme }) => theme.textColorBase};
    }
    a:hover {
    color: green;
    }
    a:active {
    color: blue;
    }
`;

function Video() {
	const router = useRouter()
	const id = router.query.id
    const vidurl = `https://www.youtube.com/watch?v=${id}`
     
	return (
		<>
			 <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
				<Menu></Menu>
                <Header banner={`../${config.banner}`} ></Header>
                <center>
                <h2><a href={vidurl} target='_blank'>Assista no Youtube</a> </h2>
				<iframe width="80%" height="500px" src={`https://youtube.com/embed/${id}`} allowFullScreen></iframe>
				</center>
                <SLink><a
						href='/'>
						Voltar
					</a>
                    </SLink>
                </div>
 
		</>
	)
}

export default Video