import { useState, FormEvent } from 'react';

interface Props {
    onSendQuery: (query: string, selectedOption: string) => void ;
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
        onSendQuery(query,selectedOption);
        setQuery('');
    }
    return (
        <form
            onSubmit={handleSendQuery}
            className='flex flex-col w-full md:flex-row items-center justify-center h-40 p-2 rounded-xl bg-indigo-600  px-4 w-100%'
        > 
            <div className='flex-grow w-full'>
                <div className='flex flex-col items-center gap-2 md:flex-row md:w-100%'>
                    <input 
                    type="text" 
                    autoFocus 
                    name='Message' 
                    className={selectedOption === '' ? 'w-full rounded-xl focus:outline-none focus:border-indigo-600 pl-4 h-10 border-red-400 border-4 text-red-900'  : 'w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'}
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    
                    />
                    <select name='select'
                    className='w-full md:w-2/5 md:ml-5  border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-600 pl-4 h-10'>
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
                <button className='btn-primary w-28 flex items-center justify-center'>
                    <span className='mr-2'>Send</span>
                    <i className='fa-regular fa-paper-plane'></i>
                </button>
            </div>

        </form>
    )
}

export default ConsultDeviceText
