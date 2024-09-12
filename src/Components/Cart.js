import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';


// Initialize Stripe outside of the component's render to avoid recreating it on every render
const stripePromise = loadStripe('pk_test_51PtRFfLTyVfjezm9zgImOJUDvPW84OCL7Ii2ATfTo72hsX1DhEi75KBZSppZ8kdQH6Oh238Fxs8AL22nljo2lnnL00WdbNsFvY');

export function Cart({ cart, handleDeleteFromCart }) {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            // Prepare the cart items for the request
            const items = cart.map(item => ({
                name: item.title,
                price: parseFloat(item.price.replace(/Rs.\s*/, '').replace(/,/g, '')), // Ensure price is a number
                quantity: 1, // Adjust quantity if needed
            }));

            // Make a request to your backend to create a Stripe Checkout session
            const response = await fetch('http://localhost:8001/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items }),
            });

            if (!response.ok) throw new Error('Failed to create checkout session');

            const { id: sessionId } = await response.json();

            // Get Stripe instance from the promise
            const stripe = await stripePromise;

            if (!stripe) {
                throw new Error('Stripe failed to initialize.');
            }

            const { error } = await stripe.redirectToCheckout({ sessionId });

            if (error) {
                console.error('Stripe Checkout error:', error);
                alert('An error occurred during checkout. Please try again.');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('An error occurred during checkout. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <span>{item.title} - {item.price}</span>
                                <Button 
                                    className="delete-btn" 
                                    onClick={() => handleDeleteFromCart(index)}
                                >
                                    Delete
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <Button 
                        className="pay-now-btn" 
                        onClick={handleCheckout}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </Button>
                </>
            )}
        </Container>
    );
}
