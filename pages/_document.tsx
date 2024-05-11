import { Html, Head, Main, NextScript } from "next/document";
import { useTheme } from "next-themes";

export default function Document() {
    const { resolvedTheme } = useTheme();
    console.log('resolvedTheme', resolvedTheme)
    return (
        <Html className={resolvedTheme}>
            <Head />
            <body className="dark:bg-gray-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}