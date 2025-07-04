import React, { useState } from 'react';

function ContactForm() {
    const [status, setStatus] = useState('');

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
            setStatus('Mesaj trimis cu succes! Îți mulțumim.');
            form.reset();
        } else {
            setStatus('A apărut o eroare. Te rugăm să încerci din nou.');
        }
    };

    return (
        <div style={{padding:'10px',
            marginTop: '20px', alignItems: 'center'
            , color: '#fff', boxShadow: '0 0 10px rgba(255, 255, 255, .2)', border: '2px solid rgba(255, 255, 255, .2)', display: 'flex', flexDirection: 'column'
        }}
        >
            <h2 style={{ color: 'white' }}
                className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Contactează-ne
            </h2>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label style={{ padding: '8px' }} className="block text-gray-700 mb-1">Nume</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className='input-box'
                    />
                </div>

                <div>
                    <label style={{ padding: '10px' }} className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className='input-box'
                    />
                </div>

                <div>
                    <label style={{ padding: '10px' }} className="block text-gray-700 mb-1">Mesaj</label>
                    <textarea
                    placeholder='Introduceți abonamentul dorit'
                        name="message"
                        rows="5"
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="costumButton"
                >
                    Trimite mesajul
                </button>

                {status && (
                    <p className="text-center text-sm text-green-600 mt-2">{status}</p>
                )}
            </form>
        </div>
    );
}

export default ContactForm;
