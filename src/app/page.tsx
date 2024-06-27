import Image from "next/image";
import Image01 from "@/assets/images/image-01.jpg";
import Image02 from "@/assets/images/image-02.jpg";
import Image03 from "@/assets/images/image-03.jpg";
import Image04 from "@/assets/images/image-04.jpg";
import Image05 from "@/assets/images/image-05.jpg";
import Image06 from "@/assets/images/image-06.jpg";
import Image07 from "@/assets/images/image-07.jpg";
import Image08 from "@/assets/images/image-08.jpg";
import Image09 from "@/assets/images/image-09.jpg";
import Image10 from "@/assets/images/image-10.jpg";

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6 pt-8">
          <article>
            <Image src={Image01} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image02} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image03} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image04} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image05} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image06} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image07} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image08} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image09} alt="" width={1280} height={853} priority />
          </article>

          <article>
            <Image src={Image10} alt="" width={1280} height={853} priority />
          </article>
        </div>
      </div>
    </section>
  );
}
