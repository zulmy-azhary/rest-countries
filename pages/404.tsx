import { Custom404 } from "@components";
import { NextPage } from "next";
import React from "react";

const Custom404Page: NextPage = () => {
  return (
    <Custom404 metaContent="The page was not found.">
      Oops! The page you are looking for does not exist!! 😥
    </Custom404>
  );
};

export default Custom404Page;
