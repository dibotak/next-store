"use client";
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch } from "@/lib/hooks";
import { order } from "@/lib/features/cart/cartSlice";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string
  address: string
  city: string
  zip: string
}

export default function ShippingForm() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(order(data))
    alert('order success')
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="border border-gray-500 rounded-md block"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          className="border border-gray-500 rounded-md block"
          {...register("address", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          className="border border-gray-500 rounded-md block"
          {...register("city", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="zip">Zipcode</label>
        <input
          className="border border-gray-500 rounded-md block"
          {...register("zip", { required: true })}
        />
      </div>

      <input type="submit" value="Order" className="p-2 bg-green-300 cursor-pointer"/>
    </form>
  )
}
