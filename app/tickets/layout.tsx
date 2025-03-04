import NavigationBar from "@/components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <NavigationBar />
        {children}

    </div>
  );
}