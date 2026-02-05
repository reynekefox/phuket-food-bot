import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useTelegram } from '../hooks/useTelegram';
import { submitOrder } from '../api/dishes';

const Cart = () => {
    const navigate = useNavigate();
    const { user, close } = useTelegram();
    const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();

    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const totalPrice = getTotalPrice();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!phone || !address) {
            setError('Заполните телефон и адрес');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await submitOrder({
                items: items.map((item) => ({
                    dishId: item.dish.id,
                    quantity: item.quantity,
                })),
                customerPhone: phone,
                customerAddress: address,
                comment: comment || undefined,
                telegramUserId: user?.id,
                telegramUsername: user?.username,
            });

            clearCart();
            setSuccess(true);

            // Close webapp after 3 seconds
            setTimeout(() => {
                close();
            }, 3000);
        } catch (err) {
            setError('Ошибка при оформлении заказа. Попробуйте снова.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="success-overlay">
                <div className="success-modal">
                    <span>✅</span>
                    <h2>Заказ оформлен!</h2>
                    <p>Ожидайте подтверждения. Курьер свяжется с вами.</p>
                </div>
            </div>
        );
    }

    const isEmpty = items.length === 0;

    return (
        <>
            <div className="header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    ←
                </button>
                <h1>Корзина</h1>
            </div>

            <div className="cart">
                {isEmpty ? (
                    <div className="empty-state">
                        <span>🛒</span>
                        <p>Корзина пуста</p>
                        <p>Добавьте блюда из меню</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {items.map((item) => (
                                <div key={item.dish.id} className="cart-item">
                                    <img src={item.dish.photo} alt={item.dish.name} />
                                    <div className="cart-item-info">
                                        <h4>{item.dish.name}</h4>
                                        <span className="cart-item-price">{item.dish.price * item.quantity} ฿</span>
                                    </div>
                                    <div className="quantity-controls">
                                        <button
                                            className="qty-btn"
                                            onClick={() => {
                                                if (item.quantity === 1) {
                                                    removeItem(item.dish.id);
                                                } else {
                                                    updateQuantity(item.dish.id, item.quantity - 1);
                                                }
                                            }}
                                        >
                                            −
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button
                                            className="qty-btn"
                                            onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="total-section">
                            <span className="total-label">Итого:</span>
                            <span className="total-amount">{totalPrice} ฿</span>
                        </div>

                        <form className="order-form" onSubmit={handleSubmit}>
                            <h3>Данные для доставки</h3>

                            {error && (
                                <div style={{ color: '#dc3545', marginBottom: '16px', fontSize: '14px' }}>
                                    {error}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="phone">Телефон *</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="+66 XX XXX XXXX"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Адрес доставки *</label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="Улица, дом, квартира"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="comment">Комментарий</label>
                                <textarea
                                    id="comment"
                                    placeholder="Пожелания к заказу (необязательно)"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? 'Оформляем...' : `Заказать за ${totalPrice} ฿`}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
