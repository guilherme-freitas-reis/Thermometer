import React from "react";
import { useToasts } from "react-toast-notifications";
import api from "../../../services/api";

import { Container, Title, Input, Button } from "./styles";

function Form() {
  const { addToast } = useToasts();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    saveNewsletter(form);
  };

  const saveNewsletter = async (form) => {
    const response = await api.post("/email/create", {
      email: form["email"].value,
    });

    if (response.status === 200) {
      const { data } = response;

      if (data.success) {
        addToast(data.message, {
          appearance: "success",
        });
      } else {
        addToast(data.message, {
          appearance: "warning",
        });
      }
    } else {
    }
  };

  return (
    <Container onSubmit={handleSubmit} method="POST">
      <Title>receba alertas de temperatura diretamente no seu e-mail</Title>
      <Input
        name="email"
        type="email"
        placeholder="Seu melhor e-mail"
        required
      />
      <Button type="submit">receber notificações</Button>
    </Container>
  );
}

export default Form;
