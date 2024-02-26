export const metadata = {
    title: 'Agama Consulting Group',
    description: 'Sales from Agama Consulting Group',
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