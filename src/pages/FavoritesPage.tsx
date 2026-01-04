import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';
export function FavoritesPage() {
  const {
    wishlist
  } = useWishlist();
  return <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link to="/cuenta" className="mr-4 p-2 hover:bg-white rounded-full transition-colors lg:hidden">
              <ArrowLeft className="w-5 h-5 text-gray-500" />
            </Link>
            <div>
              <h1 className="flex items-center mb-1">
                <Heart className="w-8 h-8 text-emerald-600 mr-3 fill-emerald-600" />
                Mis Favoritos
              </h1>
              <p className="text-gray-600">
                {wishlist.length}{' '}
                {wishlist.length === 1 ? 'producto guardado' : 'productos guardados'}
              </p>
            </div>
          </div>
        </div>

        {wishlist.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map(product => <ProductCard key={product.id} product={product} />)}
          </div> : <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 border-dashed">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="mb-2">No tienes favoritos aún</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Guarda los productos que más te gusten para encontrarlos
              fácilmente más tarde.
            </p>
            <Link to="/productos">
              <Button size="lg">Explorar Productos</Button>
            </Link>
          </div>}
      </div>
    </main>;
}