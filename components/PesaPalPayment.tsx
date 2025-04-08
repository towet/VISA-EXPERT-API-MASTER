import React from 'react';

interface PaymentProps {
  amount: number;
  description: string;
  customerEmail?: string;
  customerPhone?: string;
  customerName?: string;
}

export const PesaPalPayment: React.FC<PaymentProps> = ({
  amount,
  description,
  customerEmail = 'customer@example.com',
  customerPhone = '0700000000',
  customerName = 'John Doe',
}) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get token
      console.log('Getting token...');
      const tokenResponse = await fetch('/api/get-token');
      
      if (!tokenResponse.ok) {
        const errorData = await tokenResponse.text();
        console.error('Token response:', errorData);
        throw new Error(`Failed to get token: ${errorData}`);
      }

      const tokenData = await tokenResponse.json();
      console.log('Token response:', tokenData);
      
      if (!tokenData.token) {
        throw new Error(`No token in response: ${JSON.stringify(tokenData)}`);
      }

      // Get the callback URL
      const callbackUrl = `${window.location.origin}/api/ipn`;
      console.log('Using callback URL:', callbackUrl);

      // Prepare order data
      const orderData = {
        id: `visa_expert_${Date.now()}`,
        currency: 'KES',
        amount: amount,
        description: description,
        callback_url: callbackUrl,
        notification_id: '', // Will be set by the server
        branch: 'Visa Expert',
        billing_address: {
          email_address: customerEmail,
          phone_number: customerPhone,
          country_code: 'KE',
          first_name: customerName.split(' ')[0],
          middle_name: '',
          last_name: customerName.split(' ').slice(1).join(' ') || 'Doe',
          line_1: 'Nairobi',
          line_2: '',
          city: 'Nairobi',
          state: '',
          postal_code: '',
          zip_code: '',
        },
      };

      console.log('Submitting order with data:', orderData);

      // Submit order
      const submitResponse = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: tokenData.token,
          orderData,
        }),
      });

      if (!submitResponse.ok) {
        const errorData = await submitResponse.text();
        console.error('Submit response:', errorData);
        throw new Error(`Failed to submit order: ${errorData}`);
      }

      const submitData = await submitResponse.json();
      console.log('Order submitted successfully:', submitData);

      if (submitData.redirect_url) {
        window.location.href = submitData.redirect_url;
      } else if (submitData.order_tracking_id) {
        window.location.href = `https://pay.pesapal.com/iframe/PesapalIframe3/Index?OrderTrackingId=${submitData.order_tracking_id}`;
      } else {
        throw new Error(`No redirect URL in response: ${JSON.stringify(submitData)}`);
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err instanceof Error ? err.message : 'Failed to process payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-lg mb-4 flex items-start">
          <svg className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
          </svg>
          <span className="flex-1">{error}</span>
        </div>
      )}
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`
          w-full py-4 px-6 rounded-lg font-medium text-white
          shadow-lg transform transition-all duration-150
          flex items-center justify-center space-x-2
          ${loading 
            ? 'bg-green-400 cursor-not-allowed translate-y-0 shadow-md' 
            : 'bg-green-600 hover:bg-green-700 active:translate-y-0.5 hover:shadow-xl'}
        `}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="currentColor"/>
        </svg>
        <span>{loading ? 'Processing Payment...' : 'Lipa na M-Pesa'}</span>
        {loading && (
          <svg className="w-5 h-5 ml-2 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};
