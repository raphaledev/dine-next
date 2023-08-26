import Link from "next/link";
const Hero = () => {
    return (
        <section class="lg:grid grid-cols-3">
			<div class="bg-cod-gray">
			</div>
			<div class="lg:col-span-2 bg-hero-mob bg-no-repeat opacity-90 bg-cover lg:bg-center lg:bg-hero-desk lg:h-[36rem] w-full">
			</div>
            <div class="bg-cod-gray flex flex-col gap-12 px-12 pb-36 text-center font-light lg:bg-inherit lg:text-left lg:absolute lg:top-12 md:px-16 text-white lg:w-1/2 lg:pl-48">
				<h2 class="lg:text-left text-4xl font-semibold">dine</h2>
				<p class="text-5xl">Exquisite dining since 1989</p>
				<p class="leading-loose">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
					the comfort of our farmhouse.</p>
				<div class="text-center lg:text-left">
                    <Link href="/href"><button class="text-lg font-normal hover:bg-white hover:text-cod-gray tracking-widest uppercase px-8 py-4 border">Book a table</button></Link>
				</div>
			</div>
		</section>
    )
}

export default Hero;
