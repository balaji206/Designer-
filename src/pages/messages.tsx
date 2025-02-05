
import { Menu, Search, PenLine, Plus, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './messages.css'
function Message() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-purple-900">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-56 bg-[#1C1C1C] p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
          <span className="text-gray-300 font-medium">STYLUX</span>
        </div>
        
        <div className="flex items-center gap-3 mb-4 px-2 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">
          <div className="w-6 h-6 bg-gray-700 rounded-lg"></div>
          <span className="text-gray-300">STYLUX</span>
        </div>
        
        <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">
          <div className="w-6 h-6 bg-gray-700 rounded-lg flex items-center justify-center">
            <Menu size={16} className="text-gray-300" />
          </div>
          <span className="text-gray-300">Explore STYLUX</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-56 p-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 text-2xl font-semibold">STYLUX</span>
            <button className="p-1 hover:bg-purple-800/30 rounded">
              <PenLine size={20} className="text-purple-400" />
            </button>
          </div>
          <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
            <Link to='/try'>Try for free</Link>
          </button>
        </div>

        {/* Chat Interface */}
        <div className="max-w-3xl mx-auto mt-32">
            <div className='search'>
          <div className="bg-purple-900/40 backdrop-blur-lg p-8 rounded-2xl border border-purple-800/50 margin-bottom 120px">
          
            <p className="text-white text-2xl mb-8 " >
            <input type="text" placeholder="Message STYLUX" className="flex-1 bg-transparent text-white placeholder-zinc-400 outline-none" value=""/>
            </p>
            
            <div className="flex gap-4">
              <button className="p-3 hover:bg-purple-800/30 rounded-full border border-purple-700/50">
                <Plus size={24} className="text-purple-400" />
              </button>
              
              <button className="ml-auto px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
                Generate
              </button>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm text-center mt-4">
            By clicking "Generate" you agree to generate.{' '}
            <a href="#" className="text-purple-400 hover:underline">
              Privacy Notice
            </a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;