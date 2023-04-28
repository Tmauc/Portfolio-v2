import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import {
  LoginBox,
  Form,
  UserBox,
  Input,
  Label,
  TextArea,
  Button,
  Span,
} from './mailForm.style';

function MailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [t] = useTranslation();

  function handleInputChange(event) {
    const { name, value } = event.target;
    name === 'email' ? setEmail(value) : setMessage(value);
  }

  function handleInputBlur(event) {
    const { name, value } = event.target;
    const label = document.querySelector(`[for=${name}-input]`);

    if (value !== '') {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  }

  function handleSubmit() {
    axios
      .post(`https://formspree.io/f/xgebrngj`, {
        email: email,
        message: message,
      })
      .then((response) => {
        setEmail('');
        setMessage('');
        //TODO - alert success
      })
      .catch((error) => {
        console.log(error);
        //TODO - alert error
      });
  }

  return (
    <LoginBox>
      <Form action="https://formspree.io/f/xgebrngj" method="POST">
        <UserBox>
          <Input
            type="text"
            id="email-input"
            title="emailInput"
            name="email"
            required
            aria-label="Email"
            aria-required="true"
            value={email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <Label htmlFor="email-input" id="email-label">
            {t('contact.email')}
          </Label>
        </UserBox>
        <UserBox>
          <TextArea
            id="message-input"
            name="message"
            title="messageInput"
            rows="4"
            required
            aria-label="Message"
            aria-required="true"
            value={message}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <Label htmlFor="message-input" id="message-label">
            {t('contact.message')}
          </Label>
        </UserBox>
        <center>
          <Button type="button" onClick={handleSubmit}>
            {t('contact.send')}
            <Span aria-hidden="true"></Span>
          </Button>
        </center>
      </Form>
    </LoginBox>
  );
}

export default MailForm;
