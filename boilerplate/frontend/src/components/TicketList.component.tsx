import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Ticket {
  _id: string;
  title: string;
  status: string;
}

const TicketList: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const result = await axios.get('/api/tickets');
        setTickets(result.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Kanban Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>{ticket.title} - {ticket.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
