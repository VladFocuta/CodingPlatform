import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const response = await fetch('https://formspree.io/f/xdkzvozp', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        if (response.ok) {
            navigate("/contact-succes");

        } else {
            setStatus('A apărut o eroare. Te rugăm să încerci din nou.');
        }
    };

    return (

        <form onSubmit={handleSubmit} className="contact-form">
            <h3>Contactează-ne</h3>
            <p>Te vom contacta în cel mult 24h</p>

            <div className="form-group">
                <label>Nume</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Numele tău"
                    required
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="email@exemplu.com"
                    required
                />
            </div>

            <div className="form-group">
                <label>Mesaj</label>
                <textarea
                    name="message"
                    placeholder="Spune-ne ce îți dorești să înveți..."
                    rows="4"
                    required
                />
            </div>

            <button type="submit" className="submit-btn">
                Trimite mesajul
            </button>

            {status && (
                <p className="text-center text-sm text-red-500 mt-2">
                    {status}
                </p>
            )}
        </form>

    );
}

export default ContactForm;
