import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OtpForm() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isValidOtp, setIsValidOtp] = useState(null);
  const [buttonText, setButtonText] = useState('Verify Account');
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    console.log(e.target.value, index);
    const value = e.target.value;
    if (isNaN(value) && value !== '') return;
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value !== '' && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
    setOtp(newOtp);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = ['1', '2', '3', '4'];

    if (otp.join('') === result.join('')) {
      setIsValidOtp(true);
      setButtonText('Verified');
      setTimeout(() => navigate('/course-list'), 2000);
    } else {
      setIsValidOtp(false);
      setButtonText('Verification Failed');
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: '#3F72AF' }}>
        <h1 className="text-6xl font-bold text-white mb-10">Chai aur Code</h1>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Mobile Phone Verification</h2>
            <p className="text-gray-600 mb-6">Enter the 4-digit verification code that was sent to your phone number.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength="1"
                  className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full p-2 text-white rounded-md"
              style={{
                backgroundColor: isValidOtp === null ? '#112D4E' : isValidOtp ? '#23CF9B' : 'red'
              }}
            >
              {buttonText}
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600">Didn't receive code? <a href="#" className="text-blue-500">Resend</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpForm;
