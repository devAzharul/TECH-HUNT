
import Head from 'next/head';
import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';

const TeamMember = ({ name, position, imageSrc }) => (
    <div className="w-full md:w-6/12 lg:w-4/12 mb-8 px-4">
        <div className="text-center">
            <Image
                width={1000}
                height={500}
                src={imageSrc}
                alt={name}
                className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
            />
            <h1 className="text-white text-lg font-bold leading-normal mb-2">{name}</h1>
            <h2 className="text-white text-base font-medium leading-normal">{position}</h2>
        </div>
    </div>
);

const Team = () => {
    const teamMembers = [
        { name: 'Ajmain Mahtab', position: 'Management & Marketing', imageSrc: '/image team/Ajmain-Mahtab-Niloy.jpg' },
        { name: 'Arifur Rahaman', position: 'Frontend Developer', imageSrc: '/image team/Arifur-bhai.jpg' },
        { name: 'Azharul Islam', position: 'Frontend Developer', imageSrc: '/image team/Azharul-Islam.jpg' },
        { name: 'Rony Chowdhury', position: 'Frontend Developer', imageSrc: '/image team/Rony-Chowdhury.jpg' },
        { name: 'Ruman Islam', position: 'Backend Developer', imageSrc: '/image team/Ruman-Islam.jpg' },
        { name: 'Sultan Mahmud', position: 'Frontend Developer', imageSrc: '/image team/Sultan-Mahmud.jpg' },
    ];

    return (
        <Layout>
            <Head>
                <title>Our Team - Tech-Hunt</title>
                <meta name="description" content="Meet our talented team members who are passionate about delivering exceptional web development services. Learn about their roles and expertise in frontend and backend development, management, and marketing." />
                {/* Add more meta tags as needed */}
            </Head>
            <section className="p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">"Bringing Your Ideas to Life: <span className='primaryText'>Our Team</span>" </h1>
                <div className="flex flex-wrap justify-center bg-black/[.8] border border-hidden rounded-3xl p-12">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            position={member.position}
                            imageSrc={member.imageSrc}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Team;
