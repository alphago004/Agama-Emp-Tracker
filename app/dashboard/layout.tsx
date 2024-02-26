export const metadata = {
    title: 'Dashboard | Agama Consulting',
    description: 'Agama Consulting Group Dashboard',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
              {children}
        </div>  
     
    )
  }