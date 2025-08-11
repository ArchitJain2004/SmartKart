import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/product/ProductGrid';
import { productsAPI } from '@/lib/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [category, setCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getAll({
          search: searchTerm,
          category: category !== 'all' ? category : undefined,
          sort: sortBy,
        });
        setProducts(response.data.products || []);
      } catch (error) {
        // Mock data for demo
        setProducts([
          {
            id: '1',
            name: 'Premium Wireless Headphones',
            price: 199.99,
            originalPrice: 249.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            rating: 4.5,
            reviews: 128,
            isOnSale: true,
            isFeatured: true,
          },
          {
            id: '2',
            name: 'Smart Fitness Watch',
            price: 299.99,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
            rating: 4.8,
            reviews: 256,
            isFeatured: true,
          },
          {
            id: '3',
            name: 'Laptop Stand Adjustable',
            price: 79.99,
            originalPrice: 99.99,
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
            rating: 4.3,
            reviews: 89,
            isOnSale: true,
          },
          {
            id: '4',
            name: 'Wireless Charging Pad',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
            rating: 4.6,
            reviews: 167,
          },
          {
            id: '5',
            name: 'Bluetooth Speaker Portable',
            price: 129.99,
            originalPrice: 159.99,
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
            rating: 4.4,
            reviews: 203,
            isOnSale: true,
          },
          {
            id: '6',
            name: 'Gaming Mechanical Keyboard',
            price: 189.99,
            image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=400&h=400&fit=crop',
            rating: 4.7,
            reviews: 95,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm, sortBy, category]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of quality products
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-card rounded-lg border border-border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Search Products
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Category
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="sports">Sports & Outdoors</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Sort By
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                View
              </label>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            {loading ? 'Loading...' : `Showing ${products.length} products`}
          </p>
        </div>

        {/* Products Grid */}
        <ProductGrid products={products} loading={loading} />

        {/* Load More */}
        {!loading && products.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;