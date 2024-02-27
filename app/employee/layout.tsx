export const metadata = {
    title: 'Products | Agama Consulting',
    description: 'All the employee at Agama',
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