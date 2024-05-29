interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">{title}</h2>
        {children}
      </div>
    </section>
  )
}
