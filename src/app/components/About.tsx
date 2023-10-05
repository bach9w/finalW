import Link from 'next/link';

export default function Certificates() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900 h-full">
				<div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
					<h2 className="mb-8 lg:mb-16 lg:text-3xl sm:text-lg font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
						ЗА НАС
					</h2>
					<h3 className="uppercase">
						С над 20 години опит, нашата фирма е водеща в строителната
						индустрия, притежавайки всички необходими сертификати и лицензи. Ние
						предлагаме разнообразие от услуги, от ремонти до комплексно
						строителство. Нашите специалисти следват новите технологични
						стандарти, докато ръководителите на проекти гарантират качеството на
						работата. Всеки клиент и проект е уникален за нас, и ние предлагаме
						персонализирани и устойчиви решения. Изберете нас за надежден
						строителен партньор и стройте бъдещето си на фирми качество.
					</h3>
					<div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"></div>
					<Link href="/projects">
						<button className="btn text-white border-0 shadow-lg bg-red-500 right-[4%] w-1/2 mt-[5%] absolute uppercase">
							ПРОЕКТИ
						</button>
					</Link>
				</div>
			</section>
		</>
	);
}
