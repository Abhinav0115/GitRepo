import React, { useContext, useState } from "react";

import {
    Container,
    Form,
    Button,
    FormGroup,
    Col,
    Label,
    Row,
    Input,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
} from "reactstrap";

// import firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { userContext } from "../context/Context";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import app from "../Config/firebaseConfig";
const auth = getAuth(app);

export default function SignUp() {
    const context = useContext(userContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                context.setUser({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                });
            })
            .catch((error) => {
                console.error(error);
                toast(error.code, " ", error.message, {
                    type: "error",
                });
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp();
    };

    if (context.user?.uid) {
        return <Navigate replace to={"/"} />;
    }
    return (
        <Container className="text-center signBG signUpBG">
            <Row>
                <Col lg={6} className="offset-lg-3 mt-5 ">
                    <CardHeader className="WelcomeBG text-white h2 mb-2 py-2 rounded-top ">
                        Welcome to GitRepo
                        <CardText className=" h5 text-secondary pt-1">
                            Github Repository Search App{" "}
                        </CardText>
                    </CardHeader>
                    <Card className="RepoBG text-dark  text-uppercase  fw-bold">
                        <Form onSubmit={handleSubmit}>
                            <CardHeader>Signup here</CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="email" sm={3}>
                                        Email
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="provide your email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="your password here"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" block color="primary">
                                    Sign Up
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
