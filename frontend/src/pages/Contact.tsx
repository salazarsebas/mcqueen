import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object to match PHP $_POST format
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('message', formData.message);

      const response = await fetch('http://localhost/backend/contact.php', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Mensaje enviado con éxito!');
        setFormData({ name: '', message: '' });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error enviando mensaje:', error);
      alert('Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contactanos</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Su mensaje"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border rounded"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          <Send className="ml-2 inline-block w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
