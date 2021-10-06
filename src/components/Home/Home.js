import React from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'
import Fruits from '../Fruits/Fruits'
import Cards from '../Cards/Cards'
import Discount from '../Discount/Discount'
import Client from '../Client/Client'
import Form from '../Form/Form'
import Contacts from '../Contacts/Contacts'
import Up from '../UpArrow/Up'
import Shipping from '../Shipping/Shipping'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Fruits />
            <Cards />
            <Discount />
            <Client />
            <Form />
            <Shipping />
            <Contacts />
            <Up />
        </div>
    )
}
