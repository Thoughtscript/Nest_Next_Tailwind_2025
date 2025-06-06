import { NavBar } from './nav'

export const PageWrapper = (childElement: any) =>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <NavBar />

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            {childElement}
        </main>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            Lorem ipsum ❤️.
        </footer>
    </div>
