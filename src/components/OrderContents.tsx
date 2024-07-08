import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"
type OrderContentsProps = {
  order: OrderItem[],
  removeItem: (id : MenuItem['id']) => void
}
export default function  OrderContents ({ order, removeItem }: OrderContentsProps) {


  return (
    <div>
      <h2 className=' font-black text-4xl'>Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-t border-gray-200 py-3 last-of-type:border-b">
              <div>
                <p className="text-lg">{item.name} x {item.quantity}</p>
                <p className="font-black"> Cantidad {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
              </div>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-500" onClick={() => removeItem(item.id)}>×</button>
            </div>
          ))
        }

      </div>
    </div>
  )
}
