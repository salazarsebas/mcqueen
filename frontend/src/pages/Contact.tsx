import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Toast } from '../components/Toast';

const [notification, setNotification] = useState({ show: false, message: '', type: '' });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject); // Add subject field
      formDataToSend.append('message', formData.message);

      const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL || 'http://localhost';
      const response = await fetch(`${BACKEND_URL}/backend/contact.php`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: formDataToSend,
      });

      const validateForm = (data: typeof formData) => {
        const errors: Partial<typeof formData> = {};
        
        if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          errors.email = 'Invalid email format';
        }
        
        if (data.phone && !data.phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
          errors.phone = 'Invalid phone format (123-456-7890)';
        }
        
        return errors;
      };

      const result = await response.json();
      if (result.status === 'success') {
        setNotification({ show: true, message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setNotification({ show: true, message: `Error: ${result.message}`, type: 'error' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Subject</option>
          <option value="sales">Sales Inquiry</option>
          <option value="service">Service Request</option>
          <option value="parts">Parts Inquiry</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
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
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send className="ml-2 inline-block w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
