
import AdminNavigation from "@/components/AdminNavigation";
import "bootstrap/dist/css/bootstrap.min.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <AdminNavigation />
        {children}

    </div>
  );
}