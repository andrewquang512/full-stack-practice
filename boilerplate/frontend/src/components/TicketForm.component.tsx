import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';


const TicketForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // Handle form submission with proper typing for the event
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/tickets', { title, description });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default TicketForm;
