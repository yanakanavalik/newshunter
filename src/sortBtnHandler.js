import fetchNewsChannel from "./fetchChannel";

const sortBtnHandler = (e) => {
    const value = e.target.value;

    fetchNewsChannel({channelName:localStorage.getItem('chosen_channel'), sortBy:value})
};

export default sortBtnHandler;