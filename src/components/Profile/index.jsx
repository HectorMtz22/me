import React from "react";
import { image, profile } from "./styles";
import { StaticImage } from "gatsby-plugin-image";

export const Profile = () => {
  return (
    <article style={profile}>
      <StaticImage style={image} src="../../images/profile.jpg" />
      <h2>Hector Martinez</h2>
    </article>
  );
};
