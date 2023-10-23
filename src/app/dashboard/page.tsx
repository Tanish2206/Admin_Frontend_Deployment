'use client'
import React, { useState, useEffect } from 'react';
import SidebarWithHeader from '@/Components/Common/layout/LayOut';
import PrivateRoute from '@/Components/privateRoute/PrivateRoute';
import secureLocalStorage from 'react-secure-storage';
import { useRouter } from 'next/navigation';

const DashBoard = () => {
  
  return (
    <>
      <SidebarWithHeader />
    </>
  );
};

const WrappedProtectedPage: React.FC = () => {
  const [authorization, setAuthorization] = useState(true);
 
  const router = useRouter();

  useEffect(() => {
    const token =JSON.parse(secureLocalStorage.getItem("authToken")as any);
    if (!token) {
      setAuthorization(false);
      return;
    } 
  }, []);

  return (
    <>
      <PrivateRoute isAuthenticated={authorization}>
        <DashBoard />
      </PrivateRoute>
    </>
  );
};

export default WrappedProtectedPage;
