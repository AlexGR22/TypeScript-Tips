

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip,tip}: TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">
            Propina:
        </h3>
        <form >
            {tipOptions.map((option) => (
                <div key={option.id} className="flex gap-2 items-center">
                    <label htmlFor={option.id}>{option.label}</label>
                    <input 
                        type="radio" 
                        id={option.id} 
                        name="tip" 
                        value={option.value} 
                        onChange={e => setTip(+e.target.value)} //solución del curso
                        // onChange={(e) => setTip(e.target.valueAsNumber)} // otra solución pero no sirve para radio, devuelve NaN ,pero es util para strings
                        // onChange={() => setTip(option.value)}  otra solución aparte
                        checked={option.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
