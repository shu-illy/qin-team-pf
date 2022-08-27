import { topContentsState } from "pages";
import React from "react";
import { selector, useRecoilValue } from "recoil";
import Blogs from "components/organisms/Blogs";

const topBlogsState = selector({
  key: "TopBlogs",
  get: ({ get }) => {
    const topContents = get(topContentsState);
    return topContents.blogs;
  },
});

const TopBlogs = () => {
  const blogs = useRecoilValue(topBlogsState);
  return <Blogs blogs={blogs} isAll={false} />;
};

export default TopBlogs;
