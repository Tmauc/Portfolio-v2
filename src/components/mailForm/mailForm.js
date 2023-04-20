import React, { useState } from 'react';
import { LoginBox, Form, UserBox, Input, Label, TextArea, Button, Span } from './mailForm.style';

function MailForm({ activeSide }) {
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [message, setMessage] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    name === "email" ? setEmail(value) : setMessage(value);
  }

  function handleInputBlur(event) {
    const { name, value } = event.target;
    const label = document.querySelector(`[for=${name}-input]`);

    if (value !== "") {
      label.classList.add("active");
    } else {
      label.classList.remove("active");
    }
  }
  return (
    <LoginBox className="neumorphism">
      <Form>
        <UserBox>
          <Input
            type="text"
            id="email-input"
            name="email"
            required
            aria-label="Email"
            aria-required="true"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <Label htmlFor="email-input" id="email-label">Email</Label>
        </UserBox>
        <UserBox>
          <TextArea
            id="message-input"
            name="message"
            rows="4"
            required
            aria-label="Message"
            aria-required="true"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <Label htmlFor="message-input" id="message-label">Message</Label>
        </UserBox>
        <center>
          <Button type="submit" activeSide={activeSide}>
            SEND
            <Span aria-hidden="true" activeSide={activeSide}></Span>
          </Button>
        </center>
      </Form>
    </LoginBox>
  );
}

export default MailForm;