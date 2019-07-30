import React from "react";
import styled from "styled-components";

function Profile() {

  const LayoutSideBar = styled.div`
    height: 600px;
    width : 200px;
    border: 2px solid black;
  `;

  const InfoUser = styled.div`
    height: 200px;
    width: 200px;
    border: 2px solid red;
  `;

  const ImageUser = styled.img`
    src="./assets/user.jpg";
    height: 100px;
    width: 100px;
    border: 2px solid black;
    margin: 10px auto;
  `;

  const InfoSite = styled.div`
    width: 200px
    padding: 10px;
    border: 2px solid red;
  `;

  const TextSite = styled.p`
    font-size: 1.6rem;
  `;

  return (
    <LayoutSideBar>
      <InfoUser>
        <ImageUser />
      </InfoUser>
      <InfoSite>
        <TextSite>Lorem Ipsum</TextSite>
      </InfoSite>
    </LayoutSideBar>
  )
}

export default Profile;
