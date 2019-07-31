import React from "react";
import styled from "styled-components";

function Profile() {

  const LayoutSideBar = styled.div`
    height: 600px;
    width : 250px;
    border: 2px solid black;
    border-radius: 7px;
  `;

  const InfoUser = styled.div`
    height: 200px;
    width: 100%;
  `;

  const ImageUser = styled.img`
    height: 100px;
    width: 100px;
    margin: 10px auto;
  `;

  const TextUser = styled.p`
    font-size: 1.4rem;
  `;

  const InfoSite = styled.div`
    width: 100%;
    height: 400px;
    background-image: url("https://i.imgur.com/uPb6WfY.jpg");
    background-size: cover;
  `;

  const TextSite = styled.p`
    font-size: 1.8rem;
    padding: 15px;
    line-height: 1.3;
    color: white;
    font-weight: bold;
  `;

  return (
    <LayoutSideBar>
      <InfoUser>
        <ImageUser src="https://image.flaticon.com/icons/png/512/17/17004.png" alt="Profile" />
        <TextUser>Welcome, Gretta</TextUser>
      </InfoUser>
      <InfoSite>
        <TextSite>Explore Faith</TextSite>
      </InfoSite>
    </LayoutSideBar>
  )
}

export default Profile;
