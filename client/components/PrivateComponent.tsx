import { Enum_RoleName } from '@prisma/client';
import useUserData from 'hooks/useUserData';
import React from 'react'

interface PrivateComponentProps {
  role: Enum_RoleName;
  children: React.ReactNode;
}

const PrivateComponent = ({role,children}:PrivateComponentProps) => {
  const {role: userRole} = useUserData();

  if(!userRole || userRole !== role) return <></>;

  return <>{children}</>
}

export default PrivateComponent