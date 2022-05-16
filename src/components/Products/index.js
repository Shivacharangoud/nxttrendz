import AllProductsSection from '../AllProductsSection'

import Header from '../Header'

import PrimeDealsSections from '../PrimeDealsSection'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <PrimeDealsSections />
      <AllProductsSection />
    </div>
  </>
)

export default Products
