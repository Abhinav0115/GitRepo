/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Axios from "axios";

import { FaStar } from "react-icons/fa";

import { ListGroup, ListGroupItem } from "reactstrap";

import "../App.css";

const Repo = ({ repos_url }) => {
    const [repos, setRepos] = useState([]);

    /* const fetchRepos = async () => {
        const { data } = await Axios.get(repos_url)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setRepos(data);
            });
    }; */
    const fetchRepos_2 = async () => {
        const { data } = await Axios.get(repos_url);
        setRepos(data);
    };

    useEffect(() => {
        fetchRepos_2();
    }, [repos_url]);

    return (
        <ListGroup className="RepoBG">
            {repos.map((repo) => (
                <ListGroupItem key={repo.id} className="RepoBG">
                    <div className="text-primary h6">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={repo.html_url}
                            className="text-decoration-none"
                        >
                            {repo.name}
                        </a>
                    </div>
                    <div className="text-dark">{repo.description}</div>
                    <div className="text-warning">
                        {repo.stargazers_count} <FaStar />
                    </div>
                    <div className="text-secondary  ">{repo.language}</div>
                    <div className="text-primary">
                        {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={repo.homepage}
                            className="text-decoration-none"
                        >
                            {" "}
                            {repo.homepage}
                        </a>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default Repo;
