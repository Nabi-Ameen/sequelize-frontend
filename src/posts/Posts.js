import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrls";

const Posts = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/post`).then(({ data }) => {
      setPostData(data);
    });
  }, []);
  return (
    <div>
      {postData?.map((data, index) => {
        const { title, description, username } = data;
        return (
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
