import { Genre, TagsList } from "./styled";
import { useGenresList } from "./useGenresList";

export const GenresList = ({ genresIds, extra }) => {
    const { genres } = useGenresList();
    const genresFoundById = genres.data.filter(genre => genresIds.includes(genre.id));

    return (
        <TagsList extra={extra}>
            {
                genresFoundById.map(({ id, name }) => (
                    <Genre extra={extra} key={id}>
                        {name}
                    </Genre>
                ))
            }
        </TagsList>
    );
};