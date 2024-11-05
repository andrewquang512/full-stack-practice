
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const result = await axios.get('/api/tickets');
      setTickets(result.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Kanban Tickets</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>{ticket.title} - {ticket.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
