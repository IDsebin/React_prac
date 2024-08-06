import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% -32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover{
        background: lightgray;
    }
`;

const ContentText = styled.p`
    font-size: 14px;
`;

function CommentListItem(props) {
    const {commnet} = props; 

    return(
        <Wrapper>
            <ContentText>{commnet.content}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;