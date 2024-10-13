

const Home = () => {

    return (
      <div className="bg-black flex justify-center">
        <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
          <div className="px-4 z-10">
            <div className="flex items-center space-x-2 pt-4">
              <div className="p-1 rounded-lg bg-[#1d2025]">
                
              </div>
              <div>
                <p className="text-sm">UMAR bIN MUSA (CEO)</p>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4 mt-1">
              <div className="flex items-center w-1/3">
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="text-sm"></p>
                    <p className="text-sm"> <span className="text-[#95908a]"></span></p>
                  </div>
                  <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
                    <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                      <div className="progress-gradient h-2 rounded-full" ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
                
                <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
                <div className="flex-1 text-center">
                  <p className="text-xs text-[#85827d] font-medium">Profit per hour</p>
                  <div className="flex items-center justify-center space-x-1">
                   
                    <p className="text-sm"></p>
                   
                  </div>
                </div>
                <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
                
              </div>
            </div>
          </div>
  
          <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
            <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
              <div className="px-4 mt-6 flex justify-between gap-2">
                <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                  <div className="dot">
                    
                  </div>
                
                  <p className="text-[10px] text-center text-white mt-1">Daily reward</p>
                  <p className="text-[10px] font-medium text-center text-gray-400 mt-2"></p>
                </div>
                <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                  <div className="dot"></div>
                  
                  <p className="text-[10px] text-center text-white mt-1">Daily cipher</p>
                  <p className="text-[10px] font-medium text-center text-gray-400 mt-2"></p>
                </div>
                
              </div>
  
              <div className="px-4 mt-4 flex justify-center">
                <div className="px-4 py-2 flex items-center space-x-2">
                
                  <p className="text-4xl text-white"></p>
                </div>
              </div>
  
             
            </div>
          </div>
        </div>
  
        {/* Bottom fixed div */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
         
          <div className="text-center text-[#85827d] w-1/5">
            
            <p className="mt-1">Mine</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5">
            
            <p className="mt-1">Friends</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5">
           
            <p className="mt-1">Earn</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5">
           
            <p className="mt-1">Airdrop</p>
          </div>
        </div>
  
       
          </div>
      
    );
  };
  
  export default Home;
  