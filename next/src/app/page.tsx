import { PageWrapper } from "./(helpers)/page_wrapper";
import Image from "next/image";

export default function Home() {

  return (PageWrapper(
    <Image
      className="dark:invert"
      src="/photo-1488972685288-c3fd157d7c7a.jpg"
      alt=""
      width={1000}
      height={1000}
      priority // Lazy loading priority={false} but only use if loading="lazy" isn't
    />))
}

// https://nextjs.org/docs/pages/api-reference/components/image#priority