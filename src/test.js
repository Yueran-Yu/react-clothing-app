import firebase from 'firebase/app';
import 'firebase/firestore';
const firestore = firebase.firestore();

// two main methods of how to get collections and documents.
firestore.collection('users').doc('aapJYjqLx0Ie5f2uIghg').collection('cartItems').doc('3OpDLKZplTCpF1DZSTta');
firestore.doc('/users/aapJYjqLx0Ie5f2uIghg/cartItems/3OpDLKZplTCpF1DZSTta')
firestore.collection('/users/aapJYjqLx0Ie5f2uIghg/cartItems')