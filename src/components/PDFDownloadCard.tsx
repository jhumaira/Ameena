interface PDFDownloadCardProps {
    title: string;
    description: string;
    price: string;
    link: string;
  }
  
  export default function PDFDownloadCard({
    title,
    description,
    price,
    link,
  }: PDFDownloadCardProps) {
    return (
      <div className="bg-brand.light border border-brand.dark/10 rounded-lg shadow p-6 flex-1">
        <h3 className="text-lg font-serif text-brand.dark mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="inline-block px-5 py-2 bg-brand.dark text-white rounded-md hover:bg-green-900 transition"
        >
          Buy for {price}
        </a>
      </div>
    );
  }
  