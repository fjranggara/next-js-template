import Head from "next/head";
import Script from "next/script";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Blog Next</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous" />

            </Head>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous" />

        </>
    )
}