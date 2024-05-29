import Image from "next/image";

interface SectionWithImageRightProps {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  reverse?: boolean;
}

export default function SectionWithImageRight({
  id,
  title,
  text,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  reverse = false,
}: SectionWithImageRightProps) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row">
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="mx-auto"
          />
        </div>
        <div
          className={`md:w-1/2 ${reverse ? "order-last md:order-first" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-lg text-gray-700">{text}</p>
        </div>
        {/* <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="mx-auto"
          />
        </div> */}
      </div>
    </section>
  );
}
