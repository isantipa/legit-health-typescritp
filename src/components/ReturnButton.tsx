import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const ReturnButton: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pageNumber = (location.state as any)?.pageNumber || 1;
  
    return (
      <button 
        className="return-button" 
        onClick={() => {
          navigate(`/page/${pageNumber}`);
        }}
      >
        Return
      </button>
    );
}  

export default ReturnButton;