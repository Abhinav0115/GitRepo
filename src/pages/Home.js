import React, { useState, useContext } from "react";
import Axios from "axios";

import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";

import UserCard from "../components/UserCard";
import Repo from "../components/Repo";
import { Navigate } from "react-router-dom";
import { userContext } from "../context/Context";
import { toast } from "react-toastify";

export default function Home() {
    const context = useContext(userContext);
    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(
                `https://api.github.com/users/${query}`
            );
            setUser(data);
        } catch (error) {
            toast("Not able to locate user", { type: "error" });
        }
    };

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            fetchDetails();
        }
    };

    if (!context.user?.uid) {
        return <Navigate to={"/signin"} />;
    }

    return (
        <Container className="signBG HomeBG">
            <Row className=" mt-3 ms-2">
                <Col md="5">
                    <InputGroup>
                        <Input
                            type="text"
                            value={query}
                            onKeyDown={onKeyDownHandler}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Please provide the username"
                        />
                        <Button onClick={fetchDetails} color="primary">
                            Fetch User
                        </Button>
                    </InputGroup>

                    {user ? <UserCard user={user} /> : null}
                </Col>
                <Col md="7">
                    {user ? <Repo repos_url={user.repos_url} /> : null}
                </Col>
            </Row>
        </Container>
    );
}
