import React from 'react';

const Forum = () => {
    const discussions = [
        {
            id: 1,
            sender: "user1@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Senin, 11 Januari 2024 - 12:00 WIB"
        },
        {
            id: 2,
            sender: "user2@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Selasa, 12 Januari 2024 - 09:00 WIB"
        },
        {
            id: 3,
            sender: "user3@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Rabu, 13 Januari 2024 - 11:00 WIT"
        },
        {
            id: 4,
            sender: "user4@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Kamis, 14 Januari 2024 - 14:00 WIB"
        },
        {
            id: 5,
            sender: "user5@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Jumat, 15 Januari 2024 - 15:00 WIB"
        }
    ];

    return (
        <div className="bg-white text-green-900 p-8">
            <div className="bg-[#114232] text-white text-center py-4 mb-8">
                <h1 className="text-3xl font-bold">FORUM DISKUSI</h1>
            </div>
            <table className="min-w-full bg-white border-collapse">
                <thead>
                    <tr className="bg-[#114232] text-white">
                        <th className="py-3 px-6 text-left">Pengirim</th>
                        <th className="py-3 px-6 text-left">Pendapat</th>
                        <th className="py-3 px-6 text-left">Waktu</th>
                    </tr>
                </thead>
                <tbody>
                    {discussions.map((discussion, index) => (
                        <tr key={discussion.id} className={`${index % 2 === 0 ? 'bg-[#326B59]' : 'bg-[#114232]'} text-white`}>
                            <td className="py-4 px-6 flex items-center">
                                <i className="fas fa-user-circle mr-2 text-white"></i>
                                <a href={`mailto:${discussion.sender}`} className="text-white hover:underline">
                                    {discussion.sender}
                                </a>
                            </td>
                            <td className="py-4 px-6">{discussion.opinion}</td>
                            <td className="py-4 px-6">{discussion.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Forum;