export const metadata = {
    title: 'Categories | Agama Consulting Group',
    description: 'Different categories os employee at Agama',
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