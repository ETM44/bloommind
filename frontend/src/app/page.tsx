"use client";

import { useState, FormEvent } from 'react';
import axios from 'axios';

interface Hello {
  id: number;
  hello: string;
}

export default function Home() {
  const [hello, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Hello[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/hello', { hello });
    setMessages([...messages, response.data]);
    setMessage('');
  };

  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:4000/hello');
    setMessages(response.data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type="text"
          value={hello}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a message"
          style={{ marginRight: '5px' }} // Ajout d'une marge à droite pour séparer l'input du bouton
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Send</button>
      </form>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchMessages}>Load Messages</button>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.hello}</li>
        ))}
      </ul>
    </div>
  );
}