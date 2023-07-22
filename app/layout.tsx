import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import '@/styles/globals.css'
export const metadata = {
	title: "Flexibble",
	description: "Showcase and discover the best developer projects",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
        <Navbar/>
				<main>{children}</main>
        <Footer/>
			</body>
		</html>
	);
}
