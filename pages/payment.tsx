import { PesaPalPayment } from '../components/PesaPalPayment';

import { useState } from 'react';

export default function PaymentPage() {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div className="min-h-screen bg-[#f0f8ff]">
      {/* Navigation Tabs */}
      <div className="bg-[#00bfff] text-white">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-center py-3 px-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1 mx-auto">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-sm">Personal Information</span>
          </div>
          <div className="text-center py-3 px-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1 mx-auto">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-sm">Programme Details</span>
          </div>
          <div className="text-center py-3 px-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1 mx-auto">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-sm">Academic Background</span>
          </div>
          <div className="text-center py-3 px-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1 mx-auto">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L4 9V21H20V9L12 3ZM10 19H6V11H10V19ZM14 19H12V11H14V19ZM18 19H16V11H18V19ZM12 7L16 9.78L12 12L8 9.78L12 7Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-sm">Family Information</span>
          </div>
          <div className="text-center py-3 px-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1 mx-auto">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.52 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-sm">Application Fee</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Application Fee Payment
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-center text-gray-600">
            An mandatory application fee of KES 2,050 is required to process your application.
          </p>
          <p className="text-center text-gray-600">
            Once your application is submitted successfully, you will receive an email from us indicating your application ID.
          </p>
        </div>

        {/* M-Pesa Instructions Modal */}
        {showInstructions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
              <button 
                onClick={() => setShowInstructions(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">M-Pesa Payment Instructions</h3>
                <p className="text-gray-600 text-sm">Follow these steps to complete your payment</p>
              </div>
              <ol className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Go to M-Pesa menu on your phone</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>Select Lipa na M-Pesa</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Select Pay Bill</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <span>Enter Business Number:</span>
                    <span className="block font-mono bg-gray-50 px-3 py-1 rounded mt-1">220222</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <span>Enter Account Number:</span>
                    <span className="block font-mono bg-gray-50 px-3 py-1 rounded mt-1">69162766</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">6</span>
                  <div>
                    <span>Enter Amount:</span>
                    <span className="block font-mono bg-gray-50 px-3 py-1 rounded mt-1">2,050</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">7</span>
                  <span>Enter your M-Pesa PIN and confirm payment</span>
                </li>
              </ol>
              <button
                onClick={() => setShowInstructions(false)}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {/* M-Pesa Payment Option */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <img 
                  src="https://siliconafrica.org/wp-content/uploads/2024/02/MPESA.webp" 
                  alt="M-Pesa Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pay with M-Pesa</h3>
              <p className="text-sm text-gray-500 text-center max-w-xs">
                Fast and secure mobile payment through M-Pesa
              </p>
            </div>

            <PesaPalPayment
              amount={2050}
              description="Application Fee Payment"
            />

            <button
              onClick={() => setShowInstructions(true)}
              className="w-full mt-4 bg-white border-2 border-green-600 text-green-600 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
              </svg>
              <span>Pay Using Paybill</span>
            </button>
          </div>

          {/* Bank Transfer Option */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                  <path fill="currentColor" d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bank Transfer</h3>
              <p className="text-sm text-gray-500 text-center max-w-xs">
                Pay directly through bank transfer
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-600 mb-1">Bank Details</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Bank: KCB Bank</p>
                  <p>Account Name: Application Fee</p>
                  <p>Account Number: 05806278246350</p>
                  <p>Branch: Main Branch</p>
                </div>
              </div>

              <button
                className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                onClick={() => alert('Please make the transfer using the bank details provided above.')}
              >
                I have made the transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
