import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김세빈",
        comment: "안녕하세요, 소품입니다"
    },
    {
        name: "요아정",
        comment: "너무 맛이 없습니다"
    },
    {
        name: "삼동소바",
        comment: "맛이 일품입니다"
    },
]

function CommentList() {
    return (
        <div>
        {comments.map((comment)=> {
            return(
            <Comment name= {comment.name} comment={comment.comment}/>
        );})}
        </div>
    )
}

export default CommentList;