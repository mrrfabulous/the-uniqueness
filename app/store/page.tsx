'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingBag, Heart, Star, Filter, Search } from 'lucide-react'
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Foundation T-Shirt",
    price: 25,
    image: "/placeholder-mhrn6.png",
    category: "Apparel",
    description: "Comfortable cotton t-shirt with our foundation logo",
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Hope Tote Bag",
    price: 15,
    image: "/placeholder-zxzhk.png",
    category: "Accessories",
    description: "Eco-friendly canvas tote bag perfect for daily use",
    rating: 4.9,
    inStock: true
  },
  {
    id: 3,
    name: "Children's Activity Book",
    price: 12,
    image: "/placeholder-s9s3p.png",
    category: "Educational",
    description: "Educational activity book for children ages 5-10",
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: "Foundation Hoodie",
    price: 45,
    image: "/branded-hoodie.png",
    category: "Apparel",
    description: "Warm and comfortable hoodie with embroidered logo",
    rating: 4.8,
    inStock: true
  },
  {
    id: 5,
    name: "Inspirational Mug",
    price: 18,
    image: "/placeholder-90fq7.png",
    category: "Accessories",
    description: "Ceramic mug with inspirational quotes about hope",
    rating: 4.6,
    inStock: false
  },
  {
    id: 6,
    name: "Educational Poster Set",
    price: 20,
    image: "/children-educational-posters.png",
    category: "Educational",
    description: "Set of 5 educational posters for classrooms",
    rating: 4.9,
    inStock: true
  }
]

export default function StorePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['all', 'Apparel', 'Accessories', 'Educational']

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || product.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              Foundation Store
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shop for a Cause
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Every purchase supports our mission to help children in need. Shop our collection of merchandise and educational materials.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[150px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="secondary" className="bg-red-500 text-white">
                      Out of Stock
                    </Badge>
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <Badge className="bg-amber-600 text-white">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-amber-600">
                    ${product.price}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-amber-600 hover:bg-amber-700"
                    disabled={!product.inStock}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Impact Message */}
        <div className="mt-16 bg-amber-50 rounded-2xl p-8 text-center">
          <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Purchase Makes a Difference
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            100% of profits from our store go directly to supporting children in need. 
            Every item you purchase helps fund our education, healthcare, and housing programs.
          </p>
        </div>
      </div>
    </div>
  )
}
