import PropertyData from "@/app/jsonData/property.json";
import { notFound } from "next/navigation";
import PropertyDetailsClient from "./PropertyDetailsClient";
// Importamos el nuevo componente

// 1. generateStaticParams se queda aquí, en el componente de servidor.
export function generateStaticParams() {
  return PropertyData.map((property) => ({
    id: property.id.toString(),
  }));
}

// 2. Este es ahora un Componente de Servidor. No usa "use client".
const PropertyDetailsPage = async ({ params }) => {
  // En los componentes de servidor, `params` es un objeto simple, no se necesita `use()`.
  const { id } = await params;
  const property = PropertyData.find(p => p.id === parseInt(id));

  // Si la propiedad no se encuentra, muestra la página 404.
  if (!property) {
    notFound();
  }

  // También podemos preparar los datos para las propiedades relacionadas aquí.
  const relatedProperties = PropertyData.filter(item => item.id !== property.id && item.location === property.location);

  // 3. Renderizamos el componente cliente, pasándole los datos como props.
  return <PropertyDetailsClient property={property} relatedProperties={relatedProperties} />;
}

export default PropertyDetailsPage;