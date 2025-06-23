import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { postLogin } from "../services/apiService";
import { useState } from "react";

function Login({ onLoginSuccess }) {
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);
  const accountRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
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
      console.error("ErrorTESTI:", error);
      alert("Login failed");
    } finally {
      setLoading(false); // Hide spinner
    }
  };
  return (
    <Form
      className="mt-5 mb-3 bg-card box-shadow login-form"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
        <Form.Label className="text-shadow">
          <strong>Account</strong>
        </Form.Label>
        <Form.Control
          ref={accountRef}
          type="account"
          placeholder="Account"
          className="box-shadow"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
        <Form.Label className="text-shadow">
          <strong>Password</strong>
        </Form.Label>
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="box-shadow"
        />
      </Form.Group>
      <Button
        variant="info"
        type="submit"
        className="box-shadow"
        disabled={loading}
      >
        {!loading && <p className="spinner-button">Login</p>}
        {loading && (
          <div className="button-spinner">
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </div>
        )}
      </Button>
    </Form>
  );
}
export default Login;
