import React, { useState } from 'react';
import { RiChatSmile3Line, RiArrowLeftLine, RiAttachmentLine, RiMicLine, RiSendPlaneLine, RiUser3Line } from 'react-icons/ri';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Hai user, ada yang bisa dibantu ?",
            isBot: true,
            time: "12:21"
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            setMessages([...messages, {
                text: inputMessage,
                isBot: false,
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            }]);
            setInputMessage("");
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Tombol Chat */}
            <button
                onClick={toggleChat}
                className={`${isOpen ? 'hidden' : 'flex'} bg-[#326B59] text-white p-4 rounded-full shadow-lg hover:bg-[#3f8870] transition-colors duration-300`}
            >
                <RiChatSmile3Line size={24} />
            </button>

            {/* Pop-up Chat */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-xl w-[380px] h-[500px] flex flex-col mb-4">
                    {/* Header */}
                    <div className="bg-[#114232] p-4 rounded-t-2xl flex items-center justify-between">
                        <button 
                            onClick={toggleChat} 
                            className="text-white hover:bg-[#326B59] p-2 rounded-full transition-colors duration-300"
                        >
                            <RiArrowLeftLine size={20} />
                        </button>
                        <div className="flex flex-col items-center flex-1">
                            <div className="bg-white rounded-full p-2 mb-2">
                                <RiChatSmile3Line size={24} className="text-[#114232]" />
                            </div>
                            <h2 className="text-white text-xl font-semibold">Chat Bot</h2>
                        </div>
                        <div className="w-5"></div> 
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
                            >
                                {message.isBot && (
                                    <div className="w-8 h-8 rounded-full bg-[#114232] flex items-center justify-center mr-2">
                                        <RiChatSmile3Line className="text-white" size={16} />
                                    </div>
                                )}
                                <div className={`max-w-[70%] ${message.isBot ? 'border-2 border-[#114232] bg-white text-black' : 'bg-[#114232] text-white'} rounded-2xl p-3 shadow`}>
                                    <p>{message.text}</p>
                                    <span className="text-xs text-gray-400 block text-right">{message.time}</span>
                                </div>
                                {!message.isBot && (
                                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2">
                                        <RiUser3Line className="text-gray-600" size={16} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={sendMessage} className="p-4 bg-[#114232] rounded-b-2xl border-t">
                        <div className="flex items-center gap-2">
                            <button type="button" className="text-white hover:bg-[#326B59] p-2 rounded-full transition-colors duration-300">
                                <RiAttachmentLine size={20} />
                            </button>
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type Message"
                                className="flex-1 bg-transparent text-white placeholder-gray-300 border-none focus:outline-none"
                            />
                            <button type="button" className="text-white hover:bg-[#326B59] p-2 rounded-full transition-colors duration-300">
                                <RiMicLine size={20} />
                            </button>
                            <button type="submit" className="text-white hover:bg-[#326B59] p-2 rounded-full transition-colors duration-300">
                                <RiSendPlaneLine size={20} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;