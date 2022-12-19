import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { Loader } from "../components/Loader";
import { getUserDetails, updateUser } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import { USER_UPDATE_RESET } from "../constants/userConstants";
function EditUserScreen({ match, history }) {
  const userId = match.params.id;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isAdmin, setAdmin] = useState(false);

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;
  const userEdit = useSelector((state) => state.userEdit);
  const {
    error: errorEdit,
    loading: loadingEdit,
    success: successEdit,
  } = userEdit;

  useEffect(() => {
    if (successEdit) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/admin/userlist");
    } else {
      if (!user.name || user._id !== Number(userId)) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setAdmin(user.isAdmin);
      }
    }
  }, [dispatch, user, userId, successEdit, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: user._id, name, email, isAdmin }));
  };

  return (
    <div>
      <Link to="/admin/userlist/">Go Back</Link>

      <FormContainer>
        <h1>Edit User</h1>
        {loadingEdit && <Loader />}
        {errorEdit && <Message variant="danger">{errorEdit}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="isadmin">
              <Form.Label>Email Address</Form.Label>
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button className="my-2" type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default EditUserScreen;
