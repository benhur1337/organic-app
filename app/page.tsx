import { MyScrollCarousel } from "@/components/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const scrollMission = "We're cultivating a community fueled by delicious mushrooms and a touch of the extraordinary."

  const scrollArray = scrollMission.split(" ")

  console.log(scrollArray)

  return (
    <div className="flex flex-col gap-6">

      {/* Hero Section */}

      <Image
        src="https://jmruu0gcgkmapof9.public.blob.vercel-storage.com/proto-images/hero-image-R1Ub8Hcc18jtnl57EYQFJANubEtJA5"
        alt="hero-image"
        width={1920}
        height={1080}
        className="object-cover object-center h-[500px] lg:h-[800px]"
      />

      {/* About Section */}

      <div className="flex flex-row gap-4 p-6 md:max-w-[1100px] md:mx-auto">
        <div className="text-6xl py-6 font-bold tracking-tight w-4/6 border-2 border-white border-r-black ">
          We are the place to find organic homegrown mushrooms. <Link className="font-normal text-xl hover:font-bold hover:text-2xl hover:underline tracking-normal duration-500" href="/about">Learn More →</Link>
        </div>
        <div className="flex flex-col justify-between p-6 py-6 w-2/6">
          <div className="text-2xl font-bold tracking-tight">About Us</div>
          <div className="flex flex-row gap-2">
            {
              [1, 2, 3].map((item: any, key: number) => <div key={key} className="h-[2rem] w-[2rem] rounded-full bg-black"></div>)
            }
          </div>
        </div>
      </div>

      <div className="border border-black w-full md:max-w-[1100px] md:mx-auto"></div>

      {/* What we do Section */}

      <div className="flex flex-row gap-4 md:max-w-[1100px] md:mx-auto">

        <div className="text-2xl px-6 py-6 font-bold tracking-tight w-1/5 border-2 border-white border-r-black">
          <div>What we do <Link className="font-bold text-xl hover:text-2xl duration-500" href={'/about'}>↗</Link></div>
        </div>

        <div className="flex w-4/5 flex-col gap-4">
          <div className="flex flex-row gap-4">

            <div className="flex flex-col w-1/2 p-6 gap-4 border-2 border-white border-r-black">
              <div className="text-3xl tracking-tight font-bold">Fresh, high-quality mushrooms</div>
              <div>Indoor farms can control the growing environment, leading to consistently fresh and flavorful mushrooms. They can also cultivate unique or gourmet varieties that might not be readily available in grocery stores.</div>
            </div>

            <div className="flex flex-col w-1/2 p-6 gap-4">
              <div className="text-3xl tracking-tight font-bold">Local and sustainable food source</div>
              <div>Indoor mushroom farms often operate on a smaller scale and can cater to local markets. This reduces transportation costs and provides consumers with a more sustainable option.</div>
            </div>

          </div>

          <div className="w-full border border-black">{""}</div>

          <div className="flex flex-row gap-4">

            <div className="flex flex-col w-1/2 gap-4 p-6 border-2 border-white border-r-black">
              <div className="text-3xl tracking-tight font-bold">Reduced environmental impact</div>
              <div>Mushroom cultivation can be a very efficient use of space and resources.  Indoor farms often utilize recycled materials and byproducts from other agricultural processes as growth substrates, minimizing waste.</div>
            </div>

            <div className="flex flex-col w-1/2 p-6 gap-4">
              <div className="text-3xl tracking-tight font-bold">Educational workshops and grow kits</div>
              <div>Some indoor mushroom farms offer educational workshops on mushroom cultivation. They may also sell grow kits so that people can experience the rewarding hobby of growing their own mushrooms at home.</div>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Section */}

    
      <MyScrollCarousel>
        {
          scrollArray.map((item: string, key: number) => {
            return (
              <div key={key} className="text-9xl m-6 font-bold tracking-tight">{item}</div>
            )
          })
        }
      </MyScrollCarousel>


    </div>
  );
}
