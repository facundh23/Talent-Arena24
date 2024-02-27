import { useState, FormEvent } from 'react';

interface Props {
    onSendQuery: (query: string) => void;
    placeholder: string;
    options : Options[]
}

interface Options {
    id:string;
    text:string;
}




const ConsultDeviceText = ({ onSendQuery, placeholder, options }: Props) => {
    const [query, setQuery] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('')

    const handleSendQuery = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        if(query.trim().length === 0) return;
        onSendQuery(query);
        setQuery('');
    }
    return (
        <form
            onSubmit={handleSendQuery}
            className='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'
        >
            <div className='flex-grow'>
                <div className='flex'>
                    <input 
                    type="text" 
                    autoFocus 
                    name='Message' 
                    className={selectedOption === '' ? 'w-full rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 border-red-400 border-4 text-red-900'  : 'w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'}
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    
                    />
                    <select name='select'
                    className='w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'>
                        <option value="">Options</option>
                        {
                            options && options.map(device => (
                                
                                <option key={device.id} value={device.id}>{device.text}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className='ml-4'>
                <button className='btn-primary'>
                    <span className='mr-2'>Send</span>
                    <i className='fa-regular fa-paper-plane'></i>
                </button>
            </div>
        </form>
    )
}

export default ConsultDeviceText
