// Import the functions you need from the SDKs you need
import { doc, setDoc, getDoc, collection, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from './firebaseConfig'; // Assuming you have initialized Firebase Firestore in firebaseConfig.js

// Function to add a new address
export const addAddress = async (userId, addressData) => {
    try {
        const addressRef = doc(collection(db, 'users', userId, 'addresses'));
        await setDoc(addressRef, addressData);
        console.log('Address added successfully!');
        return addressRef.id;
    } catch (error) {
        console.error('Error adding address: ', error);
        throw error;
    }
};

// Function to get all addresses for a user
export const getAddresses = async (userId) => {
    try {
        const addressesRef = collection(db, 'users', userId, 'addresses');
        const querySnapshot = await getDocs(addressesRef);
        const addresses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return addresses;
    } catch (error) {
        console.error('Error getting addresses: ', error);
        throw error;
    }
};

// Function to get a specific address
export const getAddress = async (userId, addressId) => {
    try {
        const addressRef = doc(db, 'users', userId, 'addresses', addressId);
        const addressSnap = await getDoc(addressRef);
        if (addressSnap.exists()) {
            return { id: addressSnap.id, ...addressSnap.data() };
        } else {
            return null; // Address not found
        }
    } catch (error) {
        console.error('Error getting address: ', error);
        throw error;
    }
};

// Function to update an existing address
export const updateAddress = async (userId, addressId, updatedData) => {
    try {
        const addressRef = doc(db, 'users', userId, 'addresses', addressId);
        await updateDoc(addressRef, updatedData);
        console.log('Address updated successfully!');
    } catch (error) {
        console.error('Error updating address: ', error);
        throw error;
    }
};

// Function to delete an address
export const deleteAddress = async (userId, addressId) => {
    try {
        const addressRef = doc(db, 'users', userId, 'addresses', addressId);
        await deleteDoc(addressRef);
        console.log('Address deleted successfully!');
    } catch (error) {
        console.error('Error deleting address: ', error);
        throw error;
    }
};