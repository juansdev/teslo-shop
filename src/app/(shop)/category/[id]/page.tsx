import {notFound} from "next/navigation";

interface ICategoryPageProps {
  params: {
    id: string;
  }
}

export default function CategoryPage({params}: ICategoryPageProps) {
  const {id} = params;
  if (id === "kids") notFound();
  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
}