import { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { btn } from "../styles.global";
import { motion } from "framer-motion";

const FormContainer = styled(motion.form)`
  border: 1px solid var(--border-color);
  background-color: var(--background-secondary);
  padding: 3rem 2.4rem;
  max-width: 60rem;
  width: 100%;
  border-radius: 5px;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const FormLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.span {
    flex-grow: 1;
  }
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Error = styled.p`
  color: red;
  font-size: 1.5rem;
`;

const Label = styled.label`
  color: #fff;
  font-size: 1.6rem;
`;

const input = css`
  border: 0;
  background: #fff;
  border-radius: 4px;
`;

const TextInput = styled.input`
  ${input}
  padding: 1.5rem 2.4rem;
  font-size: 1.6rem;
`;

const TextArea = styled.textarea`
  padding: 1rem 2.4rem;
`;

const SubmitBtn = styled.input`
  ${btn}
  margin-top: 1rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1.6rem;
  text-align: center;
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.6rem;
  text-align: center;
  margin-top: 1rem;
`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mjkbgaaq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSubmitted(true); // Set submission status to true on successful submission
        setSubmitError("");
      } else {
        setSubmitError("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <FormContainer
        initial={{ y: 60, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormLayoutWrapper>
          <FormGroup>
            <ErrorWrapper>
              <Label>First Name</Label>
              {errors.name && <Error>{errors.name.message}</Error>}
            </ErrorWrapper>
            <TextInput
              type="text"
              {...register("name", { required: "First name is required" })}
              placeholder="e.g. Jimmy Conway"
            />
          </FormGroup>

          <FormGroup>
            <ErrorWrapper>
              <Label>Email</Label>
              {errors.email && <Error>{errors.email.message}</Error>}
            </ErrorWrapper>
            <TextInput
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="e.g. goodfellas@gmail.com"
            />
          </FormGroup>

          <FormGroup className="span">
            <ErrorWrapper>
              <Label>Message</Label>
              {errors.message && <Error>{errors.message.message}</Error>}
            </ErrorWrapper>
            <TextArea
              {...register("message", { required: "Message is required" })}
              placeholder="What would you like to say?"
              rows={10}
            />
          </FormGroup>
          {!isSubmitted ? (
            <SubmitBtn
              disabled={isSubmitting}
              className="primaryBtn"
              type="submit"
            />
          ) : (
            <SuccessMessage>Thank you, submission successful!</SuccessMessage>
          )}
        </FormLayoutWrapper>
      </FormContainer>
      {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
    </>
  );
};

export default ContactForm;
