import fetchNewsChannel from "./fetchChannel";

export const sortBtnHandler = (e) => {
    const value = e.target.value;

    fetchNewsChannel(localStorage.getItem('chosen_channel'), value)
};