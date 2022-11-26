/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
    return (
        <Card className="text-center mt-3 mb-3 UserBG signBG">
            <img src={user.avatar_url} className="img-thumbnail" />
            <CardBody>
                <div className="text-primary h3">{user.name}</div>
                <div className="text-primary h6">{user.location}</div>
                <div className="text-secondary">{user.bio}</div>
                <div className="text-info">
                    {" "}
                    <span className="text-dark">Available for hire: </span>
                    {user.hireable ? "YES" : "NO"}
                </div>
                <div className="text-primary">
                    <span className="text-dark">Blog: </span>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={user.blog}
                        className="text-decoration-none text-info"
                    >
                        {user.blog}
                    </a>
                </div>
            </CardBody>
        </Card>
    );
};

export default UserCard;
