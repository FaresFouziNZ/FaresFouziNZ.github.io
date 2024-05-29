import Image from "next/image"
import Link from "next/link"

interface SectionWithLinkProps {
  id: string
  title: string
  text: string
  imageUrl: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  linkUrl: string
  linkText: string
  reverse?: boolean
}

export default function SectionWithLink({
  id,
  title,
  text,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  linkUrl,
  linkText,
  reverse = false,
}: SectionWithLinkProps) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row-reverse">
        <div className="px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-lg text-gray-700">{text}</p>
          <Link
            href={linkUrl}
            passHref
            target="_blank"
            className="mt-6 inline-block rounded-lg bg-blue-500 px-8 py-4 text-white shadow-lg hover:bg-blue-600"
          >
            {linkText}
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image src={imageUrl} alt={imageAlt} width={imageWidth} height={imageHeight} className="mx-auto" />
        </div>
      </div>
    </section>
  )
}
