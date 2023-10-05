'use client';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	let [categories] = useState({
		Текущи: [
			{
				id: 1,
				title: 'ИЗГРАЖДАНЕ НА ХОТЕЛСКА СГРАДА',
				date: '5h ago',
				commentCount: 5,
				shareCount: 2,
			},
			{
				id: 2,
				title: 'ИЗГРАЖДАНЕ НА ЖИЛИЩНА СГРАДА',
				date: '2h ago',
				commentCount: 3,
				shareCount: 2,
			},
		],
		Завършени: [
			{
				id: 1,
				title: 'ZASHEVA HOUSE - РЕМОНТ НА ЖИЛИЩНА СГРАДА',
				date: 'Jan 7',
				commentCount: 29,
				shareCount: 16,
			},
			{
				id: 2,
				title: 'SAPID - РЕМОНТ НА ТЪРГОВСКА СГРАДА',
				date: 'Mar 19',
				commentCount: 24,
				shareCount: 12,
			},
		],
		Предстоящи: [
			{
				id: 1,
				title: 'ИЗГРАЖДАНЕ НА ХОТЕЛСКА СГРАДА - СТРАЖИТЕ',
				date: '2d ago',
				commentCount: 9,
				shareCount: 5,
			},
			{
				id: 2,
				title: 'ИЗГРАЖДАНЕ НА ХАЛЕ СЪС СТОЯНКА ЗА КАМИОНИ - СОФИЯ',
				date: '4d ago',
				commentCount: 1,
				shareCount: 2,
			},
		],
	});

	return (
		<section className="bg-white dark:bg-gray-900 w-full">
			<div className="py-2 lg:py-16 mx-auto max-w-screen-xl px-4">
				<h2 className="mb-2 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-black dark:text-white md:text-4xl uppercase">
					Проекти
				</h2>
				<div className=" items-center max-w-2xl px-2 sm:px-1 py-1">
					<Tab.Group>
						<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
							{Object.keys(categories).map((category) => (
								<Tab
									key={category}
									className={({ selected }) =>
										classNames(
											'w-full rounded-lg py-2.5 text-md font-medium leading-5 text-white ',
											'ring-black ring-opacity-60 ring-offset-2 ring-offset-blue-800 focus:outline-none focus:ring-2',
											selected
												? 'bg-white text-black shadow'
												: 'text-white hover:bg-white/[0.12] hover:text-white',
										)
									}
								>
									{category}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels className="mt-2">
							{Object.values(categories).map((posts, idx) => (
								<Tab.Panel
									key={idx}
									className={classNames(
										'rounded-xl bg-white p-3',
										'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
									)}
								>
									<ul>
										{posts.map((post) => (
											<li
												key={post.id}
												className="relative rounded-md p-3 hover:bg-red-300"
											>
												<h3 className="text-sm font-medium leading-8 text-black">
													{post.title}
												</h3>

												<ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-black">
													<li>{post.date}</li>
													<li>&middot;</li>
													<li>{post.commentCount} comments</li>
													<li>&middot;</li>
													<li>{post.shareCount} shares</li>
												</ul>

												<a
													href="#"
													className={classNames(
														'absolute inset-0 rounded-md',
														'ring-red-400 focus:z-10 focus:outline-none focus:ring-2',
													)}
												/>
											</li>
										))}
									</ul>
								</Tab.Panel>
							))}
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
			<Link href="/certificates">
				<button className="btn text-white border-0 shadow-lg bg-red-500 right-[4%] w-1/2 absolute uppercase">
					Сертификати
				</button>
			</Link>
		</section>
	);
}
