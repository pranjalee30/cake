import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // Redirect after 3 seconds (or any delay you prefer)

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>Redirecting to home page...</p>
    </div>
  );
}

export default NotFound;
