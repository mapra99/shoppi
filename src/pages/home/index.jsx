import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/layout'
import Card from '../../components/card'
import ProductDetail from '../../components/product-detail'
import { ShoppingCartContext } from '../../context'

function Home() {
  const context = useContext(ShoppingCartContext)
  const { category } = useParams()

  const handleChange = (event) => {
    context.setSearchTitleTerm(event.target.value)
  }

  useEffect(() => {
    context.setSearchCategoryTerm(category)
    context.setSearchTitleTerm(null)
  }, [category])

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-3xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 focus:outline-none"
        onChange={handleChange}
        value={context.searchTitleTerm ? context.searchTitleTerm : ''}
      />

      { context.filteredItems?.length === 0 ? (
        <div className="flex w-80 items-center relative justify-center mt-10 text-center">
          Sorry, we don't have products that match the criteria. Try another one!
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-10">
          { context.filteredItems?.map(item => (
            <Card key={item.id} item={item} />
          )) }
        </div>
      )}
      <ProductDetail />
    </Layout>
  )
}

export default Home
