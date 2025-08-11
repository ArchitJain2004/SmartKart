import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  isOnSale?: boolean;
  isFeatured?: boolean;
}

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="product-card">
            <div className="aspect-square loading-shimmer rounded-t-xl"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 loading-shimmer rounded"></div>
              <div className="h-3 loading-shimmer rounded w-3/4"></div>
              <div className="h-4 loading-shimmer rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          image={product.image}
          rating={product.rating}
          reviews={product.reviews}
          isOnSale={product.isOnSale}
          isFeatured={product.isFeatured}
        />
      ))}
    </div>
  );
};

export default ProductGrid;