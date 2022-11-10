import React from "react";
import { StyledRegisterVideo } from "./styles";
import config from "../../../config.json";


function splitMulti(str, tokens){
    var tempChar = tokens[0];
    for(var i = 1; i < tokens.length; i++){
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
}

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            const split = splitMulti(value, ["watch?v=", "vi/", "be/"]);
            var thumb = split[1];
            if(thumb) {
            setValues({
                ...values,
                [name]: value,
                "thumb": "https://img.youtube.com/vi/"+thumb+"/hqdefault.jpg",
            });
            } else {
                setValues({
                    ...values,
                    [name]: value,
                });
            }
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { title: "Video Title", url: "https://youtu.be/xxxxxxxx" }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);
    const playlistNames = Object.keys(config.playlists);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>

            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formCadastro.values);

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <select name="playlist" onChange={formCadastro.handleChange}>
                            <option key="Select Playlist" value="Select Playlist">Select Playlist</option>
                            {playlistNames.map((playlistName) => {
                            return (
                                <option key={playlistName} value={playlistName}>{playlistName}</option>
                            )
                            })}
                            </select>
                            <input
                                placeholder="Video Title"
                                name="title"
                                value={formCadastro.values.title}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                            <span>
                            Confira se o thumbnail está correto!
                            </span>
                            <img src={formCadastro.values.thumb} />
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}