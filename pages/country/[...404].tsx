import { Custom404 } from "@components";
import { NextPage } from "next";
import React from "react";

const Custom404CountryPage: NextPage = () => {
  return (
    <Custom404 metaContent="The country page was not found.">
      Oops! The country page you are looking for does not exist!! 😥
    </Custom404>
  );
};

export default Custom404CountryPage;
