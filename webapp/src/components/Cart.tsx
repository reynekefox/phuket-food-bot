import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useTelegram } from '../hooks/useTelegram';
import { submitOrder } from '../api/dishes';
import { getDishName, t, getLanguage, Language } from '../i18n';

const Cart = () => {
    const navigate = useNavigate();
    const { user, close } = useTelegram();
    const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
    const [lang, setLang] = useState<Language>(getLanguage());

    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const totalPrice = getTotalPrice();

    useEffect(() => {
        const handleLangChange = () => setLang(getLanguage());
        window.addEventListener('languageChange', handleLangChange);
        return () => window.removeEventListener('languageChange', handleLangChange);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!phone || !address) {
            setError(lang === 'ru' ? 'Заполните телефон и адрес' : 'Please fill in phone and address');
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
            setError(lang === 'ru'
                ? 'Ошибка при оформлении заказа. Попробуйте снова.'
                : 'Error placing order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="success-overlay">
                <div className="success-modal">
                    <span>✅</span>
                    <h2>{lang === 'ru' ? 'Заказ оформлен!' : 'Order placed!'}</h2>
                    <p>{lang === 'ru'
                        ? 'Ожидайте подтверждения. Курьер свяжется с вами.'
                        : 'Waiting for confirmation. Courier will contact you.'}</p>
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
                <h1>{t('cart', lang)}</h1>
            </div>

            <div className="cart">
                {isEmpty ? (
                    <div className="empty-state">
                        <span>🛒</span>
                        <p>{t('emptyCart', lang)}</p>
                        <p>{lang === 'ru' ? 'Добавьте блюда из меню' : 'Add dishes from menu'}</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {items.map((item) => (
                                <div key={item.dish.id} className="cart-item">
                                    <img src={item.dish.photo} alt={getDishName(item.dish.id, lang)} />
                                    <div className="cart-item-info">
                                        <h4>{getDishName(item.dish.id, lang)}</h4>
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
                            <span className="total-label">{t('total', lang)}:</span>
                            <span className="total-amount">{totalPrice} ฿</span>
                        </div>

                        <form className="order-form" onSubmit={handleSubmit}>
                            <h3>{lang === 'ru' ? 'Данные для доставки' : 'Delivery details'}</h3>

                            {error && (
                                <div style={{ color: '#dc3545', marginBottom: '16px', fontSize: '14px' }}>
                                    {error}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="phone">{t('phone', lang)} *</label>
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
                                <label htmlFor="address">{t('address', lang)} *</label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder={lang === 'ru' ? 'Улица, дом, квартира' : 'Street, building, apartment'}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="comment">{t('comment', lang)}</label>
                                <textarea
                                    id="comment"
                                    placeholder={lang === 'ru' ? 'Пожелания к заказу (необязательно)' : 'Order notes (optional)'}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading
                                    ? (lang === 'ru' ? 'Оформляем...' : 'Processing...')
                                    : (lang === 'ru' ? `Заказать за ${totalPrice} ฿` : `Order for ${totalPrice} ฿`)}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
