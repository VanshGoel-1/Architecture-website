import { useState } from 'react';
import styles from './Contact.module.css';

// ----------------------------------------------------------------------
// ⚠️ CONFIGURATION REQUIRED:
// 1. Follow the instructions in 'google_script_setup.md' to create your backend.
// 2. Paste your Google Web App URL below.
// ----------------------------------------------------------------------
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzvIqaMMYw2kgJZuJXaSwvzlZbNiQWbL6wt2h8K9oE4GhtrZmp49CCRzdxiwQ_GfRi2fQ/exec";

/**
 * Contact Component
 * 
 * Handles user inquiries via a serverless Google Apps Script backend.
 * 
 * Logic Flow:
 * 1. **Validation**: Checks inputs before sending (`validateForm`).
 * 2. **Submission**: Sends a POST request to `GOOGLE_SCRIPT_URL`.
 * 3. **CORS Handling**: The fetch request uses `no-cors` or standard mode depending on the script setup.
 *    - Current implementation expects a JSON response.
 * 
 * Security:
 * - Includes a honeypot field (`_honey`) to trap bots.
 */
export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        // Clear error when user types
        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus('submitting');

        // ---------------------------------------------------------
        // � API INTEGRATION: FormSubmit.co
        // ---------------------------------------------------------

        try {

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8", // content-type text/plain avoids CORS preflight in some cases for simple requests, but application/json is standard. 
                },
                // Google Apps Script doPost(e) parses JSON.
                // We use 'no-cors' mode often for GAS, but if the script returns correctly, standard CORS works.
                // The provided guide uses standard JSON.
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (!result.success) throw new Error(result.error || 'Failed to send');

            if (!response.ok) throw new Error('Failed to send message');

            // ---------------------------------------------------------

            setStatus('success');
            setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });

        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                {/* Left Column: Text Info */}
                <div className={styles.infoCol}>
                    <h2 className={styles.heading}>
                        Building Your Vision, <br />
                        Brick by Brick.
                    </h2>
                    <p className={styles.subtext}>
                        Have a project in mind or need expert guidance? We’d love to hear
                        from you. Reach out to us for inquiries, collaborations, or
                        consultations.
                    </p>

                    <div className={styles.details}>
                        <p className={styles.companyName}>Elysian Environments</p>
                        <p>104/3 Queensland Street</p>
                        <p>Newtown NSW 2042</p>
                        <div className={styles.contactRow}>
                            <span>+61 9761 9934</span>
                            <span className={styles.separator}>❖</span>
                            <a href="mailto:info@elysian.com">info@elysian.com</a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className={styles.formCol}>
                    {status === 'success' ? (
                        <div className={styles.successMessage}>
                            <h3 className={styles.successTitle}>Message Received</h3>
                            <p>Thanks for reaching out to Elysian Environments.</p>
                            <p>Our team will review your message and contact you within 24–48 hours.</p>
                            <button onClick={() => setStatus('idle')} className={styles.resetBtn}>
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            {/* 🛡️ Spam Trap (Honeypot) - Should be left empty by humans */}
                            <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Jane"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={errors.firstName ? styles.inputError : ''}
                                    />
                                    {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Smith"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={errors.lastName ? styles.inputError : ''}
                                    />
                                    {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="(123) 435-9855"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="jane@framer.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? styles.inputError : ''}
                                    />
                                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Write your message here"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? styles.inputError : ''}
                                ></textarea>
                                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
