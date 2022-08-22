import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>빡코딩 포트폴리오</title>
                <meta name="description" content="오늘도 빡코딩!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            안녕하세요 이민아입니다👩!
                            <br className="hidden lg:inline-block" />
                            슬플땐 코딩을 하자
                        </h1>
                        <p className="mb-8 leading-relaxed">
                        울지마라<br/>
외로우니까 사람이다<br/>
살아간다는 것은 외로움을 견디는 일이다<br/>
공연히 오지 않는 전화를 기다리지 마라<br/>
눈이 오면 눈길을 걷고<br/>
비가 오면 빗길을 걸어가라<br/>
갈대 숲에서 가슴 검은 도요새도 너를 보고 있다<br/>
가끔은 하느님도 외로워서 눈물을 흘리신다<br/>
새들이 나뭇가지에 앉아 있는 것도 외로움 따문이고<br/>
네가 물가에 앉아 있는 것도 외로움 때문이다<br/>
산 그림자도 외로워서 하루에 한 번 씩 마을로 내려온다<br/>
종소리도 외로워서 울려 퍼진다.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                프로젝트 보러가기
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
                </div>
            </section>
        </Layout>
    );
}
