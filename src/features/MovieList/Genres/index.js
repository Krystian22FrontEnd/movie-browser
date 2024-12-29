import { useGenresList } from "../../hooks/useGenres";
import { Genre, StyledGenresList } from "./styled";

export const GenresList = ({ genresIds, extra }) => {
    const { genres } = useGenresList();

    const genresFoundById = genres.data.filter(genre => genresIds.includes(genre.id));

    return (
        <StyledGenresList extra={extra}>
            {
                genresFoundById.map(({ id, name }) => (
                    <Genre extra={extra} key={id}>
                        {name}
                    </Genre>
                ))
            }
        </StyledGenresList>
    );
};