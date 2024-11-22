import React, { useState, useEffect, useRef } from 'react';
import { RiChatSmile3Line, RiArrowLeftLine, RiAttachmentLine, RiMicLine, RiSendPlaneLine, RiUser3Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Hai! Saya adalah asisten virtual Petani GO. Ada yang bisa saya bantu?",
            isBot: true,
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);
    const recognition = useRef(null);

    useEffect(() => {
        // Initialize speech recognition
        if ('webkitSpeechRecognition' in window) {
            recognition.current = new window.webkitSpeechRecognition();
            recognition.current.continuous = false;
            recognition.current.interimResults = false;
            recognition.current.lang = 'id-ID'; // Set to Indonesian

            recognition.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInputMessage(transcript);
                // Automatically send message after speech recognition
                const message = {
                    text: transcript,
                    isBot: false,
                    time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, message]);
                setInputMessage('');
                setIsListening(false);
                
                // Simulate bot response
                setIsTyping(true);
                setTimeout(() => {
                    const botMessage = {
                        text: "Maaf, saya masih dalam tahap pengembangan dan belum bisa memberikan jawaban yang tepat.",
                        isBot: true,
                        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
                    };
                    setMessages(prev => [...prev, botMessage]);
                    setIsTyping(false);
                }, 1000);
            };

            recognition.current.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false);
                toast.error('Gagal mengenali suara. Silakan coba lagi.');
            };

            recognition.current.onend = () => {
                setIsListening(false);
            };
        }
    }, []);

    const toggleListening = () => {
        if (!recognition.current) {
            toast.error('Browser Anda tidak mendukung pengenalan suara.');
            return;
        }

        if (isListening) {
            recognition.current.stop();
        } else {
            try {
                recognition.current.start();
                setIsListening(true);
            } catch (error) {
                console.error('Speech recognition error:', error);
                toast.error('Gagal memulai pengenalan suara. Silakan coba lagi.');
            }
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const simulateBotResponse = (userMessage) => {
        setIsTyping(true);
        
        // Simulate bot thinking time
        setTimeout(() => {
            let botResponse = "";
            const lowerMessage = userMessage.toLowerCase();

            // Simple response logic
            if (lowerMessage.includes("halo") || lowerMessage.includes("hai") || lowerMessage.includes("hi")) {
                botResponse = "Hai! Ada yang bisa saya bantu?";
            } else if (lowerMessage.includes("tanaman") || lowerMessage.includes("tani")) {
                botResponse = "Untuk informasi tentang pertanian, Anda bisa mengunjungi halaman Artikel atau Forum Diskusi kami.";
            } else if (lowerMessage.includes("penyakit") || lowerMessage.includes("hama")) {
                botResponse = "Anda bisa menggunakan fitur Deteksi Penyakit untuk mengidentifikasi masalah pada tanaman Anda.";
            } else if (lowerMessage.includes("terima kasih")) {
                botResponse = "Sama-sama! Senang bisa membantu Anda.";
            } else {
                botResponse = "Maaf, saya belum bisa memahami pertanyaan Anda. Silakan coba pertanyaan lain atau kunjungi halaman Forum untuk bertanya langsung ke komunitas.";
            }

            setMessages(prev => [...prev, {
                text: botResponse,
                isBot: true,
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            }]);
            setIsTyping(false);
        }, 1000);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            const userMessage = {
                text: inputMessage,
                isBot: false,
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, userMessage]);
            setInputMessage("");
            simulateBotResponse(inputMessage);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(e);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chat Button */}
            <button
                onClick={toggleChat}
                className={`${isOpen ? 'hidden' : 'flex'} bg-[#326B59] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#3f8870] transition-all duration-300 hover:scale-110 active:scale-95`}
            >
                <RiChatSmile3Line className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-xl w-[calc(100vw-2rem)] sm:w-[380px] h-[85vh] sm:h-[500px] flex flex-col mb-4 fixed bottom-0 right-0 sm:relative animate-slideUp">
                    {/* Header */}
                    <div className="bg-[#114232] p-3 sm:p-4 rounded-t-2xl flex items-center justify-between">
                        <button 
                            onClick={toggleChat} 
                            className="text-white hover:bg-[#326B59] p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            <RiArrowLeftLine className="w-5 h-5" />
                        </button>
                        <div className="flex flex-col items-center flex-1">
                            <div className="bg-white rounded-full p-1.5 sm:p-2 mb-1 sm:mb-2">
                                <RiChatSmile3Line className="w-5 h-5 sm:w-6 sm:h-6 text-[#114232]" />
                            </div>
                            <h2 className="text-white text-lg sm:text-xl font-semibold">Chat Bot</h2>
                        </div>
                        <div className="w-5"></div> 
                    </div>

                    {/* Chat Messages */}
                    <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gray-50">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-3 sm:mb-4 animate-fadeIn`}
                            >
                                {message.isBot && (
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#114232] flex items-center justify-center mr-2">
                                        <RiChatSmile3Line className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                )}
                                <div className={`max-w-[75%] ${message.isBot ? 'border-2 border-[#114232] bg-white text-black' : 'bg-[#114232] text-white'} rounded-2xl p-2.5 sm:p-3 shadow`}>
                                    <p className="text-sm sm:text-base whitespace-pre-wrap break-words">{message.text}</p>
                                    <span className="text-[10px] sm:text-xs text-gray-400 block text-right mt-1">{message.time}</span>
                                </div>
                                {!message.isBot && (
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2">
                                        <RiUser3Line className="text-gray-600 w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start mb-3 sm:mb-4 animate-pulse">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                                    <RiUser3Line className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {isListening && (
                            <div className="flex justify-end mb-3 sm:mb-4 animate-pulse">
                                <div className="bg-white border-2 border-red-500 rounded-2xl p-2.5 sm:p-3 shadow">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-500 flex items-center justify-center ml-2">
                                    <RiMicLine className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={sendMessage} className="p-3 sm:p-4 bg-[#114232] rounded-b-2xl border-t">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <button 
                                type="button" 
                                className="text-white hover:bg-[#326B59] p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <RiAttachmentLine className="w-5 h-5" />
                            </button>
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Ketik pesan..."
                                className="flex-1 bg-white text-gray-800 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#326B59]"
                            />
                            <button 
                                type="button"
                                onClick={toggleListening}
                                className={`text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${isListening ? 'bg-red-500 animate-pulse' : 'hover:bg-[#326B59]'}`}
                            >
                                <RiMicLine className="w-5 h-5" />
                            </button>
                            <button 
                                type="submit" 
                                disabled={!inputMessage.trim()}
                                className={`text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${inputMessage.trim() ? 'hover:bg-[#326B59]' : 'opacity-50 cursor-not-allowed'}`}
                            >
                                <RiSendPlaneLine className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;