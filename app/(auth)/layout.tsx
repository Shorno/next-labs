export default function AuthLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"container mx-auto max-w-4xl"}>
            {children}
        </div>

    );
}
