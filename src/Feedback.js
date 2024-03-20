import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feedback.css'
const UpdatesFeedbackPage = () => {
    const [updates, setUpdates] = useState([]);
    const [feedbackFormData, setFeedbackFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    useEffect(() => {
        // Fetch updates from the server
        axios.get('/api/updates')
            .then(response => {
                setUpdates(response.data);
            })
            .catch(error => {
                console.error('Error fetching updates:', error);
            });
    }, []);

    const handleFeedbackFormSubmit = (event) => {
        event.preventDefault();
        // Send feedback form data to the server
        axios.post('/api/feedback', feedbackFormData)
            .then(response => {
                console.log('Feedback submitted successfully:', response.data);
                // Clear the form
                setFeedbackFormData({
                    name: '',
                    email: '',
                    feedback: ''
                });
            })
            .catch(error => {
                console.error('Error submitting feedback:', error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFeedbackFormData({
            ...feedbackFormData,
            [name]: value
        });
    };

    return (
        <div>
            <h2 id= "h2">Updates and Feedback</h2>
            <div>
                <h3 className='h3'>Latest Updates</h3>
                <ul>
                    {updates.map((update, index) => (
                        <li key={index}>{update.title}: {update.description}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Feedback Form</h3>
                <form onSubmit={handleFeedbackFormSubmit}>
                    <div>
                        <label className='name'>Name:</label>
                        <input type="text" name="name" value={feedbackFormData.name} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label id = 'email'>Email:</label>
                        <input type="email" name="email" value={feedbackFormData.email} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label id = 'feedback'>Feedback:</label>
                        <textarea name="feedback" value={feedbackFormData.feedback} onChange={handleInputChange} />
                    </div>
                    <button type="submit">Submit Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatesFeedbackPage;
