'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Header from './components/Header';

export default function Example() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<div className="relative isolate px-6 pt-4 lg:px-8">
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
				<div className="mx-auto max-w-2xl py-20 sm:py-9 lg:py-9">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Поставяне на изолационна мембрана.{' '}
							<a href="/services" className="font-semibold text-indigo-600">
								<span className="absolute inset-0" aria-hidden="true" />
								Прочети още <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div className="text-center">
						<div className="card w-auto glass">
							<figure>
								<img
									src="https://img.freepik.com/free-photo/construction-workers-sunset_53876-138180.jpg?w=1800&t=st=1696522092~exp=1696522692~hmac=f4061e578b08c7e1df3cc77de1b090570e8cdf63d98c4397b2436e4909572240"
									alt="car!"
								/>
							</figure>
							<div className="card-body text-black">
								<h2 className="card-title ">
									Решения за подобрение на вашата строителна ефективност
								</h2>
								<p>
									Изградете бъдещето с нас. Нашата строителна фирма предлага
									иновативни и устойчиви решения, които оптимизират вашите
									строителни проекти и гарантират високо качество на изпълнение.
									Съчетавайки традиция и съвременни технологии, ние превръщаме
									вашите архитектурни визии в реалност.
								</p>
								<div className="card-actions justify-end"></div>
							</div>
						</div>

						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/services"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Прочети
							</a>
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Сравни <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
