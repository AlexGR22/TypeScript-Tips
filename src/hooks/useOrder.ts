import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"
export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)


    const addItem = (item: MenuItem) => {
        // const itemExiste = order.find(orderItem => orderItem.id === item.id)
        // if(itemExiste){
        //     itemExiste.quantity = itemExiste.quantity + 1
        //     setOrder([...order])
        // } else {
        //     setOrder([...order, {...item, quantity: 1}])
        // }

        const itemExiste = order.find(orderItem => orderItem.id === item.id)

        if (itemExiste) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(updateOrder)
        } else {
            const newItem: OrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        // Esta opción solo eliminará el item completamente sin importar la cantidad
        // setOrder(order.filter(item => item.id !== id)) 

        // Esta opción solo eliminará 1 cantidad del item
        const itemExiste = order.find(orderItem => orderItem.id === id)
        if (itemExiste) {
            if (itemExiste.quantity > 1) {
                const updateOrder = order.map(orderItem => orderItem.id === id ? { ...orderItem, quantity: orderItem.quantity - 1 } : orderItem)
                setOrder(updateOrder)
            } else {
                const updateOrder = order.filter(orderItem => orderItem.id !== id)
                setOrder(updateOrder)
            }
        }
    }

    const placeOrder = () => {
        console.log("Placing order")
        setOrder([])
        setTip(0)
    }


    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
        // order: {
        //     items: [],
        //     total: 0
        // }
    }
}