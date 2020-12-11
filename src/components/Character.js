 
// Write your Character component here


import React from "react";
import styled from "styled-components";

const Cards = (props) => {
    const {data} = props;

    return (
        <CardHolderDiv>
            {data.map((character) => {
                return (
                    <Card>
                        <Img src = {character.image}></Img>
                        <h2>Name: {character.name} </h2>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Status: {character.status} </h3>
                        <h3>Species: {character.species}</h3>
                        
              
                    </Card>
                );
            })}
        </CardHolderDiv>
    );
};

const CardHolderDiv = styled.div`
display: flex;
flex-flow:row wrap;
justify-content: space-around;
align-items: center;
`;

const Card = styled.div`
background: gray;
border: 2px solid black;
width:20%;
margin: 20px 0;
padding: 4px;
box-shadow: 5px 5px 20px black;
color: black;
:hover{
    transition: all 0.25s ease-in-out;
    transform: scale(1.2);
}
`;

const Img = styled.img`
border:2px solid black;
border-radius: 100%;
max-width: 70%;
`;

export default Cards;