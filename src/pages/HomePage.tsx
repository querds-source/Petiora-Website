import React, { Children, Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { EnhancedScrollReveal } from '../components/common/EnhancedScrollReveal';
// Core Components
import { HeroSection } from '../components/home/HeroSection';
import { TrustIndicators } from '../components/home/TrustIndicators';
import { ValueProposition } from '../components/home/ValueProposition';
import { HowItWorks } from '../components/home/HowItWorks';
import { ProductCategories } from '../components/home/ProductCategories';
import { IngredientsShowcase } from '../components/home/IngredientsShowcase';
import { QualityShowcase } from '../components/home/QualityShowcase';
import { ManufacturingProcess } from '../components/home/ManufacturingProcess';
import { ExpertTeam } from '../components/home/ExpertTeam';
import { ResourcesHub } from '../components/home/ResourcesHub';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ToysShowcase } from '../components/home/ToysShowcase';
const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
export function HomePage() {
  // Get featured food products (3 products)
  const featuredFoodProducts = products.filter(p => p.featured && (p.category === 'dog-food' || p.category === 'cat-food')).slice(0, 3);
  // Get featured toy products (3 products)
  const featuredToyProducts = products.filter(p => p.category === 'toys').slice(0, 3);
  // Combine for mixed showcase (6 products total - balanced)
  const featuredMixedProducts = [...featuredFoodProducts, ...featuredToyProducts];
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1]
  }} className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      {/* 1. Hero Section: Hook Emocional Dual */}
      <HeroSection />

      {/* 2. Trust Indicators: Credibilidad */}
      <TrustIndicators />

      {/* 3. Product Categories: The Two Pillars (Navigation) */}
      <ProductCategories />

      {/* 4. Value Proposition: Why Both Matter */}
      <ValueProposition />

      {/* 5. Toys Showcase: Deep Dive into Play (Moved Up) */}
      <ToysShowcase />

      {/* 6. Featured Products: Mixed Showcase */}
      <section className="py-24 lg:py-32 bg-[#FAF7F2] relative overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-white/50 to-transparent opacity-50 pointer-events-none" />

        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <EnhancedScrollReveal direction="up" delay={0.1}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-soft-sm">
                Lo Más Popular
              </span>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-4">
                Favoritos de nuestra comunidad
              </h2>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="up" delay={0.3}>
              <p className="text-lg text-charcoal-600 max-w-2xl mx-auto font-light leading-relaxed">
                Descubre los productos mejor valorados por dueños y expertos:
                nutrición que funciona y juguetes que enamoran.
              </p>
            </EnhancedScrollReveal>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-100px'
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredMixedProducts.map((product, index) => <ProductCard key={product.id} product={product} featured index={index} />)}
          </motion.div>

          <EnhancedScrollReveal direction="up" delay={0.4} className="text-center mt-16 w-full">
            <Link to="/productos">
              <Button variant="outline" size="lg" className="rounded-full px-10 py-5 text-base shadow-soft-sm hover:shadow-soft-md transition-all bg-white border-primary-200 text-primary-800 hover:bg-primary-50 hover:border-primary-300 font-bold">
                Ver Catálogo Completo
              </Button>
            </Link>
          </EnhancedScrollReveal>
        </div>
      </section>

      {/* 7. How It Works: Process */}
      <HowItWorks />

      {/* 8. Quality Showcase: Definitive Quality Section */}
      <QualityShowcase />

      {/* 9. Manufacturing Process: Definitive Process Section */}
      <ManufacturingProcess />

      {/* 10. Ingredients Showcase: Transparencia */}
      <IngredientsShowcase />

      {/* 11. Testimonials: Social Proof */}
      <TestimonialsSection />

      {/* 12. Expert Team: Autoridad */}
      <ExpertTeam />

      {/* 13. Resources: Educación */}
      <ResourcesHub />
    </motion.div>;
}