import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { useMemo } from "react"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    // const subtotal = order.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const subtotalAmount = useMemo(() =>
        order.reduce((acc, item) => acc + item.price * item.quantity, 0), [order])  

    const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

  return (
    <>
    <div className="space-y-3">
      <h2 className="font-black text-2xl">Totales y Propinas:</h2>
      <p> Subtotal a pagar:{' '} 
        <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
      </p>
      <p> Propina:{' '} 
        <span className="font-bold">{formatCurrency(subtotalAmount * tip)}</span>
      </p>
      <p> Total a pagar:{' '} 
        <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </p>
      <p className="text-2xl"></p>
    </div>
    <button
      className="bg-teal-400 w-full p-3 text-white uppercase font-black mt-10 hover:bg-teal-500 disabled:bg-gray-300"
      disabled={totalAmount === 0}
      onClick={placeOrder}
    >
      Guardar Orden
    </button>
    </>
  )
}
