import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AccountSidebar } from '../components/account/AccountSidebar';
import { PersonalInfoSection } from '../components/account/PersonalInfoSection';
import { OrderHistorySection } from '../components/account/OrderHistorySection';
import { AddressesSection } from '../components/account/AddressesSection';
import { SecuritySection } from '../components/account/SecuritySection';
import { PreferencesSection } from '../components/account/PreferencesSection';
import { SubscriptionManager } from '../components/account/SubscriptionManager';
import { PetsSection } from '../components/account/PetsSection';
export function AccountPage() {
  return <div className="bg-[#FAF7F2] min-h-screen pt-24 sm:pt-32 pb-20 font-sans">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C3333] mb-4 tracking-tight font-serif">
            Mi Cuenta
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Gestiona tus pedidos, direcciones y preferencias personales desde tu
            panel de control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <AccountSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 sm:p-12 min-h-[600px] relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C9885]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="relative z-10">
                <Routes>
                  <Route path="/" element={<PersonalInfoSection />} />
                  <Route path="/orders" element={<OrderHistorySection />} />
                  <Route path="/subscriptions" element={<SubscriptionManager />} />
                  <Route path="/pets" element={<PetsSection />} />
                  <Route path="/addresses" element={<AddressesSection />} />
                  <Route path="/security" element={<SecuritySection />} />
                  <Route path="/preferences" element={<PreferencesSection />} />
                  <Route path="*" element={<Navigate to="/cuenta" replace />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}