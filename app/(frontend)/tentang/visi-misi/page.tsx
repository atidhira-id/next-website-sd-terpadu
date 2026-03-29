import { Section } from "@/components/ui/Section";
import { visiMisi } from "@/data/Data";

export default function VisiMisi() {
  return (
    <>
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="border-b-4 border-accent text-accent-foreground text-2xl font-bold tracking-wider mb-3">
              Visi
            </div>
            <div className="font-serif text-3xl lg:text-4xl font-bold lg:font-light leading-normal text-black">
              {visiMisi.visi.text}
            </div>
          </div>
          <div>
            <div className="border-b-4 border-accent text-accent-foreground text-2xl font-bold tracking-wider mb-3">
              Penjelasan Visi
            </div>
            <div
              className="font-serif text-justify leading-normal text-gray-700 text-sm lg:text-lg space-y-2"
              dangerouslySetInnerHTML={{ __html: visiMisi.visi.description }}
            />
          </div>
        </div>
        <div>
          <div className="border-b-4 border-accent text-accent-foreground text-2xl font-bold tracking-wider mb-3">
            Misi
          </div>
          <ul className="grid lg:grid-cols-2 gap-y-4 gap-x-8 font-serif text-sm lg:text-lg">
            {visiMisi.misi.map((item) => {
              return (
                <li key={item.pos} className="flex justify-around gap-2">
                  <div className="font-bold w-4 shrink-0">
                    <p>{item.pos}.</p>
                  </div>
                  <p>
                    <span className="font-bold">{item.text}</span>
                    <span>{item.description}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </>
  );
}
