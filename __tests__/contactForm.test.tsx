import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';

import ContactForm from '@/components/forms/ContactForm';

describe('Contact Form', () => {
  describe('with valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const onSubmitMock = jest.fn();
      const { getByPlaceholderText, getByRole } = render(
        <ContactForm onSubmit={onSubmitMock} />
      );

      await act(async () => {
        fireEvent.change(getByPlaceholderText(/your name/i), {
          target: { value: 'john' },
        });
        fireEvent.change(getByPlaceholderText(/your email/i), {
          target: { value: 'john@email.com' },
        });
        fireEvent.change(getByPlaceholderText(/your message/i), {
          target: { value: 'Hello World!' },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });

      expect(onSubmitMock).toHaveBeenCalled();
    });
  });

  describe('Check form with invalid input', () => {
    beforeEach(() => {
      const onSubmitMock = jest.fn();
      render(<ContactForm onSubmit={onSubmitMock} />);
    });

    it('renders the name validation error', async () => {
      await act(async () => {
        const nameInput = screen.getByPlaceholderText(/your name/i);
        fireEvent.change(nameInput, { target: { value: '' } });
        fireEvent.submit(await screen.findByRole('button'));

        const error = await screen.findByText(/name is required/i);

        expect(error).toBeInTheDocument();
      });
    });

    it('renders the email validation error', async () => {
      await act(async () => {
        const emailInput = screen.getByPlaceholderText(/your email/i);
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.submit(await screen.findByRole('button'));

        const error = await screen.findByText(/email is required/i);

        expect(error).toBeInTheDocument();
      });
    });

    it('renders the message validation error', async () => {
      await act(async () => {
        const messageInput = screen.getByPlaceholderText(/your message/i);
        fireEvent.change(messageInput, { target: { value: '' } });
        fireEvent.submit(await screen.findByRole('button'));

        const error = await screen.findByText(
          /your message should have at least 10 characters/i
        );

        expect(error).toBeInTheDocument();
      });
    });
  });
});
