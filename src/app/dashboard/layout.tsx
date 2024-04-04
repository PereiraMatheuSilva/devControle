import {DashboardHeader} from '@/app/dashboard/components/header';

export default function DashboardLayout({ children }:{ childre: React.ReactNode }){
  return(
    <>
      <DashboardHeader />
      {children}
    </>
  )
}