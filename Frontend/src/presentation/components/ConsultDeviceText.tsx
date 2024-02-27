import { useState, FormEvent } from 'react';

interface Props {
    onSendQuery: (query: string, selectedOption: string, id:string) => void ;
    placeholder: string;
    options : Options[]
}

interface Options {
    id:string;
    text:string;
}




const ConsultDeviceText = ({ onSendQuery, placeholder, options }: Props) => {
    const [query, setQuery] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('')

    const handleSendQuery = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        if(query.trim().length === 0) return;
        onSendQuery(query,selectedOption, id);
        setQuery('');
    }
    return (
        <form
            onSubmit={handleSendQuery}
            className='flex flex-col w-full md:flex-row items-center justify-center h-52 p-2 rounded-xl bg-indigo-600  px-4 w-100%'
        > 
            <div className='flex-grow w-full'>
                <div className='flex flex-col items-center gap-2 md:flex-row md:w-100%'>
                    <input 
                    type="text" 
                    autoFocus 
                    name='name' 
                    className={selectedOption === '' ? 'w-full rounded-xl focus:outline-none focus:border-indigo-600 pl-4 h-10 border-red-400 border-4 text-red-900'  : 'w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'}
                    placeholder='Create Your Device'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    
                    />
                    <input 
                    type="text" 
                    autoFocus 
                    name='id' 
                    className={selectedOption === '' ? 'w-full rounded-xl focus:outline-none focus:border-indigo-600 pl-4 h-10 border-red-400 border-4 text-red-900'  : 'w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'}
                    placeholder='Post your Id Device'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    
                    />
                    <select name='type' onChange={(e) => setSelectedOption(e.target.value)}
                    className='w-full md:w-2/5 md:ml-5  border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-600 pl-4 h-10'>
                        <option value="">Options</option>
                        {
                             options.map(device => (
                                
                                <option key={device.id} value={device.id}>{device.text}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
                   

            <div className='ml-4'>
                <button className='btn-primary w-28 flex items-center justify-center'>
                    <span className='mr-2'>Send</span>
                    <i className='fa-regular fa-paper-plane'></i>
                </button>
            </div>

        </form>
    )
}

export default ConsultDeviceText
