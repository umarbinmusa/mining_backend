import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './App.css';
import Hamster from './icons/Hamster';
import { binanceLogo, dailyCipher, dailyCombo, dailyReward, dollarCoin, hamsterCoin, mainCharacter } from './images';
import Info from './icons/Info';
import Settings from './icons/Settings';
import Friends from './icons/Friends';
import Coins from './icons/Coins';
const Layout = () => {
    const levelNames = [
        "Bronze", // From 0 to 4999 coins
        "Silver", // From 5000 coins to 24,999 coins
        "Gold", // From 25,000 coins to 99,999 coins
        "Platinum", // From 100,000 coins to 999,999 coins
        "Diamond", // From 1,000,000 coins to 2,000,000 coins
        "Epic", // From 2,000,000 coins to 10,000,000 coins
        "Legendary", // From 10,000,000 coins to 50,000,000 coins
        "Master", // From 50,000,000 coins to 100,000,000 coins
        "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
        "Lord" // From 1,000,000,000 coins to ∞
    ];
    const levelMinPoints = [
        0, // Bronze
        5000, // Silver
        25000, // Gold
        100000, // Platinum
        1000000, // Diamond
        2000000, // Epic
        10000000, // Legendary
        50000000, // Master
        100000000, // GrandMaster
        1000000000 // Lord
    ];
    const [levelIndex, setLevelIndex] = useState(6);
    const [points, setPoints] = useState(22749365);
    const [clicks, setClicks] = useState([]);
    const pointsToAdd = 11;
    const profitPerHour = 126420;
    const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
    const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
    const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");
    const calculateTimeLeft = (targetHour) => {
        const now = new Date();
        const target = new Date(now);
        target.setUTCHours(targetHour, 0, 0, 0);
        if (now.getUTCHours() >= targetHour) {
            target.setUTCDate(target.getUTCDate() + 1);
        }
        const diff = target.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const paddedHours = hours.toString().padStart(2, '0');
        const paddedMinutes = minutes.toString().padStart(2, '0');
        return `${paddedHours}:${paddedMinutes}`;
    };
    useEffect(() => {
        const updateCountdowns = () => {
            setDailyRewardTimeLeft(calculateTimeLeft(0));
            setDailyCipherTimeLeft(calculateTimeLeft(19));
            setDailyComboTimeLeft(calculateTimeLeft(12));
        };
        updateCountdowns();
        const interval = setInterval(updateCountdowns, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);
    const handleCardClick = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
        setTimeout(() => {
            card.style.transform = '';
        }, 100);
        setPoints(points + pointsToAdd);
        setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
    };
    const handleAnimationEnd = (id) => {
        setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
    };
    const calculateProgress = () => {
        if (levelIndex >= levelNames.length - 1) {
            return 100;
        }
        const currentLevelMin = levelMinPoints[levelIndex];
        const nextLevelMin = levelMinPoints[levelIndex + 1];
        const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
        return Math.min(progress, 100);
    };
    useEffect(() => {
        const currentLevelMin = levelMinPoints[levelIndex];
        const nextLevelMin = levelMinPoints[levelIndex + 1];
        if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
            setLevelIndex(levelIndex + 1);
        }
        else if (points < currentLevelMin && levelIndex > 0) {
            setLevelIndex(levelIndex - 1);
        }
    }, [points, levelIndex, levelMinPoints, levelNames.length]);
    const formatProfitPerHour = (profit) => {
        if (profit >= 1000000000)
            return `+${(profit / 1000000000).toFixed(2)}B`;
        if (profit >= 1000000)
            return `+${(profit / 1000000).toFixed(2)}M`;
        if (profit >= 1000)
            return `+${(profit / 1000).toFixed(2)}K`;
        return `+${profit}`;
    };
    useEffect(() => {
        const pointsPerSecond = Math.floor(profitPerHour / 3600);
        const interval = setInterval(() => {
            setPoints(prevPoints => prevPoints + pointsPerSecond);
        }, 1000);
        return () => clearInterval(interval);
    }, [profitPerHour]);
    return (_jsxs("div", { className: "bg-black flex justify-center", children: [_jsxs("div", { className: "w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl", children: [_jsxs("div", { className: "px-4 z-10", children: [_jsxs("div", { className: "flex items-center space-x-2 pt-4", children: [_jsx("div", { className: "p-1 rounded-lg bg-[#1d2025]", children: _jsx(Hamster, { size: 24, className: "text-[#d4d4d4]" }) }), _jsx("div", { children: _jsx("p", { className: "text-sm", children: "Nikandr (CEO)" }) })] }), _jsxs("div", { className: "flex items-center justify-between space-x-4 mt-1", children: [_jsx("div", { className: "flex items-center w-1/3", children: _jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("p", { className: "text-sm", children: levelNames[levelIndex] }), _jsxs("p", { className: "text-sm", children: [levelIndex + 1, " ", _jsxs("span", { className: "text-[#95908a]", children: ["/ ", levelNames.length] })] })] }), _jsx("div", { className: "flex items-center mt-1 border-2 border-[#43433b] rounded-full", children: _jsx("div", { className: "w-full h-2 bg-[#43433b]/[0.6] rounded-full", children: _jsx("div", { className: "progress-gradient h-2 rounded-full", style: { width: `${calculateProgress()}%` } }) }) })] }) }), _jsxs("div", { className: "flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64", children: [_jsx("img", { src: binanceLogo, alt: "Exchange", className: "w-8 h-8" }), _jsx("div", { className: "h-[32px] w-[2px] bg-[#43433b] mx-2" }), _jsxs("div", { className: "flex-1 text-center", children: [_jsx("p", { className: "text-xs text-[#85827d] font-medium", children: "Profit per hour" }), _jsxs("div", { className: "flex items-center justify-center space-x-1", children: [_jsx("img", { src: dollarCoin, alt: "Dollar Coin", className: "w-[18px] h-[18px]" }), _jsx("p", { className: "text-sm", children: formatProfitPerHour(profitPerHour) }), _jsx(Info, { size: 20, className: "text-[#43433b]" })] })] }), _jsx("div", { className: "h-[32px] w-[2px] bg-[#43433b] mx-2" }), _jsx(Settings, { className: "text-white" })] })] })] }), _jsx("div", { className: "flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0", children: _jsxs("div", { className: "absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]", children: [_jsxs("div", { className: "px-4 mt-6 flex justify-between gap-2", children: [_jsxs("div", { className: "bg-[#272a2f] rounded-lg px-4 py-2 w-full relative", children: [_jsx("div", { className: "dot" }), _jsx("img", { src: dailyReward, alt: "Daily Reward", className: "mx-auto w-12 h-12" }), _jsx("p", { className: "text-[10px] text-center text-white mt-1", children: "Daily reward" }), _jsx("p", { className: "text-[10px] font-medium text-center text-gray-400 mt-2", children: dailyRewardTimeLeft })] }), _jsxs("div", { className: "bg-[#272a2f] rounded-lg px-4 py-2 w-full relative", children: [_jsx("div", { className: "dot" }), _jsx("img", { src: dailyCipher, alt: "Daily Cipher", className: "mx-auto w-12 h-12" }), _jsx("p", { className: "text-[10px] text-center text-white mt-1", children: "Daily cipher" }), _jsx("p", { className: "text-[10px] font-medium text-center text-gray-400 mt-2", children: dailyCipherTimeLeft })] }), _jsxs("div", { className: "bg-[#272a2f] rounded-lg px-4 py-2 w-full relative", children: [_jsx("div", { className: "dot" }), _jsx("img", { src: dailyCombo, alt: "Daily Combo", className: "mx-auto w-12 h-12" }), _jsx("p", { className: "text-[10px] text-center text-white mt-1", children: "Daily combo" }), _jsx("p", { className: "text-[10px] font-medium text-center text-gray-400 mt-2", children: dailyComboTimeLeft })] })] }), _jsx("div", { className: "px-4 mt-4 flex justify-center", children: _jsxs("div", { className: "px-4 py-2 flex items-center space-x-2", children: [_jsx("img", { src: dollarCoin, alt: "Dollar Coin", className: "w-10 h-10" }), _jsx("p", { className: "text-4xl text-white", children: points.toLocaleString() })] }) }), _jsx("div", { className: "px-4 mt-4 flex justify-center", children: _jsx("div", { className: "w-80 h-80 p-4 rounded-full circle-outer", onClick: handleCardClick, children: _jsx("div", { className: "w-full h-full rounded-full circle-inner", children: _jsx("img", { src: mainCharacter, alt: "Main Character", className: "w-full h-full" }) }) }) })] }) })] }), _jsxs("div", { className: "fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs", children: [_jsxs("div", { className: "text-center text-[#85827d] w-1/5", children: [_jsx(Friends, { className: "w-8 h-8 mx-auto" }), _jsx("p", { className: "mt-1", children: "Friends" })] }), _jsxs("div", { className: "text-center text-[#85827d] w-1/5", children: [_jsx(Coins, { className: "w-8 h-8 mx-auto" }), _jsx("p", { className: "mt-1", children: "Task" })] }), _jsxs("div", { className: "text-center text-[#85827d] w-1/5", children: [_jsx("img", { src: hamsterCoin, alt: "Airdrop", className: "w-8 h-8 mx-auto" }), _jsx("p", { className: "mt-1", children: "Airdrop" })] })] }), clicks.map((click) => (_jsx("div", { className: "absolute text-5xl font-bold opacity-0 text-white pointer-events-none", style: {
                    top: `${click.y - 42}px`,
                    left: `${click.x - 28}px`,
                    animation: `float 1s ease-out`
                }, onAnimationEnd: () => handleAnimationEnd(click.id), children: pointsToAdd }, click.id)))] }));
};
export default Layout;
