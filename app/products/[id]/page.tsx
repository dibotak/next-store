import { ProductDetail } from '@/app/components/products/ProductDetail'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return (
    <>
      <h1>Products</h1>
      <ProductDetail productId={Number(id)} />
    </>
  )
}
