import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Project A",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    title: "Project B",
    image: "https://picsum.photos/600/400?random=2",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-primary mb-8">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 shadow-lg rounded-lg">
            <Image
              src={project.image}
              width={600}
              height={400}
              alt={project.title}
              className="rounded-md"
            />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
