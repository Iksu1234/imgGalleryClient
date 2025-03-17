import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postLogin } from "../services/apiService";

// eslint-disable-next-line react/prop-types
function Login({ onLoginSuccess }) {
  const passwordRef = useRef(null);
  const accountRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await postLogin(
        accountRef.current.value,
        passwordRef.current.value
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        onLoginSuccess(result); // Handle admin status
      } else {
        const error = await response.text();
        console.error("Error:", error); // Handle login failure
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Form className="mt-3 mb-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-25 mx-auto" controlId="formBasicEmail">
        <Form.Label>Account</Form.Label>
        <Form.Control ref={accountRef} type="account" placeholder="Account" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-25 mx-auto" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default Login;
