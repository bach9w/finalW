'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Header from '../components/Header';
import Certificates from '../components/Certificates';

export default function Example() {
	return (
		<div className=" max-h-full h-full bg-white">
			<Header />

			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className="mx-auto min-h-screen max-w-2xl py-9 sm:py-9 lg:py-9">
					<div
						className="hero min-h-screen mb-5"
						style={{
							backgroundImage:
								'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
						}}
					>
						<div className="hero-overlay bg-opacity-80"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 -mt-40 text-5xl font-bold text-white">
									Експертиза в Различни Области
								</h1>
								<p className="mb-5 text-white uppercase font-bold">
									опит в различни сфери на строителството - от жилищно до
									промишлено строителство.
								</p>
							</div>
						</div>
					</div>
					<div
						className="hero min-h-screen mb-5 "
						style={{
							backgroundImage:
								'url(http://www.aquains.com/storage/certificates/Certificate%20ISO%209001%20Aquains_2018_BG-1.jpg)',
						}}
					>
						<div className="hero-overlay bg-opacity-80"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 -mt-40 text-5xl font-bold text-white">
									Лицензи и Сертификати
								</h1>
								<p className="mb-5 text-white uppercase font-bold">
									Наличие на всички необходими лицензи и акредитации,
									удостоверяващи качеството на услугите.
								</p>
							</div>
						</div>
					</div>
					<div
						className="hero min-h-screen mb-5"
						style={{
							backgroundImage:
								'url(https://img.freepik.com/free-vector/business-ethics-illustration_23-2148743354.jpg?w=1480&t=st=1696519834~exp=1696520434~hmac=eae0c178515d1b9f0a8e5ea33cb6beb0b82b2536b4f401058f48bd5cfa62daac)',
						}}
					>
						<div className="hero-overlay bg-opacity-80"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 -mt-40 text-5xl font-bold text-white">
									Финансова Стабилност
								</h1>
								<p className="mb-5 text-white uppercase font-bold">
									Доказана способност за управление на големи бюджети и
									финансова отчетност.
								</p>
							</div>
						</div>
					</div>
					<div
						className="hero min-h-screen mb-5"
						style={{
							backgroundImage:
								'url(https://img.freepik.com/free-photo/gentleman-tuxedo_144627-32169.jpg?w=1380&t=st=1696519941~exp=1696520541~hmac=95a344bb0954bce333e83f61f4a5131305509f359da469196d2951c8bea337fd)',
						}}
					>
						<div className="hero-overlay bg-opacity-80"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 -mt-40 text-5xl font-bold text-white">
									Висококачествена Техника
								</h1>
								<p className="mb-5 text-white uppercase font-bold">
									Разполагане с модерна и надеждна техника и оборудване.
								</p>
							</div>
						</div>
					</div>
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage:
								'url(https://img.freepik.com/free-photo/smart-indian-engineer-man-wearing-safety-helmet-doing-stock-tick-check-cardboard-stock-product-management-factory-warehouse-background_609648-1515.jpg?w=1480&t=st=1696520111~exp=1696520711~hmac=8a1d51c36674dfa530d60f0365d1ad8860bc427de736cb1190f1601c6e01ecb2)',
						}}
					>
						<div className="hero-overlay bg-opacity-80"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 -mt-40 text-5xl font-bold text-white">
									Квалифициран Персонал{' '}
								</h1>
								<p className="mb-5 text-white uppercase font-bold">
									Професионално обучен и квалифициран персонал, включително
									инженери, архитекти и работници.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
