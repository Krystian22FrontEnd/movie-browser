import axios from "axios";
import { useState, useEffect } from "react";
import { errorStatus, loadingStatus, successStatus } from "../../constants/requestStatuses";
import { API_KEY, BASE_URL } from "../../constants/config";

export const useGenresList = () => {
    const [genres, setGenres] = useState({
        data: [],
        status: loadingStatus,
    });

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchGenres = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
                    params: { api_key: API_KEY },
                    cancelToken: source.token, 
                });
                if (response.data?.genres) {
                    setGenres({
                        data: response.data.genres,
                        status: successStatus,
                    });
                } else {
                    throw new Error("Invalid data format");
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request canceled:", error.message);
                } else {
                    setGenres({
                        data: [],
                        status: errorStatus,
                    });
                    console.error("Error fetching genres:", error.message);
                }
            }
        };

        fetchGenres();

        return () => {
            source.cancel("Component unmounted.");
        };
    }, []);

    return { genres };
};
