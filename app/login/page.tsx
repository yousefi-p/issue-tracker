'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleSendOtp = async () => {
    const response = await fetch('/api/otp/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    });
    console.log(response.json())
    if (response.ok) {
      setStep(2);
    } else {
      alert('Error sending OTP');
    }
  };

  const handleVerifyOtp = async () => {
    const response = await fetch('/api/otp/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, otp }),
    });

    if (response.ok) {
      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1>Verify OTP</h1>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
}