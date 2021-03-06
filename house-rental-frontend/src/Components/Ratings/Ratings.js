import React, { createElement, useState, useEffect } from 'react';
import './Ratings.css';
import 'antd/dist/antd.css';
import { Comment, Tooltip, List, Rate } from 'antd';
import UserRating from "../UserRating/UserRating";
import PosterReport from '../UserReport/UserReport'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { apiGetCommentByPosterId } from '../../Services/comment_services'

function Ratings(props) {
    const { rating, userId, username, posterId } = props;

    console.log(props)

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const [comments, setComments] = useState([])

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    }

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiGetCommentByPosterId(posterId)
            setComments(data.comments)
        }

        fetchData()
    }, [posterId])

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <div className="ratings">
            <h1>Đánh giá</h1>
            <UserRating ratingId={rating._id} userId={userId} username={username} posterId={posterId} />
            <PosterReport posterId={posterId} ratingId={rating._id} />
            <List
                className="ratings-list"
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={item => (
                    <li className="ratings-item">
                        <Rate allowHalf disabled defaultValue={item.stars} />
                        <Comment
                            actions={actions}
                            author={item.username}
                            avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            content={item.comment}
                        />
                    </li>
                )}
            />
        </div>
    )
}

export default Ratings;