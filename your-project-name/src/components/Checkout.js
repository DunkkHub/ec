import React, { useState, useEffect } from 'react';
import { addAddress, getAddresses } from '../firebase/addressManagement';

const Checkout = ({ userId }) => {
  const [address, setAddress] = useState({});
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const userAddresses = await getAddresses(userId);
        setAddresses(userAddresses);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, [userId]);

  const handleChange = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addAddress(userId, address);
      console.log('Address saved successfully!');
      // Optionally, update the addresses list after saving
      const updatedAddresses = await getAddresses(userId);
      setAddresses(updatedAddresses);
      setAddress({});
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>

      <h3>Add New Address</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Street:
          <input type="text" name="street" onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" onChange={handleChange} />
        </label>
        {/* Add more fields as necessary */}
        <button type="submit">Save Address</button>
      </form>

      <h3>Saved Addresses</h3>
      <ul>
        {addresses.map((addr) => (
          <li key={addr.id}>
            {addr.street}, {addr.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;