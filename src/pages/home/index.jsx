import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Card from '../../components/card'
import ProductDetail from '../../components/product-detail'

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      <h1>Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        { items?.map(item => (
          <Card key={item.id} item={item} />
        )) }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
