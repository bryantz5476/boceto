import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder () {
    const [order, setOrder] = useState<OrderItem[]>([]) 
    const [tip, setTip] = useState(0)


    //FUNCION QUE PERMITE HACER MOVIMIENTOS SI EXISTE O NO UN ELEMENTO EN LA SECCION DE CONSUMO
    const addItem = (item : MenuItem) => {
        //find te retorna si es que se encontró el elemento, solo eso, n permite modificarlo por la inmutabilidad de react 
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            // ya sabes que existe, ahjora toca identidficar cual es el repetido. map permite identificar y acceder a los elementos
            const updatedOrder = order.map(orderItem => orderItem.id=== item.id ?
                //toma copia de lo que ya hay en la orden y le incrementa un uno en la cantidad.
                {...orderItem, quantity: orderItem.quantity + 1} :
                orderItem)    
            setOrder(updatedOrder)
        } else{
            const newItem ={...item, quantity:1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id : MenuItem ['id']) => {
        setOrder(order.filter (item => item.id !== id))
    }
    //clock button reinicia al dar click
    const placeOrder = () => {
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
    }
}